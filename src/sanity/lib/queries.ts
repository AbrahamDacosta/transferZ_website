// lib/queries.ts
export const getHeroQuery = `
*[_type == "hero"][0]{
  title,
  subtitle,
  cta
}
`;
