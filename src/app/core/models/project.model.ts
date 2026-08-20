export interface Project {
  id: number | string;
  title: string;
  description: string;
  tags?: string[];
  link?: string;
  github?: string;
  imageUrl?: string;
}
