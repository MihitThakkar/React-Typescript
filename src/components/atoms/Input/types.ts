export interface InputProps {
  className?: string;
  type?: string;
  inputRef?: any;
  readOnly?: boolean;
  isValid?: boolean;
  placeholder?: any;
  showError?: boolean;
  errorMsg?: any;
  hasLabel?: boolean;
  onChange: (data: any) => void;
  onEnter?: (data?: any) => void;
  others?: any;
  value: string | number;
}
