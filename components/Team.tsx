import { motion } from 'framer-motion';

type TeamProps = {
  common: { [key: string]: { [lang: string]: string } };
  locale: string;
};

export default function Team({ common, locale }: TeamProps) {
  const t = (key: string) => common[key]?.[locale] || '';

  const members = [
    {
      name: 'Abraham Da Costa',
      roleKey: 'team_1_role',
      image: '/images/me.png',
    },
    {
      name: 'Jean Kouadio',
      roleKey: 'team_2_role',
      image: '/images/dev.png',
    },
    {
      name: 'Amara Diop',
      roleKey: 'team_3_role',
      image: '/images/agent.png',
    },
  ];

  return (
    <motion.section
      id="team"
      className="py-16 px-6 md:px-16 bg-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-10 text-center">{t('team_title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <motion.div
            key={index}
            className="text-center p-4 shadow-lg rounded-lg bg-white"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-600">{t(member.roleKey)}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
