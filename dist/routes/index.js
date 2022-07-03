"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const handlers_1 = require("../handlers");
const report_1 = require("../handlers/report");
const emergency_1 = require("../handlers/emergency");
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 5 * 60 * 1000,
    max: 3,
    message: "Too many attempts from this IP, please try again after 5 minutes",
    standardHeaders: true,
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
const router = (0, express_1.Router)();
router.post("/register", handlers_1.Register);
router.post("/login", limiter, handlers_1.Login);
// report
router.post("/report", report_1.CreateReport);
router.get("/reports", report_1.GetAllReport);
router.get("/report", report_1.GetReport);
router.put("/report", report_1.UpdateReport);
router.delete("/report", report_1.deleteReport);
// emergency
router.post("/case", emergency_1.CreateEmergency);
router.get("/cases", emergency_1.GetAllEmergency);
router.get("/case", emergency_1.GetEmergency);
router.put("/case", emergency_1.UpdateEmergency);
router.delete("/case", emergency_1.deleteEmergency);
exports.default = router;
