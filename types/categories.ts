import { ProjectCategories } from "./projects";

export interface Category {
  id: number;
  title: string;
  description: string;
  color: string;
  svg: string;
  lottie: string;
  draft: boolean;
  order: number;
  projects: ProjectCategories[];
}
