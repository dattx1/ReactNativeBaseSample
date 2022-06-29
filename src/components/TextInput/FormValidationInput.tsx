import React, { useState } from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { Spacer } from '../Spacer';
import { ValidationInputProps } from './type';

export const ValidationInput = <T extends FieldValues>({
  control,
  name,
  rules,
  label,
  defaultValue,
  placeholder,
  isPassword,
  onFocus,
  onChangeText,
  style
}: ValidationInputProps<T>) => {
  const [inputValue, setInputValue] = useState('');
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(isPassword);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, onBlur }, formState: { errors } }) => {
        const isValid = !errors[name]?.message;
        return (
          <View style={inputStyles.inputWrapper}>
            {label && (
              <>
                <Text>{label.trim()}</Text>
                <Spacer size={8} />
              </>
            )}
            <TextInput
              style={[style, inputStyles.input]}
              {...control?.register(name)}
              placeholder={placeholder}
              value={inputValue}
              onBlur={onBlur}
              onChangeText={values => {
                onChange(values);
                onChangeText && onChangeText(values);
                setInputValue(values);
              }}
              secureTextEntry={isSecureTextEntry}
              onFocus={onFocus}
            />
            {!isValid && (
              <>
                <Spacer size={8} />
                <Text>{errors[name]?.message}</Text>
              </>
            )}
          </View>
        );
      }}
    />
  );
};

const inputStyles = StyleSheet.create({
  inputWrapper: {
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
  },
});
