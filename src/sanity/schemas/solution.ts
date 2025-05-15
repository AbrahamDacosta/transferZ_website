import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'solution',
  title: 'Solution Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
    }),
    {
      name: 'points',
      title: 'Key Points',
      type: 'array',
      of: [{ type: 'solutionPoint' }], // ✅ on ne passe pas par defineField ici
    },
  ],
});

