"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmergency = exports.UpdateEmergency = exports.GetEmergency = exports.GetAllEmergency = exports.CreateEmergency = void 0;
const Emergency_1 = __importDefault(require("../models/Emergency"));
const CreateEmergency = async (req, res) => {
    try {
        const newEmergency = new Emergency_1.default(req.body);
        const saved = await newEmergency.save();
        return res.status(201).json({ success: true, data: saved });
    }
    catch (err) {
        console.log(err);
        return res.status(500).send("error");
    }
};
exports.CreateEmergency = CreateEmergency;
const GetAllEmergency = async (req, res) => {
    try {
        const data = Emergency_1.default.find({});
        return res.status(200).json({ success: true, data: data });
    }
    catch (err) {
        console.log(err);
        return res.status(500).send("error");
    }
};
exports.GetAllEmergency = GetAllEmergency;
const GetEmergency = async (req, res) => {
    try {
        const { id } = req.query;
        const data = await Emergency_1.default.findById(id);
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
exports.GetEmergency = GetEmergency;
const UpdateEmergency = async (req, res) => {
    try {
        const { id } = req.query;
        const body = {
            task: req.body.task,
            description: req.body.description,
            duration: req.body.duration,
        };
        const data = await Emergency_1.default.findByIdAndUpdate(id, body, {
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
exports.UpdateEmergency = UpdateEmergency;
const deleteEmergency = async (req, res) => {
    try {
        const { id } = req.query;
        const data = await Emergency_1.default.deleteOne({ _id: id });
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
exports.deleteEmergency = deleteEmergency;
