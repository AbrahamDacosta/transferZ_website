import { motion } from 'framer-motion';
import { MultilangCommon } from '../types';

type ContactProps = {
  common: MultilangCommon;
  locale: string;
};

export default function Contact({ common, locale }: ContactProps) {
  const title = common.contact_title?.[locale] || '';
  const desc = common.contact_desc?.[locale] || '';
  const whatsapp = common.contact_whatsapp?.[locale] || '';
  const email = common.contact_email?.[locale] || '';
  const phone = common.contact_phone?.[locale] || '';

  return (
    <motion.section
    className="bg-accent text-white py-20 px-6 text-center"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="mb-4">{desc}</p>
      <ul className="space-y-2">
        <li>{email}</li>
        <li>{phone}</li>
        <li>{whatsapp}</li>
      </ul>
    </motion.section>
  );
}
