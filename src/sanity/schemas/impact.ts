import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'impact',
  title: 'Impact Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString', // ce type inclut fr/en en interne
    }),
    {
      name: 'figures',
      title: 'Key Figures',
      type: 'array',
      of: [{ type: 'impactFigure' }],
    },
  ],
});
