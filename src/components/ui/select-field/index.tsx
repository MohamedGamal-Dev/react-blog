import React from 'react';
import { inputStyles } from '../../ui';

export interface SelectFieldUiProps {
  selectFieldName: string;
  selectFieldValue: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectFieldClass?: string;
  selectFieldStyle?: string;
  selectFieldRequired?: boolean;
  selectFieldCssId?: string;
  selectFieldPlaceholder?: string;
  selectOptionsList?: { [key: string]: string }[];
  children?: React.ReactNode;
}

export const SelectField: React.FunctionComponent<SelectFieldUiProps> = ({
  selectFieldName,
  selectFieldValue,
  onChange,
  selectFieldClass,
  selectFieldStyle = 'minimal',
  selectFieldRequired = false,
  selectFieldCssId,
  selectFieldPlaceholder,
  selectOptionsList,
  // renderOptionsList,
  // selectOptionStyle = 'minimal',
  children,
}) => {
  const selectFieldStyles = inputStyles(selectFieldStyle);

  const renderMappedOptionsList = () => {
    return selectOptionsList!.map((selectOption: { [key: string]: string }) => {
      return (
        <React.Fragment key={selectOption.id}>
          <option
            value={selectOption.id}
            // className={` ${selectOptionStyles} ${' '} ${selectFieldClass} `}
          >
            {selectOption.name}
          </option>
        </React.Fragment>
      );
    });
  };

  return (
    <>
      <select
        name={selectFieldName}
        value={selectFieldValue}
        onChange={onChange}
        id={selectFieldCssId}
        className={` ${selectFieldStyles} ${' '} ${selectFieldClass} `}
        required={selectFieldRequired}
      >
        <option
          value=""
          // className={` ${selectOptionStyles} ${' '} ${selectFieldClass} `}
        >
          {`${selectFieldPlaceholder}`}
        </option>
        {children || renderMappedOptionsList()}
      </select>
    </>
  );
};
