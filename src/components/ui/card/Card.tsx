import React from 'react';
import { CardProps, CardFrame, CardHeader, CardSubHeader } from '../card';

// === * === COMBINED CARD (v0.8)  === * ===
export const Card: React.FunctionComponent<CardProps> = ({
  frameOuterStyle,
  frameOuterClass,
  frameInnerStyle,
  frameInnerClass,
  frameFooterStatus,
  frameFooterStyle,
  frameFooterClass,
  frameFooterRender,
  frameFooterRenderComponent,

  headerOptions,
  headingStatus,
  headingText,
  headingLink,
  headingStyle,
  headingClass,
  targetId,
  editStatus,
  editStyle,
  editClass,
  deleteStatus,
  deleteStyle,
  deleteClass,
  onDeleteClick,

  subHeaderStatus,
  subHeaderStyle,
  subHeaderClass,
  authorStatus,
  authorStyle,
  authorClass,
  authorRender,
  dateStatus,
  dateStyle,
  dateClass,
  dateRender,
  subHeaderOptionAdd,

  bodyStyle = true,
  bodyClass,
  children,
}) => {
  // -----------------------------
  // === MAIN BODY - STYLES ===
  const bodyStyles = {
    default: `mt-2 text-mgLight-neutral/90`,
  };

  return (
    <>
      <CardFrame
        frameOuterStyle={frameOuterStyle}
        frameOuterClass={frameOuterClass}
        frameInnerStyle={frameInnerStyle}
        frameInnerClass={frameInnerClass}
        frameFooterStatus={frameFooterStatus}
        frameFooterStyle={frameFooterStyle}
        frameFooterClass={frameFooterClass}
        frameFooterRender={frameFooterRender}
        frameFooterRenderComponent={frameFooterRenderComponent}
      >
        <CardHeader
          headerOptions={headerOptions}
          headingStatus={headingStatus}
          headingText={headingText}
          headingLink={headingLink}
          headingStyle={headingStyle}
          headingClass={headingClass}
          targetId={targetId}
          editStatus={editStatus}
          editStyle={editStyle}
          editClass={editClass}
          deleteStatus={deleteStatus}
          deleteStyle={deleteStyle}
          deleteClass={deleteClass}
          onDeleteClick={onDeleteClick}
        />
        <CardSubHeader
          subHeaderStatus={subHeaderStatus}
          subHeaderStyle={subHeaderStyle}
          subHeaderClass={subHeaderClass}
          authorStatus={authorStatus}
          authorStyle={authorStyle}
          authorClass={authorClass}
          authorRender={authorRender}
          dateStatus={dateStatus}
          dateStyle={dateStyle}
          dateClass={dateClass}
          dateRender={dateRender}
          subHeaderOptionAdd={subHeaderOptionAdd}
        />
        <div
          className={`${bodyStyle && bodyStyles.default}  ${' '}  ${bodyClass}`}
        >
          {children}
        </div>
      </CardFrame>
    </>
  );
};
