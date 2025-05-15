// ✅ types.ts — Typage multilingue centralisé

export type MultilangCommon = {
    [key: string]: {
      [locale: string]: string;
    };
  };
  