import { resources } from '@src/localization/i18n';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: typeof resources['en'];
  }
}
