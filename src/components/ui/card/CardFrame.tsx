import React from 'react';
import { CardFrameProps } from './Card.types';

export const CardFrame: React.FunctionComponent<CardFrameProps> = ({
  frameOptions = {
    outer: { style: true },
    inner: { style: true },
    footer: { status: true, style: true },
  },
  children,
}) => {
  const { outer, inner, footer } = frameOptions;

  const outerDefaultStyles =
    'mx-auto rounded-lg  border border-mgLight-secondary/20 bg-mgLight-primary px-1 pt-1 shadow shadow-mgLight-secondary ';
  const innerDefaultStyles = 'rounded-lg bg-mgLight-base-100 py-4 px-6';
  const footerDefaultStyles =
    'flex items-center justify-between rounded-bl-lg rounded-br-lg bg-mgLight-primary py-3 px-6';

  const footerPlaceHolder = () => {
    return (
      <div
        className={`${footer!.style && footerDefaultStyles} ${' '} ${
          footer!.class
        }`}
      >
        {footer!.content && footer!.content!()}
      </div>
    );
  };

  return (
    <>
      <div
        className={` ${outer!.style && outerDefaultStyles} ${' '} ${
          outer!.class
        } `}
      >
        <div
          className={` ${inner!.style && innerDefaultStyles} ${' '} ${
            inner!.class
          } `}
        >
          {children}
        </div>
        {footer!.status ? footerPlaceHolder() : null}
      </div>
    </>
  );
};
