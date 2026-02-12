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

function isCustomError(err: any): err is CustomError {
  return err?.errorType === "custom";
}

export const HandleError = (err: unknown, res: Response) => {
  if (isCustomError(err)) {
    res.error({
      success: false,
      error: { message: err.message, statusCode: err.statusCode },
    });
    console.log(`custom error in ${err.moduleName} module`, err);

    return;
  }

  res.error({
    success: false,
    error: { message: "<I'mh here>internal server error", statusCode: 500 },
  });
    console.log(`internal server error`, err);
};
