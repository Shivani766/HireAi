import { Job } from "../models/job.model.js";
import { User } from "../models/user.model.js";

export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experience,
      position,
      companyId,
    } = req.body;
    const userId = req.id;

    const user = await User.findById(userId);
    if (!user || user.role !== "recruiter") {
      return res.status(403).json({
        message: "Only recruiters can post jobs.",
        success: false,
      });
    }

    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !experience ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({
        message: "Something is missing.",
        success: false,
      });
    }

    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      salary: Number(salary),
      location,
      jobType,
      experienceLevel: experience,
      position,
      company: companyId,
      created_by: userId,
    });

    return res.status(201).json({
      message: "New job created successfully.",
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error while posting job",
      success: false,
    });
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const location = req.query.location || "";
    const jobType = req.query.jobType || "";
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const filter = {
      $and: [
        {
          $or: [
            {
              title: { $regex: keyword, $options: "i" },
            },
            {
              description: { $regex: keyword, $options: "i" },
            },
            {
              location: { $regex: keyword, $options: "i" },
            },
          ],
        },
      ],
    };

    if (location) {
      filter.$and.push({ location: { $regex: location, $options: "i" } });
    }
    if (jobType) {
      filter.$and.push({ jobType: { $regex: jobType, $options: "i" } });
    }

    const totalJobs = await Job.countDocuments(filter);
    const jobs = await Job.find(filter)
      .populate("company")
      .populate({ path: "created_by", select: "fullname email" })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return res.status(200).json({
      jobs,
      success: true,
      page,
      totalPages: Math.ceil(totalJobs / limit),
      totalJobs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error while fetching jobs",
      success: false,
    });
  }
};

export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId)
      .populate("company")
      .populate({
        path: "applications",
        populate: {
          path: "applicant",
          select: "fullname email profile",
        },
      });

    if (!job) {
      return res.status(404).json({
        message: "Job not found.",
        success: false,
      });
    }

    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error while fetching job details",
      success: false,
    });
  }
};

export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;
    const user = await User.findById(adminId);
    if (!user || user.role !== "recruiter") {
      return res.status(403).json({
        message: "Only recruiters can view their jobs.",
        success: false,
      });
    }
    const jobs = await Job.find({ created_by: adminId })
      .populate("company")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error while fetching recruiter jobs",
      success: false,
    });
  }
};
