export interface CardProps
  extends CardFrameProps,
    CardHeaderProps,
    CardSubHeaderProps {
  children?: React.ReactNode;
}

export interface CardFrameProps {
  frameOuterStyle?: boolean;
  frameOuterClass?: string;

  frameInnerStyle?: boolean;
  frameInnerClass?: string;

  frameFooterStatus?: boolean;
  frameFooterStyle?: boolean;
  frameFooterClass?: string;
  frameFooterRender?: () => JSX.Element;

  children?: React.ReactNode;
}

export interface CardHeaderProps {
  headerOptions?: boolean;
  headingStatus?: boolean;
  headingText?: string;
  headingLink?: boolean;
  headingStyle?: boolean;
  headingClass?: string;

  targetId?: string;
  editStatus?: boolean;
  editStyle?: boolean;
  editClass?: string;

  deleteStatus?: boolean;
  deleteStyle?: boolean;
  deleteClass?: string;
  onDeleteClick?: () => void;

  headerOptionAdd?: () => JSX.Element;
  children?: React.ReactNode;
}

export interface CardSubHeaderProps {
  subHeaderStatus?: boolean;
  subHeaderStyle?: boolean;
  subHeaderClass?: string;

  authorStatus?: boolean;
  authorStyle?: boolean;
  authorClass?: string;
  authorRender?: JSX.Element | React.ReactNode;

  dateStatus?: boolean;
  dateStyle?: boolean;
  dateClass?: string;
  dateRender?: JSX.Element | React.ReactNode;

  subHeaderOptionAdd?: () => JSX.Element;
  children?: React.ReactNode;
}
