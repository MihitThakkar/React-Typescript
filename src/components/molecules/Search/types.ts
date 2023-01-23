export interface SearchProps {
  placeholder?: string;
  list: any[];
  callback: (searchedList: any[]) => void;
  getSearchValue?: (searchValue: string) => void;
  searchKey?: string;
  secondarySearchKey?: string;
  className?: string;
  defaultValue?: any;
  maxLength?: number;
  type?: string;
  others?: any;
}
