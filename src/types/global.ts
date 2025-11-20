export type IBaseRes<T> = {
  statusCode: number;
  path: string;
  timestamp: Date;
  data: T;
};

export type IBasePagination = {
  search?: string;
  page?: number;
  limit?: number;
};

export type PaginationResponse<T> = {
  statusCode: number;
  data: T;
  pagination: {
    totalPage: number;
    total: number;
    pageSize: number;
    currentPage: number;
  };
};
