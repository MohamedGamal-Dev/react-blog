import React from 'react';
import { CardFrameProps } from './Card.types';

export const CardFrame: React.FunctionComponent<CardFrameProps> = ({
  outerClass,
  innerClass,
  footerClass,
  outerStyle = true,
  innerStyle = true,
  footerStyle = true,
  frameFooter = true,
  frameFooterContent,
  children,
}) => {
  const outerDefaultStyles =
    'mx-auto rounded-lg  border border-mgLight-secondary/20 bg-mgLight-primary px-1 pt-1 shadow shadow-mgLight-secondary ';
  const innerDefaultStyles = 'rounded-lg bg-mgLight-base-100 py-4 px-6';
  const footerDefaultStyles =
    'flex items-center justify-between rounded-bl-lg rounded-br-lg bg-mgLight-primary py-3 px-6';

  const footerPlaceHolder = () => {
    return (
      <div
        className={`${
          footerStyle && footerDefaultStyles
        } ${' '} ${footerClass}`}
      >
        {frameFooterContent && frameFooterContent()}
      </div>
    );
  };

  return (
    <>
      <div
        className={` ${outerStyle && outerDefaultStyles} ${' '} ${outerClass} `}
      >
        <div
          className={` ${
            innerStyle && innerDefaultStyles
          } ${' '} ${innerClass} `}
        >
          {children}
        </div>
        {frameFooter ? footerPlaceHolder() : null}
      </div>
    </>
  );
};
