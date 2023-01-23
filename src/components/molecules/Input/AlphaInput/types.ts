export interface AlphaInputProps {
  className?: string;
  inputRef?: any;
  readOnly?: boolean;
  placeholder?: any;
  showError?: boolean;
  errorMsg?: any;
  hasLabel?: boolean;
  onChange: (value: string) => void;
  onEnter?: (data?: any) => void;
  value: string | number;
  maxLength?: number;
  minLength?: number;
  others?: any;
}
