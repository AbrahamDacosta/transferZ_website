import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'impactFigure',
  title: 'Impact Value',
  type: 'object',
  fields: [
    defineField({ name: 'value', title: 'Value', type: 'string' }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'localeString', // ici aussi, fr/en sont définis dans le type
    }),
  ],
});
