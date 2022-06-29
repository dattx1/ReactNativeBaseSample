import React from 'react';
import { TouchableOpacity } from 'react-native';

import { DEFAULT_ICON_SIZE } from '@src/constants';

import { IconProps } from './type';
export const Icon = ({
  src: IconComponent,
  color,
  size,
  id,
  containerStyle,
  onClick,
}: IconProps) => {
  const iconSize = size ?? DEFAULT_ICON_SIZE;
  return (
    <TouchableOpacity style={containerStyle} onPress={onClick}>
      <IconComponent
        fill={color ?? 'white'}
        height={iconSize}
        id={id}
        width={iconSize}
      />
    </TouchableOpacity>
  );
};
