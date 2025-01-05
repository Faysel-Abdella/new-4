/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
export interface ITable {
  tabelWidth?: string;
  header: IHeader[];
  hasPagination?: boolean;
  title?: string;
  data: any[];
  buttonLabel?: string;
  buttonWidth?: string;
  buttonRadius?: string;
  content?: boolean;
  onClick?: () => void;
  contenBtntOnClick?: () => void;
}

export interface IHeader {
  label: string | ReactNode;
}

export interface IData {
  element: ReactNode | string;
}
