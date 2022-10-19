export interface InputFieldUiProps {
  inputFieldOptions: InputFieldOptionsType;
}

export type InputFieldOptionsType = {
  type: string;
  InputValue: string;
  InputName: string;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  classNames?: string;
  defaultStyle?: boolean;
  required?: boolean;
  id?: string;
  placeholder?: string;
};
