import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";
import { User } from "../models/user.model.js";
import getDataUri from "../utils/dataUri.js";
import cloudinary from "../utils/cloudinary.js";

export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    const file = req.file;

    if (!jobId) {
      return res.status(400).json({
        message: "Job id is required.",
        success: false,
      });
    }

    const user = await User.findById(userId);
    if (!user || user.role !== "student") {
      return res.status(403).json({
        message: "Only students can apply for jobs.",
        success: false,
      });
    }

    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });

    if (existingApplication) {
      return res.status(400).json({
        message: "You have already applied for this job",
        success: false,
      });
    }

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }

    let resumeUrl = user.profile?.resume;
    let resumeOriginalName = user.profile?.resumeOriginalName;

    if (file) {
      const fileUri = getDataUri(file);
      const cloudResponse = await cloudinary.uploader.upload(fileUri.content, {
        resource_type: "auto",
      });
      resumeUrl = cloudResponse.secure_url;
      resumeOriginalName = file.originalname;
    }

    if (!resumeUrl) {
      return res.status(400).json({
        message: "Please upload your resume in profile or attach it while applying.",
        success: false,
      });
    }

    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
      resume: resumeUrl,
      resumeOriginalName,
    });

    job.applications.push(newApplication._id);
    await job.save();
    return res.status(201).json({
      message: "Job applied successfully.",
      success: true,
      application: newApplication,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Server error while applying",
      success: false,
    });
  }
};

export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const applications = await Application.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        populate: [
          { path: "company" },
          { path: "created_by", select: "fullname email" },
        ],
      });

    return res.status(200).json({
      application: applications,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Server error while fetching applications",
      success: false,
    });
  }
};

export const getApplicants = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;

    const job = await Job.findById(jobId).populate({
      path: "applications",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicant",
        select: "fullname email phoneNumber profile",
      },
    });

    if (!job) {
      return res.status(404).json({
        message: "Job not found.",
        success: false,
      });
    }

    if (job.created_by.toString() !== userId.toString()) {
      return res.status(403).json({
        message: "You are not authorized to view applicants for this job.",
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
      message: error.message || "Server error while fetching applicants",
      success: false,
    });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;
    const userId = req.id;

    if (!status || !["pending", "accepted", "rejected"].includes(status.toLowerCase())) {
      return res.status(400).json({
        message: "Status must be pending, accepted or rejected",
        success: false,
      });
    }

    const application = await Application.findById(applicationId).populate("job");
    if (!application) {
      return res.status(404).json({
        message: "Application not found.",
        success: false,
      });
    }

    if (application.job.created_by.toString() !== userId.toString()) {
      return res.status(403).json({
        message: "You are not authorized to update this application status.",
        success: false,
      });
    }

    application.status = status.toLowerCase();
    await application.save();

    return res.status(200).json({
      message: "Status updated successfully.",
      success: true,
      application,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Server error while updating status",
      success: false,
    });
  }
};
