export interface UiInputProps {
  inputTextOptions: InputTextOptionsType;
}

export type InputTextOptionsType = {
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
