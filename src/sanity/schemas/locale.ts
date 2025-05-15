import { defineType } from 'sanity';

export const localeString = defineType({
  name: 'localeString',
  type: 'object',
  title: 'Localized String',
  fields: [
    {
      name: 'fr',
      type: 'string',
      title: 'Français',
    },
    {
      name: 'en',
      type: 'string',
      title: 'English',
    },
  ],
});

export const localeText = defineType({
  name: 'localeText',
  type: 'object',
  title: 'Localized Text',
  fields: [
    {
      name: 'fr',
      type: 'text',
      title: 'Français',
    },
    {
      name: 'en',
      type: 'text',
      title: 'English',
    },
  ],
});
