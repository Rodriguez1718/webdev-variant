import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const trades = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trades' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    tagline: z.string(),
    hoverTitle: z.string().optional(),
    hoverDescription: z.string().optional(),
    image: z.string().optional(),
    hoverColor: z.string().optional(),
    description: z.string().optional(),
    icon: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const reviews = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    rating: z.number().min(1).max(5),
    location: z.string(),
    trade: z.string(),
    date: z.date(),
    featured: z.boolean().default(false),
    verified: z.boolean().default(false),
  }),
});

const templates = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const legal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lastUpdated: z.date(),
  }),
});

const data = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  trades,
  reviews,
  templates,
  legal,
  data,
};