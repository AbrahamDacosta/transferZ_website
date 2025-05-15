import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

type FooterProps = {
  common: { [key: string]: { [locale: string]: string } };
  locale: string;
};

export default function Footer({ common, locale }: FooterProps) {
  const t = (key: string) => common[key]?.[locale] || '';

  return (
    <motion.footer
      className="bg-primary text-white py-12 px-6 md:px-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <Image src="/images/TransferZ_logo.png" alt="Transfer Z Logo" width={130} height={40} />
          <p className="text-sm mt-4 max-w-xs">
            Transfer Z – {locale === 'fr' ? "L'inclusion financière par la technologie" : 'Financial inclusion powered by technology'}.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-bold text-lg">{locale === 'fr' ? 'Navigation' : 'Navigation'}</h4>
          <Link href="#problem" className="hover:underline">{t('problem_title')}</Link>
          <Link href="#solution" className="hover:underline">{t('solution_title')}</Link>
          <Link href="#impact" className="hover:underline">{t('impact_title')}</Link>
          <Link href="#team" className="hover:underline">{t('team_title')}</Link>
          <Link href="#contact" className="hover:underline">{t('contact_title')}</Link>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col">
          <h4 className="font-bold text-lg">{locale === 'fr' ? 'Newsletter' : 'Newsletter'}</h4>
          <p className="text-sm mb-2">
            {locale === 'fr'
              ? "Recevez nos actualités et les opportunités du projet."
              : 'Get updates and pilot opportunities.'}
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder={locale === 'fr' ? 'Votre email' : 'Your email'}
              className="px-3 py-2 rounded-l-md text-black w-full"
            />
            <button
              type="submit"
              className="bg-accent text-white px-4 py-2 rounded-r-md hover:bg-orange-700 transition"
            >
              {locale === 'fr' ? "S'abonner" : 'Subscribe'}

            </button>
          </form>
        </div>
      </div>

      {/* Footer note */}
      <div className="text-center mt-10 text-xs text-white/70">
        &copy; {new Date().getFullYear()} Transfer Z. All rights reserved.
      </div>
    </motion.footer>
  );
}
