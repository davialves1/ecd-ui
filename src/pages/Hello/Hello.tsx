import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Hello = () => {
  useEffect(() => {
    document.title = 'ECD: Emission Compliance Database';
  }, []);

  const { t, i18n } = useTranslation();

  function changeLanguage(): void {
    const lang = i18n.language === 'de' ? 'en' : 'de';
    i18n.changeLanguage(lang);
  }

  return (
    <div
      style={{
        width: '100%',
        height: '50vh',
        display: 'flex',
        marginTop: 50,
        justifyContent: 'center',
      }}
    >
      <main>
        <h1>{t('hello.title')}</h1>
        <h3>{t('hello.welcome')}</h3>
        <ul style={{ listStyle: 'none', paddingTop: 20 }}>
          <li>✅ React 18</li>
          <li>✅ Typescript</li>
          <li>✅ Prettier</li>
          <li>✅ Eslint</li>
          <li>✅ Playwright</li>
          <li>✅ i18n (Internationalization)</li>
        </ul>
        <p style={{ paddingTop: 40 }}>{t('hello.message')}</p>
        <button
          style={{ padding: '5px 30px', cursor: 'pointer' }}
          onClick={changeLanguage}
        >
          {t('hello.button')}
        </button>
      </main>
    </div>
  );
};

export default Hello;
