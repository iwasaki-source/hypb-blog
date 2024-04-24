import { z, defineCollection } from 'astro:content';
import { zonedTimeToUtc } from 'date-fns-tz';

const articleCollection = defineCollection({
  schema: ({image}) => z.object({
    title: z.string(),
    // pubDate: z.string().transform((str) => zonedTimeToUtc(str, 'Asia/Tokyo')),
    pubDate: z.string(),
    image: image().optional(),
    category: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  articles: articleCollection,
};