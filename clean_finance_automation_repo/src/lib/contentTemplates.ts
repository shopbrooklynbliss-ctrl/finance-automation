export interface ContentTemplate {
  id: string;
  name: string;
  prompt: string;
}

export const DEFAULT_TEMPLATES: ContentTemplate[] = [
  {
    id: 'market-analysis',
    name: 'Market Analysis',
    prompt: 'Create a detailed financial market analysis covering key trends, sector performance, and investment opportunities. Focus on actionable insights for retail investors.'
  },
  {
    id: 'stock-breakdown',
    name: 'Stock Breakdown',
    prompt: 'Analyze a specific stock or company, including financials, competitive position, growth potential, risks, and whether it represents a good investment opportunity.'
  },
  {
    id: 'personal-finance',
    name: 'Personal Finance Tips',
    prompt: 'Provide practical personal finance advice covering budgeting, saving strategies, debt management, and building wealth. Make it accessible and actionable for everyday people.'
  }
];

export function getTemplateById(id: string): ContentTemplate | undefined {
  return DEFAULT_TEMPLATES.find(template => template.id === id);
}

export function buildPrompt(templateId?: string, topic?: string): string {
  let basePrompt = 'Generate engaging finance video content.';

  if (templateId) {
    const template = getTemplateById(templateId);
    if (template) {
      basePrompt = template.prompt;
    }
  }

  if (topic) {
    basePrompt = `${basePrompt} Topic: ${topic}`;
  }

  return basePrompt;
}
