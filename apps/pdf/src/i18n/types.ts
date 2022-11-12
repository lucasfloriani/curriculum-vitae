import translations from "../i18n";

type OnlyLanguageKeys<T> = {
  [K in keyof T as K extends `language:${string}` ? K : never]: T[K];
};

export type Translation = typeof translations;
export type Languages = keyof Translation;
export type Options = Translation["en-US"];
export type OptionsKey = keyof Options;
export type LanguageOptions = OnlyLanguageKeys<Options>;
// TODO: Use a better type name
export type LanguageOptionsKeys = keyof LanguageOptions;
