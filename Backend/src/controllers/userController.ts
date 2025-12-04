import { Request, Response } from "express";
import UserAction from "../models/UserAction.model";

export const addUserAction = async (req: Request, res: Response) => {
  try {
    const { userId, page, action } = req.body;
    const newAction = await UserAction.create({ userId, page, action });
    res.status(201).json(newAction);
  } catch (err) {
    res.status(500).json({ error: "Failed to add action" });
  }
};

export const getAllActions = async (req: Request, res: Response) => {
  try {
    const actions = await UserAction.find();
    res.status(200).json(actions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch actions" });
  }
};
