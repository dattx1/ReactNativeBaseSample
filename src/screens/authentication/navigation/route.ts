import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SCREEN_PATH } from '@src/constant';

export const AUTHENTICATION_NAVIGATION_KEYS = {
  LOGIN: `${SCREEN_PATH}/Login/components/LoginScreen`,
} as const;

export type AuthenticationNavigationParamList = {
  [AUTHENTICATION_NAVIGATION_KEYS.LOGIN]: undefined;
};

export const useAuthenticationNavigation = () =>
  useNavigation<NativeStackNavigationProp<AuthenticationNavigationParamList>>();
