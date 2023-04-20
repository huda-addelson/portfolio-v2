interface IVariants {
  hidden: {
    opacity: number;
    y: number;
  };
  visible: {
    opacity: number;
    y: number;
  };
  startFade: {
    opacity: number;
  };
  endFade: {
    opacity: number;
  };
}

export interface IProjectCard {
  variants: Variants;
  name: string;
  description: string;
  type: 'Website' | 'CLI' | 'Misc' | string;
  tags: string[];
  picture: string;
  repoLink: string;
  isFirstRender: boolean;
  demo: string;
}

export enum ProjectType {
  WEB = 'Website',
  // BOT = 'Bot',
  // CLI = 'CLI',
  // API = 'API',
}

export interface Project {
  name: string;
  description: string;
  type: ProjectType;
  tags: string[];
  picture: string;
  repoLink: string;
  demo: string;
}
