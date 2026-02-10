import type { Response } from "express";
import { ModuleNameType } from "../types/constanst";
import { HttpErrorStatusType } from "../types/api-status-codes";

export class CustomError extends Error {
  public errorType = "custom";

  constructor(
    message: string,
    public moduleName: ModuleNameType,
    public statusCode: HttpErrorStatusType,
  ) {
    super(message);
  }
}

export const HandleError = (err: unknown, res: Response) => {
  if (err instanceof CustomError) {
    res.error({
      success: false,
      error: { message: err.message, statusCode: err.statusCode },
    });

    return;
  }

  res.error({
    success: false,
    error: { message: "internal server error", statusCode: 500 },
  });
};
