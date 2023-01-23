export interface DropdownModalProps {
  visible: boolean;
  onClose: () => void;
  callback: (selection: any) => void;
  list: any[];
  stringList?: any[];
  title: string;
  selected: string;
}
