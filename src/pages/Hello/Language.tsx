import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  GroupuiButton,
  GroupuiCard,
  GroupuiHeadline,
} from '@group-ui/group-ui-react';

const Language = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const lang = i18n.language === 'de' ? 'en' : 'de';
    i18n.changeLanguage(lang);
  };
  return (
    <GroupuiCard padding="30" elevation={1} style={{ marginTop: 20 }}>
      <GroupuiHeadline heading="h3">{t('hello.welcome')}</GroupuiHeadline>
      <p>{t('hello.message')}</p>
      <GroupuiButton onClick={changeLanguage}>
        {t('hello.button')}
      </GroupuiButton>
    </GroupuiCard>
  );
};

export default Language;
