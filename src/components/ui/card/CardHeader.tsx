import React from 'react';
import { Link } from 'react-router-dom';
import { CardHeaderProps } from './Card.types';

export const CardHeader: React.FunctionComponent<CardHeaderProps> = ({
  headerOptions = { optionsStatus: true },
  heading,
  headingLink = true,
  headingStyles,
  headingClass,
  id,
  children,
}) => {
  const {
    optionsStatus,
    editStatus,
    editStyles = true,
    editClass,
    deleteStatus,
    deleteStyles,
    deleteClass,
    handleDelete,
    addOption,
  } = headerOptions;

  const renderHeaderOptions = () => {
    let editDefaultStyles = `transform cursor-pointer rounded bg-mgLight-accent px-3 py-1 text-sm font-bold text-white transition-colors duration-200 hover:bg-mgLight-success`;
    let deleteDefaultStyles = `transform cursor-pointer rounded bg-mgLight-error px-3 py-1 text-sm font-bold text-white transition-colors duration-200 hover:bg-mgLight-error/75`;

    return (
      <>
        {/* { *** OPTIONS *** } */}
        <div className="flex items-center space-x-1">
          {editStatus && (
            <Link
              to={`/post/${id}/edit`}
              className={`${
                editStyles && editDefaultStyles
              }  ${' '}  ${editClass}`}
            >
              Edit
            </Link>
          )}

          {/* { *** Button UI-Component place holder *** } */}
          {deleteStatus && (
            <button
              onClick={handleDelete}
              className={`${
                deleteStyles && deleteDefaultStyles
              }  ${' '}  ${deleteClass}`}
            >
              Delete
            </button>
          )}
          <>{addOption && addOption()}</>
        </div>
      </>
    );
  };

  let headingDefaultStyles = `text-2xl font-bold text-mgLight-neutral hover:text-mgLight-accent hover:underline`;

  let headingOption = headingLink ? (
    <Link
      to={`/post/${id}`}
      className={`${
        headingStyles && headingDefaultStyles
      }  ${' '}  ${headingClass}`}
    >
      {heading}
    </Link>
  ) : (
    <div
      className={`${
        headingStyles && headingDefaultStyles
      }  ${' '}  ${headingClass}`}
    >
      {heading}
    </div>
  );

  return (
    <>
      {/* { *** HEADING *** } */}
      <div className="flex items-center justify-between">
        {headingLink && headingOption}
        {/* { *** OPTIONS *** } */}
        {optionsStatus && renderHeaderOptions()}
      </div>
    </>
  );
};
