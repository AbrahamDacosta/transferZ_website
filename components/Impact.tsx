import { motion } from 'framer-motion';
import { MultilangCommon } from '../types';

type Props = {
  common: MultilangCommon;
  locale: string;
};

export default function Impact({ common, locale }: Props) {
  return (
    <motion.section
      id="impact"
      className="py-16 px-6 md:px-16 bg-gray-100 text-black"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-10">
        {common.impact_title?.[locale]}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="bg-white p-6 shadow-lg rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-xl font-semibold">
              {common[`impact_${i}`]?.[locale]}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}