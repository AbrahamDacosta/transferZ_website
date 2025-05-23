// lib/sanityClient.ts
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'dp1eo92q',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: '2023-05-01', // ou la date du jour
  useCdn: true,
});
