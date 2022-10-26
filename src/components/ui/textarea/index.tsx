import React from 'react';
import { inputStyles } from '../../ui';

export interface TextareaUiProps {
  textareaName: string;
  textareaValue: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  textareaClass?: string;
  textareaStyle?: string;
  textareaRequired?: boolean;
  textareaCssId?: string;
  textareaPlaceholder?: string;
  textareaRows?: number;
  textareaCols?: number;
}

export const Textarea: React.FunctionComponent<TextareaUiProps> = ({
  textareaName,
  textareaValue,
  onChange,
  textareaClass,
  textareaStyle = 'minimal',
  textareaRequired = false,
  textareaCssId,
  textareaPlaceholder,
  textareaRows,
  textareaCols,
}) => {
  let textareaStyles = inputStyles(textareaStyle);

  return (
    <>
      <textarea
        name={textareaName}
        value={textareaValue}
        onChange={onChange}
        id={textareaCssId}
        className={` ${textareaStyles} ${' '} ${textareaClass} `}
        placeholder={textareaPlaceholder}
        rows={textareaRows}
        cols={textareaCols}
        required={textareaRequired}
      ></textarea>
    </>
  );
};
