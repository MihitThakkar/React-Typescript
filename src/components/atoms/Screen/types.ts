export interface ScreenProps {
  className?: string;
  preventSlide?: boolean;
  customSideMenuVisibility?: boolean;
  headerDetails?: any;
  footerDetails?: any;
  screenAnimationClass?: string;
  customSideMenuCallback?: (visible: boolean) => void;
}
