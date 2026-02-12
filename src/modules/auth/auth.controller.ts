import { Request, Response, NextFunction, RequestHandler } from "express";
import { AuthService } from "./auth.service";
import { HandleError } from "../../util/exeption.util";
import { zodValidation } from "../../middlewares/validation.middleware";
import { RegisterDTO, registerSchema } from "./schema/auth.schema";
import { AuthResponseDto } from "./dto/response.dto";
import { StringObject } from "../../types/constanst";
import { HttpErrorStatus } from "../../types/api-status-codes";
import { ApiSuccessResponse } from "../../types/api-response-types";

export class AuthController {
  private authService = new AuthService();

  public async register(
    req: Request<StringObject, StringObject, RegisterDTO>,
    res: Response<AuthResponseDto | string>,
    next: NextFunction,
  ) {
    try {
      const payloadData = zodValidation<RegisterDTO>(
        registerSchema,
        req.body,
        "AUTH",
      );
      const user = await this.authService.register(payloadData);
      res.create(user);
    } catch (error) {
      next(error);
    }
  }
}
export const authController = new AuthController();
