import { useState } from 'react';
import { motion } from 'framer-motion';
import { recognition } from '../data/recognition';

export default function Recognition() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const handlePrev = () => {
    setQuoteIndex((prev) => (prev === 0 ? recognition.quotes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setQuoteIndex((prev) => (prev === recognition.quotes.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="recognition" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-2">Recognition</p>
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
            className="relative"
          >
            {/* 카드 본체: 내부 패딩을 정돈하여 화살표 컴포넌트 공간 확보 */}
            <div className="bg-gradient-to-br from-brand-50 to-brand-100/50 dark:from-brand-900/20 dark:to-brand-900/10 rounded-2xl p-6 min-h-[200px] relative border border-brand-100 dark:border-brand-800/30 mb-4 flex flex-col justify-between">
              
              {/* 따옴표 아이콘 세로선 정렬을 위해 동일한 안전 패딩 주입 */}
              <div className="text-brand-200 dark:text-brand-800/60 mb-2 flex-shrink-0 px-6 sm:px-10">
                <svg className="w-8 h-8 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* ⭐ 텍스트 가드 안전망: 좌우 px-6(모바일) / sm:px-10(PC) 범위를 강제하여 화살표와 여백 확보 */}
              <div className="px-6 sm:px-10 flex-grow flex flex-col justify-between z-10">
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-5">
                  {recognition.quotes[quoteIndex].text}
                </p>
                <div className="text-xs text-brand-500 dark:text-brand-400 font-medium mt-auto">
                  — {recognition.quotes[quoteIndex].from}
                </div>
              </div>

              {/* 좌측 화살표 버튼 */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-white dark:hover:bg-gray-700 text-gray-500 hover:text-brand-600 dark:hover:text-brand-400 transition-all z-20"
                aria-label="Previous quote"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              {/* 우측 화살표 버튼 */}
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-white dark:hover:bg-gray-700 text-gray-500 hover:text-brand-600 dark:hover:text-brand-400 transition-all z-20"
                aria-label="Next quote"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            {/* 인디케이터 점 도트 */}
            <div className="flex gap-2 justify-center">
              {recognition.quotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setQuoteIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === quoteIndex
                      ? 'bg-brand-600 w-6'
                      : 'bg-gray-200 dark:bg-gray-700 w-2'
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
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">📊 평가 항목</h3>
              <div className="space-y-2">
                {recognition.scores.map((s, i) => (
                  <div key={i} className="flex items-start gap-3 py-2 border-b border-gray-50 dark:border-gray-800">
                    <span className="text-sm font-semibold text-gray-700 dark:text-brand-300 w-24 flex-shrink-0">{s.category}</span>
                    <span className={`text-sm font-bold flex-shrink-0 ${
                      s.category === '종합'
                        ? 'text-brand-600 dark:text-brand-400'
                        : 'text-gray-900 dark:text-white'
                    }`}>{s.score}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">{s.note}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">⭐ 강점</h3>
              <ul className="space-y-2">
                {recognition.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
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