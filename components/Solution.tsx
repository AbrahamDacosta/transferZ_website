import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Solution({ common, locale }) {
  const t = (key) => common[key]?.[locale] || '';

  const points = [
    'solution_point_1',
    'solution_point_2',
    'solution_point_3',
    'solution_point_4',
    'solution_point_5',
  ];

  return (
    <motion.section
      className="bg-gray-50 py-20 px-6 md:px-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          {t('solution_title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {points.map((key, i) => (
            <motion.div
              key={key}
              className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
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
