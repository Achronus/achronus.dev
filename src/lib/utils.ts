import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toTitle(text: string) {
  return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
}
