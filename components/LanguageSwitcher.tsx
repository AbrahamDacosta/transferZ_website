
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = async (lang: string) => {
    if (i18n.language !== lang) {
      await i18n.changeLanguage(lang);
      router.push(router.pathname, router.asPath, { locale: lang });
    }
  };

  return (
    <div className="space-x-4 mb-6">
      <button onClick={() => changeLanguage('fr')} className={i18n.language === 'fr' ? 'font-bold underline' : 'underline'}>FR</button>
      <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'font-bold underline' : 'underline'}>EN</button>
    </div>
  );
}
