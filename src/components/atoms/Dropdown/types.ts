export interface DropdownProps {
  className?: string;
  defaultValue?: any;
  title: string;
  list: any[];
  stringList?: any[];
  callback: (value: any) => void;
  openDropDown?: boolean;
}
