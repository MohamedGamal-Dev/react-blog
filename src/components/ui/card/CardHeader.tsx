import React from 'react';
import { Link } from 'react-router-dom';
import { CardHeaderProps } from './Card.types';

export const CardHeader: React.FunctionComponent<CardHeaderProps> = ({
  headerOptions = {
    optionsStatus: true,
    heading: { status: true, link: true, style: true },
    edit: { status: true, style: true },
    delete: { status: true, style: true },
  },
  id,
  children,
}) => {
  const { optionsStatus, heading, edit, deleteOption, addOption } =
    headerOptions;

  const renderHeaderOptions = () => {
    let editDefaultStyles = `transform cursor-pointer rounded bg-mgLight-accent px-3 py-1 text-sm font-bold text-white transition-colors duration-200 hover:bg-mgLight-success`;
    let deleteDefaultStyles = `transform cursor-pointer rounded bg-mgLight-error px-3 py-1 text-sm font-bold text-white transition-colors duration-200 hover:bg-mgLight-error/75`;

    return (
      <>
        {/* { *** OPTIONS *** } */}
        <div className="flex items-center space-x-1">
          {edit!.status && (
            <Link
              to={`/post/${id}/edit`}
              className={`${edit!.style && editDefaultStyles}  ${' '}  ${
                edit!.class
              }`}
            >
              Edit
            </Link>
          )}

          {/* { *** Button UI-Component place holder *** } */}
          {deleteOption!.status && (
            <button
              onClick={deleteOption!.handleClick}
              className={`${
                deleteOption!.style && deleteDefaultStyles
              }  ${' '}  ${deleteOption!.class}`}
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

  let headingOption = heading!.link ? (
    <Link
      to={`/post/${id}`}
      className={`${heading!.style && headingDefaultStyles}  ${' '}  ${
        heading!.class
      }`}
    >
      {heading!.text}
    </Link>
  ) : (
    <div
      className={`${heading!.style && headingDefaultStyles}  ${' '}  ${
        heading!.class
      }`}
    >
      {heading!.text}
    </div>
  );

  return (
    <>
      {/* { *** HEADING *** } */}
      <div className="flex items-center justify-between">
        {heading!.status && headingOption}
        {/* { *** OPTIONS *** } */}
        {optionsStatus && renderHeaderOptions()}
      </div>
    </>
  );
};
