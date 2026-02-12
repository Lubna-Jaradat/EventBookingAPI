import { ApiStatusCode } from "./api-status-codes";

export type PaginationQueryType = {
  page?: number;
  limit?: number;
};

export type PaginationResponseType = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type ApiSuccessResponse<T> = {
  success: true;
  data: T;
};

export type ApiPaginationSuccessResponse<T> = {
  success: true;
  data: {
    items: T[];
    pagination: PaginationResponseType;
  };
};

export type ErrorField = {
  field: string;
  message: string;
};

export type ApiErrorResponse = {
  success: false;
  error : {
    message: string;
    statusCode: ApiStatusCode;
  }
};

export type UnifiedApiResponse<T> =
  | ApiSuccessResponse<T>
  | ApiPaginationSuccessResponse<T>
  | ApiErrorResponse;