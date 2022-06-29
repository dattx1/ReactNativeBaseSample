/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import React, { FC, useMemo } from 'react';

export const Spacer: FC<{ size: number; horizontal?: boolean }> = ({
  size,
  horizontal,
}) => {
  const px = size;

  const SpacerMemo = useMemo(
    () => (
      <View
        style={
          horizontal
            ? { width: px, height: 'auto', flexShrink: 0 }
            : { width: 'auto', height: px, flexShrink: 0 }
        }
      />
    ),
    [horizontal, px],
  );

  return SpacerMemo;
};
