import { InputProps, TextAreaProps } from "@nextui-org/input";

export interface IInput extends InputProps {
  label?: string;
  labelColor?: string;
  labelWidth?: string;
  type: string;
  width?: string;
  placeholder: string;
  containerStyle?: string;
  height?: string;
}

export interface ITextArea extends TextAreaProps {
  label?: string;
  labelWidth?: string;
  type: string;
  width?: string;
  placeholder: string;
  containerStyle?: string;
  labelColor?: string;
  height?: string;
}

export interface ICameraInput {
  containerStyle?: string;
  imageSrc: string;
  label: string;
}
export interface InPutNoLabelProp {
  defaultValue?: string;
  handelChangeText?: () => void;
  mainStyles?: string;
  inputParentStyles?: string;
  inputStyles?: string;
  placeholder?: string;
  type?: "text" | "number" | "date";
}
