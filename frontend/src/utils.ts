import type { Article, ProjectArticles } from "./types/collections";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toTitle(text: string) {
  return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
}

export const formatArticleCollection = (collection: any[]): ProjectArticles[] => {
  const projectArticlesMap: Record<string, Article[]> = {};

  for (const article of collection) {
    const { title, slug, date, order } = article.data;

    const articleData: Article = {
      title,
      slug,
      date: formatDate(date),
      order,
      content: article.body,
    };

    const projectName = article.id.split('/')[0];

    if (!projectArticlesMap[projectName]) {
      projectArticlesMap[projectName] = [];
    }

    projectArticlesMap[projectName].push(articleData);
  }

  return Object.keys(projectArticlesMap).map((project) => ({
    project,
    articles: projectArticlesMap[project],
  }));
}

export const formatDate = (date: string): Date => {
  // Assumes format '15/01/2025'
  const [day, month, year] = date.split('/');
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
}