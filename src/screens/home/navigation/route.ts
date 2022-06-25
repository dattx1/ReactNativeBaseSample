import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SCREEN_PATH } from '@src/constant';

export const HOME_NAVIGATION_KEYS = {
  HOME: `${SCREEN_PATH}/Home/components/HomeScreen`,
} as const;

export type HomeNavigationParamList = {
  [HOME_NAVIGATION_KEYS.HOME]: undefined;
};

export const useHomeNavigation = () =>
  useNavigation<NativeStackNavigationProp<HomeNavigationParamList>>();
