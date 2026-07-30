import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const recipes = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        category: z.enum(['SOUP', 'MAIN', 'SNACK']),
        calories: z.number(),
        time: z.number(),
        image: z.string(),
        ingredients: z.array(z.string()).optional(),
        prepare: z.array(z.string()).optional(),
        steps: z.array(z.string()).optional(),
        serving: z.string().optional(),
    })
});

const sidedish = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sidedish' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    calories: z.number(),
    time: z.number(),
    image: z.string(),
    ingredients: z.array(z.string()).optional(),
    prepare: z.array(z.string()).optional(),
    steps: z.array(z.string()).optional(),
    serving: z.string().optional(),
  }),
});

const journals = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journals' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    image: z.string(),
    heading: z.string(),
  })
})

export const collections = { recipes, sidedish, journals };