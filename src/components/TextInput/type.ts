import { FieldValues, UseControllerProps } from 'react-hook-form';
import { TextInputProps } from 'react-native';

export type ValidationInputProps<T extends FieldValues> = TextInputProps &
  UseControllerProps<T> & {
    error?: boolean;
    testID?: string;
    label?: string;
    isPassword?: boolean;
    defaultValue?: string;
    onChangeText?: (text: string) => void;
  };
