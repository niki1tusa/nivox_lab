export interface ITabsProps {
  value?: string;                     
  defaultValue?: string;
  onValueChange?: (arg: string) => void;
  items: string[];
  className?: string;
}
