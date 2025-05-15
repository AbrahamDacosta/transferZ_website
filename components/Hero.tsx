import { motion } from 'framer-motion';
import Image from 'next/image';

import { MultilangCommon } from '../types'; // ou adapte selon ton chemin

type HeroProps = {
  common: MultilangCommon;
  locale: string;
};


export default function Hero({ common, locale }: HeroProps) {
  const title = common?.hero_title?.[locale] || '';
  const subtitle = common?.hero_subtitle?.[locale] || '';
  const cta = common?.cta?.[locale] || '';

  return (
    <motion.section className="bg-primary text-white py-20 px-6 md:px-16" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <motion.div className="md:w-1/2 space-y-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h1>
          <p className="text-lg max-w-md">{subtitle}</p>
          <a href="#contact" className="inline-block bg-accent text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition">
            {cta}
          </a>
        </motion.div>
        <motion.div className="md:w-1/2 mt-8 md:mt-0" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }}>
          <Image src="/images/cover.png" alt="Illustration" width={500} height={500} className="rounded-lg shadow-xl" />
        </motion.div>
      </div>
    </motion.section>
  );
}