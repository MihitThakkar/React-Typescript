export interface CardProps {
  className?: string;
  children?: any;
  onClick?: () => void;
  variant?: string;
  noBorder?: boolean;
  simpleCard?: boolean;
  onScroll?: (event: any) => void;
  cardRef?: any;
}
