import type { ProgramItem } from '../types/content';

export const PROGRAMS_SECTION_DATA = {
  kicker: 'Academic pathways',
  title: 'Learn with purpose.\nLead with confidence.',
  description: 'Explore a learning environment designed to connect medical knowledge with real-world responsibility.',
};

export const PROGRAMS_DATA: ProgramItem[] = [
  {
    id: '01',
    kicker: '01 / FOUNDATION',
    title: 'Medical sciences',
    description: 'Build a strong base in the sciences, clinical reasoning and the fundamentals of medicine.',
    linkText: 'Explore pathway →',
    href: '#admissions',
  },
  {
    id: '02',
    kicker: '02 / PRACTICE',
    title: 'Clinical learning',
    description: 'Connect classroom concepts with practical exposure, observation and patient-centered learning.',
    linkText: 'Discover experience →',
    href: '#experience',
  },
  {
    id: '03',
    kicker: '03 / FUTURE',
    title: 'Professional growth',
    description: 'Develop communication, ethics, teamwork and the confidence to contribute to healthcare.',
    linkText: 'Talk to our team →',
    href: '#contact',
  },
];
