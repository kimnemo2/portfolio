import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const levelColor = {
  Expert:       "bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300",
  Advanced:     "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
  Intermediate: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-brand-50 dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-2">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">기술 스택</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {skills.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-brand-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm">{group.category}</h3>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-700/50">
                {group.items.map((item, ii) => (
                  <div key={ii} className="flex flex-col gap-1 py-2.5 first:pt-0 last:pb-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-800 dark:text-gray-200 font-medium">{item.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${levelColor[item.level]}`}>
                        {item.level}
                      </span>
                    </div>
                    {item.note && (
                      <span className="text-xs text-gray-400 dark:text-gray-500 leading-snug">{item.note}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
