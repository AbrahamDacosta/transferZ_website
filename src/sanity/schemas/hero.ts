import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'localeText',
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'localeString',
    }),
  ],
});
