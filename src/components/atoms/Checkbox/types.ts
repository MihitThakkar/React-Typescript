export interface CheckboxProps {
  className?: string;
  label?: any;
  checked?: boolean;
  disabled?: boolean;
  labelClass?: string;
  onChange: (checked: boolean) => void;
}
