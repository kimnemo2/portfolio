import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';

const companies = ['전체', '구름', '프리윌린'];

export default function Projects() {
  const [activeCompany, setActiveCompany] = useState('전체');
  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeCompany === '전체'
    ? projects
    : projects.filter((p) => p.company === activeCompany);

  const tier1 = filtered.filter((p) => p.tier === 1);
  const tier2 = filtered.filter((p) => p.tier === 2);

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">프로젝트</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">카드를 클릭하면 상세 내용을 볼 수 있어요</p>
        </motion.div>

        {/* Company Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-2 mb-8 flex-wrap"
        >
          {companies.map((c) => (
            <button
              key={c}
              onClick={() => { setActiveCompany(c); setShowMore(false); }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCompany === c
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20'
              }`}
            >
              {c}
            </button>
          ))}
        </motion.div>

        {/* Tier 1 Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {tier1.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onClick={() => setSelectedProject(project)} />
          ))}
        </div>

        {/* Tier 2 */}
        {tier2.length > 0 && (
          <>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                Additional Projects ({tier2.length})
              </h3>
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
              >
                {showMore ? '접기 ↑' : '더 보기 ↓'}
              </button>
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
      </div>

      {/* Modal */}
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
      className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-md transition-all"
    >
      {/* Company + Period */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-medium">
          {company}
        </span>
        <span className="text-xs text-gray-400 dark:text-gray-500">{card.period}</span>
      </div>

      {/* Key Metric */}
      <div className="mb-3 p-3 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 text-center">
        <div className="text-xl font-bold text-indigo-700 dark:text-indigo-300">{card.keyMetric.value}</div>
        <div className="text-xs text-indigo-500 dark:text-indigo-400">{card.keyMetric.label}</div>
      </div>

      {/* Title */}
      <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-snug mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {card.title}
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{card.headline}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {card.tags.map((tag, i) => (
          <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow indicator */}
      <div className="flex justify-end mt-3">
        <span className="text-xs text-indigo-400 dark:text-indigo-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          자세히 보기 →
        </span>
      </div>
    </motion.div>
  );
}
