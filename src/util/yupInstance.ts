import * as yup from 'yup';

import i18next from '@src/localization/i18n';
import { REGEX_PASSWORD } from '@src/constants';

function testPassword(this: any, pattern?: String, message?: string) {
  return this.trim().matches(
    pattern ?? REGEX_PASSWORD,
    message ?? i18next.t('validation:password_format_invalid'),
  );
}

yup.addMethod(yup.string, 'password', testPassword);

export default yup;
