import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';

const companies = ['전체', '구름', '프리윌린'];
const categories = ['전체', 'AI·자동화', '데이터·분석', '정책·거버넌스', 'CX 운영'];

export default function Projects() {
  const [activeCompany, setActiveCompany] = useState('전체');
  const [activeCategory, setActiveCategory] = useState('전체');
  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = projects.filter((p) => {
    const matchCompany = activeCompany === '전체' || p.company === activeCompany;
    const matchCategory = activeCategory === '전체' || p.categories?.includes(activeCategory);
    return matchCompany && matchCategory;
  });

  const tier1 = filtered.filter((p) => p.tier === 1);
  const tier2 = filtered.filter((p) => p.tier === 2);

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-2">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">프로젝트</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">카드를 클릭하면 상세 내용을 볼 수 있어요</p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3 mb-8"
        >
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 w-10 shrink-0">회사</span>
            {companies.map((c) => (
              <button
                key={c}
                onClick={() => { setActiveCompany(c); setShowMore(false); }}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  activeCompany === c
                    ? 'bg-brand-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-brand-50 dark:hover:bg-brand-900/20'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 w-10 shrink-0">성격</span>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => { setActiveCategory(c); setShowMore(false); }}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === c
                    ? 'bg-brand-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-brand-50 dark:hover:bg-brand-900/20'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </motion.div>

        {activeCompany === '전체' && activeCategory === '전체' ? (
          <>
            {/* Tier 1 */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
              {tier1.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} onClick={() => setSelectedProject(project)} />
              ))}
            </div>

            {/* Tier 2 — collapsible */}
            {tier2.length > 0 && (
              <>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-500 dark:text-gray-400 hover:border-brand-400 hover:text-brand-600 dark:hover:border-brand-500 dark:hover:text-brand-400 transition-colors whitespace-nowrap"
                  >
                    Additional Projects ({tier2.length})
                    <span className="text-xs">{showMore ? '↑' : '↓'}</span>
                  </button>
                  <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
                </div>
                {showMore && (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {tier2.map((project, i) => (
                      <ProjectCard key={project.id} project={project} index={i} onClick={() => setSelectedProject(project)} />
                    ))}
                  </div>
                )}
              </>
            )}
          </>
        ) : (
          /* 필터 활성 시 tier 구분 없이 단일 그리드 */
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} onClick={() => setSelectedProject(project)} />
            ))}
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}

function ProjectCard({ project, index, onClick }) {
  const { card, company } = project;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={onClick}
      className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-md transition-all"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs px-2 py-0.5 rounded-full bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300 font-medium">
          {company}
        </span>
        <span className="text-xs text-gray-400 dark:text-gray-500">{card.period}</span>
      </div>

      <div className="mb-3 p-3 rounded-xl bg-brand-50 dark:bg-brand-900/20 text-center">
        <div className="text-xl font-bold text-brand-700 dark:text-brand-300">{card.keyMetric.value}</div>
        <div className="text-xs text-brand-500 dark:text-brand-400">{card.keyMetric.label}</div>
      </div>

      <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-snug mb-1 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
        {card.title}
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{card.headline}</p>

      <div className="flex flex-wrap gap-1.5">
        {card.tags.map((tag, i) => (
          <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-end mt-3">
        <span className="text-xs text-brand-400 dark:text-brand-500 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
          자세히 보기 →
        </span>
      </div>
    </motion.div>
  );
}
