export type LanguageRecord<T = string> = Record<'th' | 'en', T>;

export type ListFilters = {
  limit?: number;
  page?: number;
};

export type Pagination<T = unknown> = {
  limit: number;
  currentPage: number;
  totalPage: number;
  totalRecord: number;
  records: T[];
};
