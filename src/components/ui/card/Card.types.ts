export interface CardFrameProps {
  outerClass?: string;
  outerStyle?: boolean;
  innerClass?: string;
  innerStyle?: boolean;
  footerClass?: string;
  footerStyle?: boolean;
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
  headerOptions: HeaderOptions;
  heading: string;
  headingLink?: boolean;
  headingStyles?: boolean;
  headingClass?: string;
  id?: string;
  children?: React.ReactNode;
}

export type HeaderOptions = {
  optionsStatus: boolean;

  editStatus?: boolean;
  editStyles?: boolean;
  editClass?: string;

  deleteStatus?: boolean;
  deleteStyles?: boolean;
  deleteClass?: string;
  handleDelete?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  addOption?: () => JSX.Element;
};
