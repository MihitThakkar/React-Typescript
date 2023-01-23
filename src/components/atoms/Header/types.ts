export interface HeaderProps {
  className?: string;
  pageName?: any;
  otherDetails?: any;
  backActionToCloseDeepLink?: boolean;
  customBackAction?: () => void;
  hamBurgerMenuClickCallback?: () => void;
  hasLogo?: boolean;
  hideBackButton?: boolean;
  isSideMenuOpened?: boolean;
  hasSideMenu?: boolean;
  isPulled?: boolean;
}
