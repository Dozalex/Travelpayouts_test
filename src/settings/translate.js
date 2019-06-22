import i18n from 'i18next';

const language = localStorage.i18nextLng || 'en-US';
localStorage.i18nextLng = language;

i18n.init({
  lng          : language,
  resources    : {},
  interpolation: {
    escapeValue: false,
  },
});

/** Add new translation files */
i18n.addNewResources = lng => {
  const components = ['common'];

  components.forEach(component => {
    i18n.addResourceBundle(lng, component,
      require(`../translations/${lng}.json`));
  });
};

/** change language */
i18n.setLanguage = lng => {
  localStorage.setItem('i18nextLng', lng);
  i18n.addNewResources(lng);
  i18n.changeLanguage(lng);
};

/** function for translate strings with line wrapping
 * @param {string} tKey - translate key
 * @param {object} options translate option (for example - {count: 0})
 * */
i18n.splitTranslate = (tKey, options = {}) => i18n.t(tKey, options)
  .split('\n')
  .map((line, index) => <p key={tKey + index}>{line}</p>); // eslint-disable-line react/no-array-index-key

i18n.addNewResources(language);
i18n.setDefaultNamespace('common');

export default i18n;
