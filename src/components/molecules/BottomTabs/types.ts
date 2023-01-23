export interface BottomTabsProps {
  className?: string;
  tabSelected: string;
  tabSelectionCallback: (tab: string) => void;
  theme?: string;
}
