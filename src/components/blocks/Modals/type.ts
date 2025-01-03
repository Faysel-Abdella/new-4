export type textModal = {
  title: string;
  subTitle?: string;
  description?: string;
  textStyle?: string;
  disabledButtonLabel?: string;
  enabledButtonLabel: string;
};

export type ContentModalType = {
  title: string;
  content: React.ReactNode;
};

export type TableModalType = {
  content: React.ReactNode;
  disabledButtonLabel: string;
  enabledButtonLabel: string;
  handleDisabledButton: () => void;
  handleEnabledButton: () => void;
  height?: string;
};
