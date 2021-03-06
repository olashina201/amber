import { Response, Request } from "express";
import Emergency from "../models/Emergency";

export const CreateEmergency = async (req: Request, res: Response) => {
  try {
    const newEmergency = new Emergency(req.body);
    const saved = await newEmergency.save();
    return res.status(201).json({ success: true, data: saved });
  } catch (err) {
    console.log(err);
    return res.status(500).send("error");
  }
};

export const GetAllEmergency = async (req: Request, res: Response) => {
  try {
    const data = Emergency.find({});
    return res.status(200).json({ success: true, data: data });
  } catch (err) {
    console.log(err);
    return res.status(500).send("error");
  }
};

export const GetEmergency = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const data = await Emergency.findById(id);
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

export const UpdateEmergency = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const body = {
      task: req.body.task,
      description: req.body.description,
      duration: req.body.duration,
    };
    const data = await Emergency.findByIdAndUpdate(id, body, {
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

export const deleteEmergency = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const data = await Emergency.deleteOne({ _id: id });
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
