export interface RangeSliderProps {
  className?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  min: string | number;
  max: string | number;
}
