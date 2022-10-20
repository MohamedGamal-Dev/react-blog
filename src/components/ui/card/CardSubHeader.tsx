import React from 'react';
import { CardSubHeaderProps } from './Card.types';

export const CardSubHeader: React.FunctionComponent<CardSubHeaderProps> = ({
  author,
  date,
  children,
}) => {
  const appDefault = () => {
    return (
      <>
        <div className="font-serif text-sm font-medium text-mgLight-accent">
          {/* { *** Author *** } */}
          {author}
        </div>
        <div className="text-sm font-light text-mgLight-neutral ">
          {/* { *** DATE *** } */}
          {date}
        </div>
      </>
    );
  };

  return (
    <>
      {/* { *** Author && DATE *** } */}
      <div className="flex items-start space-x-2 border-b-2 border-mgLight-secondary pb-1">
        {author || date ? appDefault() : null}
        {children ? children : null}
      </div>
    </>
  );
};
