import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ValidationInput } from '@src/components';

import { LoginFormParameter } from '../type';
import { loginFormSchema } from '../validation';

export default function LoginScreen() {
  const { control, handleSubmit } = useForm<LoginFormParameter>({
    mode: 'onChange',
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      userName: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginFormParameter) => console.log(data);

  return (
    <View>
      <ValidationInput control={control} style={styles.input} name="userName" />
      <ValidationInput control={control} style={styles.input} name="password" />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
  },
});
