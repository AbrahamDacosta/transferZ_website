
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemas';


export default defineConfig({
  name: 'default',
  title: 'Transfer Z CMS',

  projectId: 'your_project_id',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
