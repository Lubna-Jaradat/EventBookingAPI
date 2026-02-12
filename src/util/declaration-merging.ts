import { ApiPaginationSuccessResponse, ApiErrorResponse } from "../types/api-response-types";
declare global {
  namespace Express {
    interface Response {
      create: (data: object) => this;
      ok: (data: object) => this;
      paginationResponse: (
        data: ApiPaginationSuccessResponse<object>
      ) => this;
      error: (err: ApiErrorResponse) => this;
    }
  }
}