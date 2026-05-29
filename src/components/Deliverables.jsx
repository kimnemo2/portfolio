import { motion } from 'framer-motion';
import { deliverables, subProjects } from '../data/deliverables';

export default function Deliverables() {
  return (
    <section id="deliverables" className="section-padding bg-brand-50 dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-2">Deliverables</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">조직에 남긴 자산</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">직접 기획·제작하여 팀에 정착시킨 SOPs & 워크북</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {deliverables.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-brand-100 dark:border-gray-700 shadow-sm"
            >
              <div className="text-2xl mb-3">{d.icon}</div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug mb-1">{d.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{d.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Sub Projects */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Additional Work</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">그 외 업무 기여</p>
        </motion.div>

        <div className="space-y-3">
          {subProjects.map((sp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex flex-col sm:flex-row sm:items-start gap-3 bg-white dark:bg-gray-800/60 rounded-xl px-4 py-3 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 font-medium">
                    {sp.company}
                  </span>
                  <span className="text-xs text-gray-400">{sp.period}</span>
                  {sp.tags.map((t, ti) => (
                    <span key={ti} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">{sp.title}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{sp.impact}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
