export interface QuickAccessItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  href?: string;
}

export interface ProgramItem {
  id: string;
  kicker: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}
