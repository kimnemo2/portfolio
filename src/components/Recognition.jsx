import { useState } from 'react';
import { motion } from 'framer-motion';
import { recognition } from '../data/recognition';

export default function Recognition() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  return (
    <section id="recognition" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2">Recognition</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">동료 평가</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{recognition.headline}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Quotes Slider */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/10 rounded-2xl p-6 min-h-[180px] relative border border-indigo-100 dark:border-indigo-800/30 mb-4">
              <span className="text-5xl text-indigo-200 dark:text-indigo-800 leading-none select-none">"</span>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed -mt-4 mb-4">
                {recognition.quotes[quoteIndex].text}
              </p>
              <div className="text-xs text-indigo-500 dark:text-indigo-400 font-medium">
                — {recognition.quotes[quoteIndex].from}
              </div>
            </div>
            {/* Pagination dots */}
            <div className="flex gap-2 justify-center">
              {recognition.quotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setQuoteIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === quoteIndex
                      ? 'bg-indigo-600 w-6'
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Scores + Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Scores */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">📊 평가 항목</h3>
              <div className="space-y-2">
                {recognition.scores.map((s, i) => (
                  <div key={i} className="flex items-start gap-3 py-2 border-b border-gray-50 dark:border-gray-800">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 w-24 flex-shrink-0">{s.category}</span>
                    <span className={`text-sm font-bold flex-shrink-0 ${
                      s.category === '종합'
                        ? 'text-indigo-600 dark:text-indigo-400'
                        : 'text-gray-900 dark:text-white'
                    }`}>{s.score}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">{s.note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">⭐ 강점</h3>
              <ul className="space-y-2">
                {recognition.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
