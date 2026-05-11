import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  applyJob,
  getApplicants,
  getAppliedJobs,
  updateStatus,
} from "../controllers/application.controller.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.route("/apply/:id").post(isAuthenticated, singleUpload, applyJob);
router.route("/my-applications").get(isAuthenticated, getAppliedJobs);
router.route("/get").get(isAuthenticated, getAppliedJobs);
router.route("/:id/applicants").get(isAuthenticated, getApplicants);
router.route("/update/:id").put(isAuthenticated, updateStatus);

export default router;
