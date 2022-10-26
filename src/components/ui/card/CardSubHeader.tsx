import React from 'react';
import { CardSubHeaderProps } from './Card.types';

export const CardSubHeader: React.FunctionComponent<CardSubHeaderProps> = ({
  subHeaderStatus = true,
  subHeaderStyle = true,
  subHeaderClass,

  authorStatus = true,
  authorStyle = true,
  authorClass,
  authorRender,

  dateStatus = true,
  dateStyle = true,
  dateClass,
  dateRender,
  subHeaderOptionAdd,
  children,
}) => {
  // -----------------------------
  // === SUB-HEADING - STYLES ===
  const subHeaderStyles = {
    default: `flex items-start space-x-2 border-b-2 border-mgLight-secondary pb-1`,
  };
  const authorStyles = {
    default: `font-serif text-sm font-medium text-mgLight-accent`,
  };
  const dateStyles = {
    default: `text-sm font-light text-mgLight-neutral`,
  };
  // -----------------------------

  // === SUB-HEADING - OPTIONS ===
  const options = () => {
    return (
      <>
        {/* { -> Author <- } */}
        {authorStatus && (
          <div
            className={` ${
              authorStyle && authorStyles.default
            } ${` `} ${authorClass} `}
          >
            {authorRender}
          </div>
        )}

        {/* { -> DATE <- } */}
        {dateStatus && (
          <div
            className={` ${
              dateStyle && dateStyles.default
            } ${` `} ${dateClass} `}
          >
            {dateRender}
          </div>
        )}

        {/* { -> ADD MORE OPTIONS <- } */}
        <>{subHeaderOptionAdd && subHeaderOptionAdd()}</>
      </>
    );
  };

  // === SUB-HEADING (v1.6) ===
  // --------------------------
  return (
    <>
      {subHeaderStatus && (
        <div
          className={` ${
            subHeaderStyle && subHeaderStyles.default
          } ${` `} ${subHeaderClass} `}
        >
          {options()}
          {children || null}
        </div>
      )}
    </>
  );
};
