export const HttpErrorStatus = {
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  ServerError:500
}as const;

export type HttpErrorStatusType=typeof HttpErrorStatus [keyof typeof HttpErrorStatus];

export type ApiStatusCode=HttpErrorStatusType|200|201|202|204