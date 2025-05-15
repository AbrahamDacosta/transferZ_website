import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

export default function Problem({ common, locale }) {
  const t = (key) => common[key]?.[locale] || '';

  const problems = ['problem_1', 'problem_2', 'problem_3', 'problem_4'];

  return (
    <motion.section
      className="bg-white py-20 px-6 md:px-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          {t('problem_title')}
        </h2>
        <p className="text-lg mb-8">{t('problem_desc')}</p>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((key, i) => (
            <motion.div
              key={key}
              className="bg-gray-100 rounded-lg p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-base text-gray-800">{t(key)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
