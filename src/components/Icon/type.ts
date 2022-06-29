import { ViewStyle } from 'react-native';

export type IconProps = {
  /**
   * Id prop (mainly for autotests).
   */
  id?: string;

  /**
   * Function to invoke on click.
   */
  onClick?: () => void;

  /**
   * The size of the icon (if not provided by the style object).
   */
  size?: number | string;

  /**
   * The preloaded icon component to render.
   */
  src: Function;

  /**
   * The container style.
   */
  containerStyle?: ViewStyle;

  /**
   * The icon color.
   */
  color?: string;
};
