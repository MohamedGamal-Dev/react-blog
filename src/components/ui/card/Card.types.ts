export interface CardFrameProps {
  classNameOuter?: string;
  classNameInner?: string;
  classNameFooter?: string;
  defaultStyleOuter?: boolean;
  defaultStyleInner?: boolean;
  defaultStyleFooter?: boolean;
  frameFooter?: boolean;
  frameFooterContent?: () => JSX.Element;
  children?: React.ReactNode;
  // comp?: JSX.Element | React.ReactNode | React.FunctionComponent;
}

export interface CardSubHeaderProps {
  author?: JSX.Element | React.ReactNode;
  date?: JSX.Element | React.ReactNode;
  children?: React.ReactNode;
}

export interface CardHeaderProps {
  id?: string;
  title?: string;
  handleDeleteClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  children?: React.ReactNode;
}
