// src/types.ts

export interface TechIcon {
  src: string;
  title: string;
}

export interface ProjectCardProps {
  imageSrc: string;
  posterSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  techIcons: TechIcon[];
  liveLink?: string;
  githubLink: string;
}

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  posterSrc: string;
  techIcons: TechIcon[];
  githubLink: string;
  liveLink?: string;
}

export interface HeroSectionProps {
  typedStrings?: string[];
}

export interface AboutSectionProps {
  delay?: string;
}

export interface ContactSectionProps {
  delay?: string;
}

export interface ServiceCardProps {
  iconClass: string;
  title: string;
  description: string;
}

export interface ServiceData {
  id: number;
  iconClass: string;
  title: string;
  description: string;
}

export interface ServicesSectionProps {
  delay?: string;
}