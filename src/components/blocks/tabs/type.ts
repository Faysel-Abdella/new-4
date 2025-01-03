interface TabItem {
  title: string;
  content: React.ReactNode;
}

export interface CustomTabProps {
  items: TabItem[];
  padding?:string
  containerPadding?:string
  borderColor?: string;
  textStyle?: string;
  raduis?: string;
  separator?: boolean;
  selectedBorderColor?: string;
  unselectedBorderColor?: string;
  selectedTextColor?: string;
  unselectedTextColor?: string;
  selectedBgColor?: string;
  unselectedBgColor?: string;
  onTabChange?: (index: number) => void;
  className?: string;
}

  