import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    tagline: z.string().optional(),
    status: z.enum(["Live", "Updating", "In Development", "Coming Soon"]),
    accent: z.enum(["torquoise", "blue", "green", "amber", "coral"]),
    // Logo: full URL (typically a raw GitHub link to the project's favicon).
    // If present, renders the actual logo. Otherwise falls back to `icon`.
    logo: z.string().url().optional(),
    // Lucide icon name to use when no `logo` is set
    // (e.g. "rocket", "circle-play"). Browse: https://lucide.dev/icons
    icon: z.string().optional(),
    tech: z.array(z.string()).default([]),
    links: z
      .object({
        github: z.string().url().optional(),
        docs: z.string().url().optional(),
        pypi: z.string().url().optional(),
      })
      .default({}),
    order: z.number(),
  }),
});

const socials = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    url: z.string(),
    type: z.string(),
    colour: z.string(),
    order: z.number(),
  }),
});

const tools = defineCollection({
  type: "content",
  schema: z.object({}).passthrough(),
});

// Hero copy. Body of hero.md is the statement paragraph (markdown supported,
// so use **bold** inline for emphasised words).
const hero = defineCollection({
  type: "content",
  schema: z.object({
    labelName: z.string(),
    labelRole: z.string(),
    title: z.string(),
    ctaText: z.string(),
    ctaHref: z.string(),
  }),
});

// Per-section header copy (label + title). Body of each section file is the
// intro description paragraph (markdown supported). The displayed label is
// composed at render time as `${order zero-padded} — ${label}`, so frontmatter
// stores just the label name (e.g. "Mission") and an `order` number.
const sections = defineCollection({
  type: "content",
  schema: z.object({
    label: z.string(),
    title: z.string(),
    order: z.number(),
  }),
});

// Mission principle cards. Body of each file is the principle description.
// `icon` is any Lucide icon name (e.g. "eye", "compass", "code", "droplet").
// Browse available icons at https://lucide.dev/icons or https://icones.js.org
// (Lucide section). Renders via astro-icon. The displayed number on each card
// is derived from `order` at render time (zero-padded to 2 digits).
const principles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    accent: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  projects,
  socials,
  tools,
  hero,
  sections,
  principles,
};
