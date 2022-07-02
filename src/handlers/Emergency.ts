import { Response, Request } from "express";
import Emergency from "../models/Emergency";

export const Register = async (req: Request, res: Response) => {
  try {
    const newEmergency = new Emergency(req.body);
    const saved = await newEmergency.save();
    return res.status(201).json({ success: true, data: saved });
  } catch (err) {
    console.log(err);
    return res.status(500).send("error");
  }
};
