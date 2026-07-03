/* eslint-disable @typescript-eslint/no-explicit-any */
import { Category } from "@/generated/prisma/client";

export interface Project {
  id: number;
  name: string;
  preview: string;
  title: string;
  metadata?: {
    description: string;
  };
  content: any;
  draft: boolean;
  categories: Category[];
}

export interface ProjectCategories {
  id: number;
  projectId: number;
  categoryId: number;
  project: Project;
  category: Category;
}
