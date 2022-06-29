import * as yup from 'yup';

import { REGEX_PASSWORD } from '@src/constants';
import i18next from '@src/localization/i18n';

export const loginFormSchema = yup.object().shape({
  username: yup.string().required('Required').email('Email invalid'),
  password: yup
    .string()
    .required()
    .matches(REGEX_PASSWORD, i18next.t('validation:password_format_invalid')),
});
