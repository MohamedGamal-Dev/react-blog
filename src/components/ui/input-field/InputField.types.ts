export interface InputFieldUiProps {
  inputFieldType: string;
  inputFieldName: string;
  inputFieldValue: string;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputFieldClass?: string;
  inputFieldStyle?: string;
  inputFieldRequired?: boolean;
  inputFieldCssId?: string;
  inputFieldPlaceholder?: string;
}
