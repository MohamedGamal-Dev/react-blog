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
}
