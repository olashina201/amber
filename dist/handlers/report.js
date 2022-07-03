"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReport = exports.UpdateReport = exports.GetReport = exports.GetAllReport = exports.CreateReport = void 0;
const Report_1 = __importDefault(require("../models/Report"));
const CreateReport = async (req, res) => {
    try {
        const newReport = new Report_1.default(req.body);
        const saved = await newReport.save();
        return res.status(201).json({ success: true, data: saved });
    }
    catch (err) {
        console.log(err);
        return res.status(500).send("error");
    }
};
exports.CreateReport = CreateReport;
const GetAllReport = async (req, res) => {
    try {
        const data = Report_1.default.find({});
        return res.status(200).json({ success: true, data: data });
    }
    catch (err) {
        console.log(err);
        return res.status(500).send("error");
    }
};
exports.GetAllReport = GetAllReport;
const GetReport = async (req, res) => {
    try {
        const { id } = req.query;
        const data = await Report_1.default.findById(id);
        if (!data) {
            return res.status(400).json({ success: false });
        }
        else {
            return res.status(200).json({ success: true, data: data });
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).send("error");
    }
};
exports.GetReport = GetReport;
const UpdateReport = async (req, res) => {
    try {
        const { id } = req.query;
        const body = {
            task: req.body.task,
            description: req.body.description,
            duration: req.body.duration,
        };
        const data = await Report_1.default.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });
        if (!data) {
            return res.status(400).json({ success: false });
        }
        else {
            return res.status(200).json({ success: true, data: data });
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).send("error");
    }
};
exports.UpdateReport = UpdateReport;
const deleteReport = async (req, res) => {
    try {
        const { id } = req.query;
        const data = await Report_1.default.deleteOne({ _id: id });
        if (!data) {
            return res.status(400).json({ success: false });
        }
        else {
            return res.status(200).json({ success: true, data: {} });
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).send("error");
    }
};
exports.deleteReport = deleteReport;
