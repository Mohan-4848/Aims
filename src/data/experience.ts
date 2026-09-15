import type { FeatureItem, StatItem } from '../types/content';

export const EXPERIENCE_SECTION_DATA = {
  kicker: 'The AIMS experience',
  title: 'A campus built around your growth.',
  description:
    'From the first lecture to your first clinical insight, every part of the journey should help you become a better learner, teammate and future healthcare professional.',
};

export const EXPERIENCE_STATS: StatItem[] = [
  { value: '01', label: 'Connected academic community' },
  { value: '24/7', label: 'Hospital and emergency support' },
];

export const EXPERIENCE_FEATURES: FeatureItem[] = [
  {
    id: 'relevant-learning',
    icon: '⌁',
    title: 'Learning that feels relevant',
    description: 'Clear explanations, practical thinking and meaningful academic engagement.',
  },
  {
    id: 'healthcare-center',
    icon: '✚',
    title: 'Healthcare at the center',
    description: 'A culture that keeps patient dignity, safety and compassion in focus.',
  },
  {
    id: 'future-confidence',
    icon: '↗',
    title: 'Confidence for the future',
    description: 'Encouraging students to ask questions, collaborate and keep improving.',
  },
];
