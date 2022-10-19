import React from 'react';
import { CardFrameProps } from './Card.types';

export const CardFrame: React.FunctionComponent<CardFrameProps> = ({
  classNameOuter,
  classNameInner,
  defaultStyleOuter = true,
  defaultStyleInner = true,
  frameFooter = true,
  children,
}) => {
  const OuterDefaultStyles =
    'mx-auto rounded-lg  border border-mgLight-secondary/20 bg-mgLight-primary px-1 pt-1 shadow shadow-mgLight-secondary ';
  const InnerDefaultStyles = 'rounded-lg bg-mgLight-base-100 py-4 px-6';

  const defaultStylesOuter = defaultStyleOuter ? OuterDefaultStyles : null;
  const defaultStylesInner = defaultStyleInner ? InnerDefaultStyles : null;

  const footerPlaceHolder = () => {
    return <div className="py-4"></div>;
  };

  return (
    <>
      <div className={` ${defaultStylesOuter} ${' '} ${classNameOuter} `}>
        <div className={` ${defaultStylesInner} ${' '} ${classNameInner} `}>
          {children}
        </div>
        {frameFooter && footerPlaceHolder()}
      </div>
    </>
  );
};
