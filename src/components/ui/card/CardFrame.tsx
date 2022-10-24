import React from 'react';
import { CardFrameProps } from './Card.types';

export const CardFrame: React.FunctionComponent<CardFrameProps> = ({
  frameOuterStyle = true,
  frameOuterClass,

  frameInnerStyle = true,
  frameInnerClass,

  frameFooterStatus = true,
  frameFooterStyle = true,
  frameFooterClass,
  frameFooterRender,
  children,
}) => {
  // -----------------------------
  // === (BOX) FRAME - STYLES ===
  const outerStyles = {
    default:
      'mx-auto rounded-lg  border border-mgLight-secondary/20 bg-mgLight-primary px-1 pt-1 shadow shadow-mgLight-secondary ',
  };
  const innerStyles = {
    default: 'rounded-lg bg-mgLight-base-100 py-4 px-6',
  };
  const footerStyles = {
    default:
      'flex items-center justify-between rounded-bl-lg rounded-br-lg bg-mgLight-primary py-3 px-6',
  };
  // -----------------------------

  // === (BOX) FRAME - FOOTER ===
  const renderFooter = () => {
    return (
      <div
        className={`${
          frameFooterStyle && footerStyles.default
        } ${' '} ${frameFooterClass}`}
      >
        <>{frameFooterRender && frameFooterRender()}</>
      </div>
    );
  };

  // === * (BOX) FRAME (v1.6)* ===
  // -----------------------------
  return (
    <>
      <div
        className={`${
          frameOuterStyle && outerStyles.default
        } ${' '} ${frameOuterClass} `}
      >
        <div
          className={`${
            frameInnerStyle && innerStyles.default
          } ${' '} ${frameInnerClass} `}
        >
          {children}
        </div>

        {/* { => FOOTER OPTION <= } */}
        {frameFooterStatus && renderFooter()}
      </div>
    </>
  );
};
