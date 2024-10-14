import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = ({
  loaders: [
    {
      locale: 'en',
      key: 'main', 
      loader: async () => (
        await import('./en.json')
      ).default,
    },
    {
      locale: 'ca',
      key: 'main',
      loader: async () => (
        await import('./ca.json') 
      ).default,
    },
  ],
  fallbackLocale: 'en',
  initLocale: 'ca'
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
