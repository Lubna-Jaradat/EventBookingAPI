import { NextFunction, Request, Response } from "express";
import {
  UnifiedApiResponse,
} from "../types/api-response-types";

const formatApiResponse = (res: UnifiedApiResponse<any>) => res;

export const ResponseEnhancer = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.ok = (data) =>
    res.status(200).json(formatApiResponse({ success: true, data }));
  res.create = (data) =>
    res.status(201).json(formatApiResponse({ success: true, data }));
  res.error = (err) =>
    res
      .status(err.error.statusCode)
      .json(err);

  next();
};
