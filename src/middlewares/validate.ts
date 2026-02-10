import { CustomError } from "../util/exeption.util";
import zod, { ZodError, ZodType } from "zod";
import { ModuleNameType } from "../types/constanst";
import { HttpErrorStatus } from "../types/api-status-codes";

export const zodValidation = <T>(
  schema: ZodType<T>,
  payLoad: T,
  moduleName: ModuleNameType,
) => {
  try {
    const data = schema.parse(payLoad);
    return data;
  } catch (error) {
    if (error instanceof ZodError) {
      throw new CustomError(
        error.message,
        moduleName,
        HttpErrorStatus.BadRequest,
      );
    }
    throw error;
  }
};
