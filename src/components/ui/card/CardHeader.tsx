import React from 'react';
import { Link } from 'react-router-dom';
import { CardHeaderProps } from './Card.types';

export const CardHeader: React.FunctionComponent<CardHeaderProps> = ({
  headerOptions = true,
  headingStatus = true,
  headingText,
  headingLink = false,
  headingStyle = true,
  headingClass,

  targetId,
  editStatus = true,
  editStyle = true,
  editClass,

  deleteStatus = true,
  deleteStyle = true,
  deleteClass,
  onDeleteClick,

  headerOptionAdd,
}) => {
  // -----------------------------
  // === (TYPOGRAPHY) HEADING - STYLES ===
  const editStyles = {
    default: `transform cursor-pointer rounded bg-mgLight-accent px-3 py-1 text-sm font-bold text-white transition-colors duration-200 hover:bg-mgLight-success`,
  };
  const deleteStyles = {
    default: `transform cursor-pointer rounded bg-mgLight-error px-3 py-1 text-sm font-bold text-white transition-colors duration-200 hover:bg-mgLight-error/75`,
  };
  const headingStyles = {
    default: `text-2xl font-bold text-mgLight-neutral hover:text-mgLight-accent hover:underline`,
  };
  // -----------------------------

  const handleDeleteClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onDeleteClick!();
  };

  // === (TYPOGRAPHY) HEADING - OPTIONS ===
  const renderHeaderOptions = () => {
    return (
      <section className="flex items-center space-x-1">
        {editStatus && (
          <Link
            to={`/post/${targetId}/edit`}
            className={`${
              editStyle && editStyles.default
            }  ${' '}  ${editClass}`}
          >
            Edit
          </Link>
        )}

        {deleteStatus && (
          <button
            onClick={handleDeleteClick}
            className={`${
              deleteStyle && deleteStyles.default
            }  ${' '}  ${deleteClass}`}
          >
            Delete
          </button>
        )}
        <>{headerOptionAdd && headerOptionAdd()}</>
      </section>
    );
  };

  // === (TYPOGRAPHY) HEADING (v1.6) ===
  // ----------------------------
  return (
    <>
      {/* { ==> HEADING TEXT <== } */}
      <div className="flex items-center justify-between">
        {headingStatus &&
          // RENDER HEADING -AS- LINK
          (headingLink ? (
            <Link
              to={`/post/${targetId}`}
              className={`${
                headingStyle && headingStyles.default
              }  ${' '}  ${headingClass}`}
            >
              {headingText}
            </Link>
          ) : (
            // RENDER HEADING -AS- TEXT
            <div
              className={`${
                headingStyle && headingStyles.default
              }  ${' '}  ${headingClass}`}
            >
              {headingText}
            </div>
          ))}

        {/* { ==> OPTIONS <== } */}
        {headerOptions && renderHeaderOptions()}
      </div>
    </>
  );
};
