import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Impact from '../components/Impact';
import Team from '../components/Team';
import Contact from '../components/Contact';

import rawCommonFR from '../public/locales/fr/common.json';
import rawCommonEN from '../public/locales/en/common.json'
import { MultilangCommon } from '../types';
import Footer from '../components/Footer';


const commonFR = rawCommonFR as MultilangCommon;
//const commonEN = rawCommonEN as MultilangCommon;

type HomeProps = {
  locale: string;
  common: MultilangCommon;
};

export default function HomePage({ locale, common }: HomeProps) {
  return (
    <div className="font-sans">
      <Header />
      <Hero common={common} locale={locale} />
      <Problem common={common} locale={locale} />
      <Solution common={common} locale={locale} />
      <Impact common={common} locale={locale} />
      <Team common={common} locale={locale} />
      <Contact common={common} locale={locale} />
      <Footer common={common} locale={locale} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const common: MultilangCommon = locale === 'en' ? commonFR:commonFR

  return {
    props: {
      locale,
      common,
      ...(await serverSideTranslations(locale ?? 'fr', ['common'])),
    },
  };
};
