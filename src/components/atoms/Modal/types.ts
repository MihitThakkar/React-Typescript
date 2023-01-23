export interface ModalProps {
  visible?: boolean;
  onClose?: () => void;
  showMask?: boolean;
  className?: string;
  isPullable?: boolean;
  modalHeader?: any;
}
