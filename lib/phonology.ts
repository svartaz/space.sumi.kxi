import { replaceEach } from './common';
import { Formation } from './lexicology';

export const glide = (word) =>
  replaceEach(word, [
    [/j/g, 'J'],
    [/v/g, 'V'],

    [/^J/g, 'ʒ'],
    [/^V/g, 'v'],
    [/(?<=[aiueo])JJ(?=[aiueo])/g, 'jʒ'],
    [/(?<=[aiueo])JV(?=[aiueo])/g, 'jv'],
    [/(?<=[aiueo])VJ(?=[aiueo])/g, 'wʒ'],
    [/(?<=[aiueo])VV(?=[aiueo])/g, 'wv'],
    [/(?<=[aiueo])J(?=[aiueo])/g, 'ʒ'],
    [/(?<=[aiueo])V(?=[aiueo])/g, 'v'],

    [/J/g, 'j'],
    [/V/g, 'w'],
  ]);

export const toIpa = (s: string): string =>
  s.replace(/[a-z]+/g, (it) =>
    replaceEach(it, [
      [/.+/, (it) => glide(it).toUpperCase()],

      [/(?<=[JWAIUEO])N(?![JWAIUEO])/g, '\u0303'],

      [/K$/g, 'kʰ'],
      [/T$/g, 'tʰ'],
      [/P$/g, 'pʰ'],

      [/G/g, 'ŋ'],
      [/C/g, 'g'],
      [/X/g, 'ɕ'],
      [/Ʒ/g, 'ʑ'],
      [/R/g, 'ɾ'],

      [/.+/, (it) => it.toLowerCase().normalize('NFC')],
    ])
  );

const checkSonority = (word: string) => /^[xsfʒzv]?[cdbktp]?[xsfʒzv]?[gnm]?[rl]?[jw]?[aiueo]([jw]?[rl]?[gnm]?[xsfʒzv]?[cdbktp]?[xsfʒzv]?[gnm]?[rl]?[jw]?[aiueo])*[jw]?[rl]?[gnm]?[xsfʒzv]?[cdbktp]?[xsfʒzv]?$/.test(word);

export const invalid = (token: string, formation: Formation): string | null => {
  if (formation !== Formation.Simplex) return null;

  for (const [item, pattern] of [
    // base
    ['empty', /^$/],
    ['non-alphabet', /[^gnmcdbktpxsfʒzvjrlwaiueo]/],
    ['repeat', /(.)\1/],

    // vowel or consonant
    ['2 vowels', /[aiueo]{2}/],
    ['3 consonants', /[^jwaiyueo]{3}/],

    // balance
    ['initial-heavy', /^[^aiueo]{3,}[aiueo][^aiueo]$/],
    ['final-heavy', /^[^aiueo][aiueo][^jwaiueo]{3,}$/],

    // boundary
    ['initial', /^[aiueo]/],
    ['final', /[gcdbpʒzvl]$/],

    // coda
    ['coda', /[gʒzl](?![jwaiueo])/],
    ['coda', /[cdbv](?![rljwaiueo])/],

    // place
    ['velar front', /[gck]i/],
    ['palatal front', /[xʒ]j/],
    ['labial back', /[mbpfv]w/],

    ['plosive nasal velar', /[ck]g/],
    ['plosive nasal dental', /[dt]n/],
    ['plosive nasal labial', /[bp]m/],

    // manner
    ['nasal', /[gnm]{2}/],
    ['plosive', /[cdbktp][cdbktpʒzv]/],
    ['plosive+v', /[cdb][xsf]/],
    ['fricative', /[xsfʒzv][cdbʒzv]/],
    ['sibilant', /[xsʒz]{2}/],
  ] as [string, RegExp][])
    if (pattern.test(glide(token))) return item;

  if (!checkSonority(glide(token))) return 'sonority';

  if (formation === Formation.Simplex && 6 <= token.length) return 'long simplex';

  return null;
};
