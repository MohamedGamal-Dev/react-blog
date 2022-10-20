import React from 'react';
import { Link } from 'react-router-dom';
import { CardHeaderProps } from './Card.types';

export const CardHeader: React.FunctionComponent<CardHeaderProps> = ({
  id,
  title,
  handleDeleteClick,
  children,
}) => {
  // const headerDefault = () => {
  //   return (
  //     <>
  //       {/* {a || b ? headerDefault() : null} */}
  //       {/* {children ? children : null} */}
  //     </>
  //   );
  // };

  return (
    <>
      {/* { *** HEADING *** } */}
      <div className="flex items-center justify-between">
        <Link
          to={`/post/${id}`}
          className="text-2xl font-bold text-mgLight-neutral hover:text-mgLight-accent hover:underline"
        >
          {title}
        </Link>

        {/* { *** POST OPTIONS *** } */}
        <div className="flex items-center space-x-1">
          <Link
            to={`/post/${id}/edit`}
            className="transform cursor-pointer rounded bg-mgLight-accent px-3 py-1 text-sm font-bold text-white transition-colors duration-200 hover:bg-mgLight-success"
          >
            Edit
          </Link>

          {/* { *** Button UI-Component place holder *** } */}
          <button
            onClick={handleDeleteClick}
            className="transform cursor-pointer rounded bg-mgLight-error px-3 py-1 text-sm font-bold text-white transition-colors duration-200 hover:bg-mgLight-error/75"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
