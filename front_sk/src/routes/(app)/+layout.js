import { loadTranslations } from '$lib/translations/translations';

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url }) => {
  const { pathname } = url;

  const initLocale = 'ca';

  await loadTranslations(initLocale, pathname); // keep this just before the `return`

  return {};
}