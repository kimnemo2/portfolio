import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  const { card, details } = project;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white dark:bg-gray-900 z-10 px-6 pt-6 pb-4 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300 font-medium">
                    {project.company}
                  </span>
                  <span className="text-xs text-gray-400">{card.period}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white leading-snug">{card.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{card.headline}</p>
              </div>
              <button
                onClick={onClose}
                className="flex-shrink-0 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {card.tags.map((tag, i) => (
                <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="px-6 py-6 space-y-6">
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">📌 배경</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{details.background}</p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">🎯 역할</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{details.role}</p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">🔨 주요 업무</h3>
              <ul className="space-y-2.5">
                {details.work.map((w, i) => (
                  /* li 태그 내부에 leading-relaxed 주입으로 긴 문장 가독성 최적화 */
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-400 fill-brand-400 flex-shrink-0" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>

            {details.keyIssues && details.keyIssues.length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">⚠️ 주요 의사결정</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <th className="text-left py-2 pr-4 font-semibold text-gray-700 dark:text-gray-300 w-2/5">이슈</th>
                        <th className="text-left py-2 font-semibold text-gray-700 dark:text-gray-300">결정</th>
                      </tr>
                    </thead>
                    <tbody>
                      {details.keyIssues.map((ki, i) => (
                        <tr key={i} className="border-b border-gray-50 dark:border-gray-800/50">
                          {/* 표 내부 줄간격 고도화 및 패딩 조절(py-3) */}
                          <td className="py-3 pr-4 text-gray-600 dark:text-gray-400 align-top leading-relaxed">{ki.issue}</td>
                          <td className="py-3 text-gray-600 dark:text-gray-400 align-top leading-relaxed">{ki.decision}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">📈 성과</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {details.results.map((r, i) => (
                  <div key={i} className="bg-brand-50 dark:bg-brand-900/20 rounded-xl p-3 text-center">
                    <div className="text-base font-bold text-brand-700 dark:text-brand-300 leading-tight mb-1">{r.metric}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 leading-tight">{r.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {details.note && (
              <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/30 rounded-xl p-4">
                <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">💡 {details.note}</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}