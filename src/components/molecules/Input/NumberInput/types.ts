export interface NumberInputProps {
  className?: string;
  inputRef?: any;
  readOnly?: boolean;
  placeholder?: any;
  showError?: boolean;
  hasPasswordInput?: boolean;
  errorMsg?: any;
  hasLabel?: boolean;
  onChange: (value: string) => void;
  onEnter?: (data?: any) => void;
  value: any;
  maxLength?: number;
  minLength?: number;
  others?: any;
}
