type IOptions = {
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: string;
  };
  
  type IOptionResult = {
    page: number;
    limit: number;
    skip: number;
    sortBy: string;
    sortOrder: string;
  };
  const calculatePagination = (options: IOptions): IOptionResult => {
    const page = Number(options.page || 1);
    const limit = Number(options.limit || 10);
    const skip = (page - 1) * limit;
  
    const sortBy = options.sortBy || 'createdAt';
    const sortOrder = options.sortOrder || 'asc';
  
    return {
      page,
      limit,
      skip,
      sortBy,
      sortOrder,
    };
  };
  
  export const paginationHelper = {
    calculatePagination,
  };
  