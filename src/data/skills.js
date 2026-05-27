export const skills = [
  {
    category: "CS · CX 운영",
    icon: "💬",
    items: [
      { name: "채널톡", level: "Expert", note: "도입·시나리오 설계·4년 운영" },
      { name: "Mailchimp", level: "Advanced", note: "Arkain 캠페인 32,164명 도달" },
      { name: "Stibee", level: "Advanced" }
    ]
  },
  {
    category: "데이터 · 분석",
    icon: "📊",
    items: [
      { name: "Looker Studio", level: "Advanced", note: "VOC 대시보드 직접 구축" },
      { name: "Google Analytics", level: "Advanced" },
      { name: "Statsig", level: "Advanced", note: "세션 140건 + Snap 50건 전수 분석" },
      { name: "Tableau", level: "Intermediate" },
      { name: "Stripe", level: "Intermediate" },
      { name: "Excel / Google Sheets", level: "Expert" }
    ]
  },
  {
    category: "AI · 자동화",
    icon: "🤖",
    items: [
      { name: "Claude", level: "Advanced", note: "릴리즈 노트 자동화 프롬프트 4종 설계" },
      { name: "Gemini API", level: "Advanced", note: "VOC 분류·요약 파이프라인 구축" },
      { name: "Google Apps Script", level: "Advanced" },
      { name: "Notion API", level: "Intermediate" }
    ]
  },
  {
    category: "협업 · 문서",
    icon: "🤝",
    items: [
      { name: "Slack", level: "Expert" },
      { name: "Notion", level: "Expert" },
      { name: "Jira", level: "Intermediate" }
    ]
  }
];

export const levelColor = {
  Expert: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300",
  Advanced: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  Intermediate: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
};
