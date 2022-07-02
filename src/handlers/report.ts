import { Response, Request } from "express";
import Report from "../models/Report";

export const CreateReport = async (req: Request, res: Response) => {
  try {
    const newReport = new Report(req.body);
    const saved = await newReport.save();
    return res.status(201).json({ success: true, data: saved });
  } catch (err) {
    console.log(err);
    return res.status(500).send("error");
  }
};

export const GetAllReport = async (req: Request, res: Response) => {
  try {
    const data = Report.find({});
    return res.status(200).json({ success: true, data: data });
  } catch (err) {
    console.log(err);
    return res.status(500).send("error");
  }
};

export const GetReport = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const data = await Report.findById(id);
    if (!data) {
      return res.status(400).json({ success: false });
    } else {
      return res.status(200).json({ success: true, data: data });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("error");
  }
};

export const UpdateReport = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const body = {
      task: req.body.task,
      description: req.body.description,
      duration: req.body.duration,
    };
    const data = await Report.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!data) {
      return res.status(400).json({ success: false });
    } else {
      return res.status(200).json({ success: true, data: data });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("error");
  }
};

export const deleteReport = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const data = await Report.deleteOne({ _id: id });
    if (!data) {
      return res.status(400).json({ success: false });
    } else {
      return res.status(200).json({ success: true, data: {} });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("error");
  }
};
