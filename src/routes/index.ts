import { Router } from "express";
import { Register, Login } from "../handlers";
import {
  CreateReport,
  GetAllReport,
  GetReport,
  UpdateReport,
  deleteReport,
} from "../handlers/report";
import {
  CreateEmergency,
  GetAllEmergency,
  GetEmergency,
  UpdateEmergency,
  deleteEmergency,
} from "../handlers/Emergency";
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 3, // Limit each IP to 3 requests per `window` (here, per 5 minutes)
  message: "Too many attempts from this IP, please try again after 5 minutes",
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const router = Router();

router.post("/register", Register);
router.post("/login", limiter, Login);

// report
router.post("/report", CreateReport);
router.get("/reports", GetAllReport);
router.get("/report", GetReport);
router.put("/report", UpdateReport);
router.delete("/report", deleteReport);

// emergency
router.post("/case", CreateEmergency);
router.get("/cases", GetAllEmergency);
router.get("/case", GetEmergency);
router.put("/case", UpdateEmergency);
router.delete("/case", deleteEmergency);

export default router;
