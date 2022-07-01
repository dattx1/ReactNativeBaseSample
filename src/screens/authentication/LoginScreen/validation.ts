import yup from '@src/util/yupInstance';
import i18next from '@src/localization/i18n';

export const loginFormSchema = yup.object().shape({
  username: yup.string().required('Required').email('Email invalid'),
  password: yup.string().password().required(),
});
