import React from 'react';
import { CardSubHeaderProps } from './Card.types';

export const CardSubHeader: React.FunctionComponent<CardSubHeaderProps> = ({
  CardSubHeaderOptions = {
    optionsStatus: true,
    author: { status: true, styles: true },
    date: { status: true, styles: true },
  },
  children,
}) => {
  const { optionsStatus, addOption, author, date } = CardSubHeaderOptions;

  const options = () => {
    let authorDefaultClass = `font-serif text-sm font-medium text-mgLight-accent`;
    let dateDefaultClass = `text-sm font-light text-mgLight-neutral`;
    return (
      <>
        {/* { *** Author *** } */}
        {author.status && (
          <div className={` ${authorDefaultClass} ${` `} ${author.class} `}>
            {author.render}
          </div>
        )}

        {/* { *** DATE *** } */}
        {date.status && (
          <div className={` ${dateDefaultClass} ${` `} ${date.class} `}>
            {date.render}
          </div>
        )}

        {addOption && <>{addOption()}</>}
      </>
    );
  };

  return (
    <>
      {/* { *** Author && DATE *** } */}
      <div className="flex items-start space-x-2 border-b-2 border-mgLight-secondary pb-1">
        {optionsStatus && options()}
        {children ? children : null}
      </div>
    </>
  );
};
