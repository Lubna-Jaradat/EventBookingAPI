import { Response } from 'express';
import { Prisma } from '@prisma/client';
import { ModuleNameType } from '../types/constanst';
import { ApiStatusCode } from '../types/api-status-codes';

export class CustomError extends Error {
  public errorType = 'custom';
  constructor(
    msg: string,
    public moduleName: ModuleNameType,
    public statusCode: ApiStatusCode = 400,
  ) {
    super(msg);
  }
}

export const handleError = (error: unknown, res: Response) => {
  if (error instanceof CustomError) {
    console.log('customError', error);
    res.error({success: false, error: { message: error.message, statusCode: error.statusCode }});
    return;
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    console.log('prisma error message', error.message);
    res.error({ success: false, error: { message: error.message, statusCode: 400 }});
    return;
  }
  // TODO handle mongoose Error

  console.log(`internal server error`, error);
  //   we should alert ourself
  res.error({ success: false, error: { message: 'internal server error', statusCode: 500 }});
};