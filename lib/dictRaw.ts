import { replaceEach } from './common';

/*
  memo
    quantity as number of object
*/

export enum Klass {
  Case = 'c',
  Postverb = 'pv',
  Verb = 'v',
  Numeral = 'n',
  Joiner = 'j',
  Clause = 'cl',
  Other = '-',
}

/*
  momentary verb      -a
  temporary adjective -i
  perpetual noun      -u
*/
export enum Semantic {
  Verb = 'v',
  Adj = 'a',
  Noun = 'n',
}

const fromAcronym = (acronym: string) =>
  replaceEach(acronym.toUpperCase(), [
    [/A/g, 'ha'],
    [/Ä/g, 'hai'],
    [/B/g, 'ba'],
    [/C/g, 'ca'],
    [/D/g, 'da'],
    [/E/g, 'he'],
    [/F/g, 'fa'],
    [/G/g, 'ga'],
    [/H/g, 'xo'],
    [/I/g, 'hi'],
    [/J/g, 'ja'],
    [/K/g, 'ka'],
    [/L/g, 'la'],
    [/M/g, 'ma'],
    [/N/g, 'na'],
    [/O/g, 'ho'],
    [/Ö/g, 'hoi'],
    [/P/g, 'pa'],
    [/Q/g, 'ko'],
    [/R/g, 'ra'],
    [/S/g, 'sa'],
    [/T/g, 'ta'],
    [/U/g, 'hu'],
    [/V/g, 'va'],
    [/W/g, 'vi'],
    [/X/g, 'xa'],
    [/Y/g, 'ju'],
    [/Z/g, 'so'],

    [/(?<=[nmktxsfjvr])a$/g, ''],
  ]);

export const name = 'kex';

/*
  proto indo european
  *ḱ   x
  *k   k
  *kʷ  k
  *bʰ  b
  *dʰ  d
  *ǵʰ  j
  *gʰ  c
  *gʷʰ c

  assign cases
    subject - object
    animate - inanimate
    one - many
    part - whole
*/

export default {
  hi: { d: '2025-04-08', c: Klass.Other, td: 'hello, hi, excuse me, bye', o: 'a priori', t: 'foj' },
  '.': { d: '2025-04-08', c: Klass.Other, td: 'separateth two sentences', o: 'a priori', t: 'ru' },
  ',': { d: '2025-04-09', c: Klass.Other, td: 'separeteth two verbs', o: 'a priori', t: 'jo' },

  then: { d: '2025-02-06', c: Klass.Other, td: "separator ','", o: 'a priori', t: 'si' },

  // postverb -o
  der: { d: '2024-02-13', c: Klass.Case, td: 'nominative', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/fan%C4%93', t: 'fo' },
  den: { d: '2024-02-13', c: Klass.Case, td: 'accusative', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/sa', t: 'ro' },
  to: { d: '2024-02-13', c: Klass.Case, td: 'dative', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/t%C5%8D', t: 'to' },
  by: { d: '2024-12-24', c: Klass.Case, td: 'unspecified case', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/bi', t: 'bo' },
  ly: { d: '2024-02-13', c: Klass.Case, td: 'adverb', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/-līkaz', t: 'lo' },

  done: { d: '2024-02-13', c: Klass.Other, td: '[voice] passive. foregoeth a case marker (default: accusative).', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/ga-', t: 'ja' },

  begin: { d: '2024-02-13', c: Klass.Postverb, td: '[aspect] inchoative. begineth to', t: 'xo' },
  end: { d: '2024-02-13', c: Klass.Postverb, td: '[aspect] completive. endeth to', t: 'ko' },

  shall: { d: '2024-02-13', c: Klass.Postverb, td: '[tense] future', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/skulan%C4%85', t: 'xu' },
  do: { d: '2024-02-13', c: Klass.Postverb, td: '[tense] present', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/nu', t: 'nu' },
  did: { d: '2024-02-13', c: Klass.Postverb, td: '[tense] past', o: '', t: 'ku' },

  repeat: { d: '2024-02-13', c: Klass.Postverb, td: '[aspect] frequentative', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/-lōną', t: 'lu' },
  may: { d: '2024-02-13', c: Klass.Postverb, td: '[mood] irrealis, optative, imperative', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/maganą', t: 'mo' },
  of_course: { d: '2024-02-13', c: Klass.Postverb, td: '[restrictiveness] non-restrictive, which is, so', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-West_Germanic/þus', t: 'su' },
  ever: { d: '2024-10-19', c: Klass.Postverb, td: '[essentiality] in essence, in a nominal sense', o: 'https://en.wiktionary.org/wiki/esse#Latin', t: 'se' },

  with: { d: '2025-04-08', c: Klass.Joiner, td: 'together with', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/midi', t: 'mi' },

  not: { d: '2024-02-13', c: Klass.Other, td: '[logic] not, negation', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/ne', t: 'na' },
  and: { d: '2024-02-13', c: Klass.Joiner, td: '[logic] and, both, conjunction', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/bai', t: 'hej' },
  or: { d: '2024-02-13', c: Klass.Joiner, td: '[logic] or, at least one, disjunction', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/bai', t: 'hov' },
  iff: { d: '2024-02-13', c: Klass.Joiner, td: '[logic] if and only iff, equivalence', o: 'a priori', t: 'has' },
  xor: { d: '2025-01-02', c: Klass.Joiner, td: '[logic] either', idiom: ['not', 'iff'] },

  that: { d: '2024-02-13', c: Klass.Clause, td: 'openeth statement clause. @0 is the (event, statement) that @{sentence}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/%C3%BEat', t: 'di' },
  whether: { d: '2024-07-28', c: Klass.Clause, td: 'openeth truthfulness clause. @0 is whether @{sentence}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/ja', t: 'ji' },
  how_much: { d: '2024-10-20', c: Klass.Clause, td: 'openeth extent clause. @0 is the extent how much @{sentence}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/haiduz', t: 'xi' },
  _end: { d: '2024-02-13', c: Klass.Other, td: 'closeth clause', o: 'https://en.wiktionary.org/wiki/啦#Chinese', t: 'do' },

  called: { d: '2024-02-13', c: Klass.Other, td: '@0 hath a name @{1=arg}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/namô', t: 'no' },

  _0: { d: '2025-02-27', c: Klass.Other, td: 'bound variable 0', o: 'a priori', t: 'cu' },
  _1: { d: '2025-02-27', c: Klass.Other, td: 'bound variable 1', o: 'a priori', t: 'du' },
  _2: { d: '2025-02-27', c: Klass.Other, td: 'bound variable 2', o: 'a priori', t: 'bu' },

  zero: { d: '2024-02-13', c: Klass.Numeral, td: '[digit] 0', o: 'https://en.wiktionary.org/wiki/zero', t: 're' },
  one: { d: '2024-02-13', c: Klass.Numeral, td: '[digit] 1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Indo-Iranian/Háykas', t: 'ka' },
  two: { d: '2024-02-13', c: Klass.Numeral, td: '[digit] 2', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/twai', t: 'tu' },
  three: { d: '2024-02-13', c: Klass.Numeral, td: '[digit] 3', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/%C3%BEr%C4%ABz', t: 'de' },
  four: { d: '2024-02-13', c: Klass.Numeral, td: '[digit] 4', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/fedw%C5%8Dr', t: 'fet' },
  five: { d: '2024-02-13', c: Klass.Numeral, td: '[digit] 5', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Indo-Iranian/p%C3%A1n%C4%8Da', t: 'pan' },
  six: { d: '2024-02-13', c: Klass.Numeral, td: '[digit] 6', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Indo-Iranian/%C5%A1w%C3%A1%C4%87%C5%A1', t: 'xex' },
  seven: { d: '2024-02-13', c: Klass.Numeral, td: '[digit] 7', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/sebun', t: 'sef' },
  eight: { d: '2024-02-13', c: Klass.Numeral, td: '[digit] 8', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/aht%C5%8Du', t: 'vaj' },
  nine: { d: '2024-02-13', c: Klass.Numeral, td: '[digit] 9', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/newun', t: 'nin' },
  decimal: { d: '2024-02-13', c: Klass.Numeral, td: "[separator] decimal separator, '.'", o: 'https://en.wiktionary.org/wiki/Appendix:Lojban/pi', t: 'pi' },

  infinite: { d: '2024-09-06', c: Klass.Numeral, td: 'infinite, ∞', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/sin-', t: 'sin' },
  kilo: { d: '2024-02-13', c: Klass.Numeral, td: "[separator] 1e+3, ','", o: 'https://en.wikipedia.org/wiki/Metric_prefix', t: 'klo' },

  less_equal: { d: '2024-02-13', c: Klass.Numeral, td: '[comparative] at most. ≤', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/l%C4%ABtilaz', t: 'li' },
  less: { d: '2025-04-07', c: Klass.Numeral, td: '[comparative] more than. <', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/l%C4%ABtilaz', t: 'laj' },
  some: { d: '2025-04-06', c: Klass.Numeral, td: 'some, greater than 0', o: 'https://en.wiktionary.org/wiki/%CF%80%E1%BE%B6%CF%82#Ancient_Greek', idiom: ['zero', 'less'] },
  plural: { d: '2024-09-17', c: Klass.Numeral, td: 'plural, greater than 1', idiom: ['one', 'less'] },
  each: { d: '2024-02-13', c: Klass.Numeral, td: 'each, every, all', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/allaz', t: 'hav' },

  how_many: { d: '2024-02-13', c: Klass.Numeral, td: '[interogative] how many', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/hw%C5%8D', t: 'vo' },

  _add: { d: '2024-02-13', c: Klass.Numeral, td: '[binary] addition, +', o: 'https://en.wiktionary.org/wiki/summa#Latin', t: 'sum' },
  _sub: { d: '2024-02-13', c: Klass.Numeral, td: '[binary] subtraction, -', o: 'https://en.wiktionary.org/wiki/differentia#Latin', t: 'dif' },
  _mul: { d: '2024-02-13', c: Klass.Numeral, td: '[binary] multiplication, *', o: 'https://en.wiktionary.org/wiki/productum#Latin', t: 'rodu' },
  _div: { d: '2024-02-13', c: Klass.Numeral, td: '[binary] division, \u002F', o: 'https://en.wiktionary.org/wiki/quotiens#Latin', t: 'koti' },
  _mod: { d: '2024-08-24', c: Klass.Numeral, td: '[binary] modulo, %', o: 'https://en.wiktionary.org/wiki/modulus#Latin', t: 'modu' },
  _exp: { d: '2024-08-24', c: Klass.Numeral, td: '[binary] exponential, ^', o: 'https://en.wiktionary.org/wiki/potere#Latin', t: 'pote' },
  _log: { d: '2024-08-24', c: Klass.Numeral, td: '[binary] logarithm', o: 'https://en.wiktionary.org/wiki/logarithmo#Latin', t: 'loca' },

  the_number: { d: '2025-04-08', c: Klass.Other, td: '@0 is the number @{arg}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/tal%C5%8D', t: 'ta' },
  _ord: { d: '2024-08-02', c: Klass.Other, td: '@0 is @{number}-th', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/-i%C3%BE%C5%8D', t: 'ti' },
  //_card: { d: '2024-08-02', c: Klass.Other, td: '@0 contains @{number} elements', o: 'https://en.wiktionary.org/wiki/%E5%80%8B', t: 'ko' },

  first: { d: '2024-09-14', c: Klass.Verb, td: '@0 is (0th, first, primary)', idiom: ['_ord', 'zero'] },
  second: { d: '2024-09-14', c: Klass.Verb, td: '@0 is (1st, second, other)', idiom: ['_ord', 'one'] },
  last: { d: '2024-09-14', c: Klass.Verb, td: '@0 is (last, final)', idiom: ['_ord', 'each'] },

  // pronoun -a
  i: { d: '2024-02-13', c: Klass.Verb, td: '[pronoun] @0 is me', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/mek', t: 'ma' },
  thou: { d: '2024-02-13', c: Klass.Verb, td: '[pronoun] @0 is thee', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/%C3%BEek', t: 'da' },
  he: { d: '2024-02-13', c: Klass.Verb, td: '[pronoun] @0 is (him, it, this, that, the definite entity)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/hiz', t: 'xa' },
  self: { d: '2024-02-13', c: Klass.Verb, td: '[pronoun] @0 is oneself', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/sek', t: 'sa' },

  this: { d: '2024-09-16', c: Klass.Verb, td: '[pronoun] @0 is this', idiom: ['he', 'near'] },
  yon: { d: '2024-09-16', c: Klass.Verb, td: '[pronoun] @0 is that', idiom: ['he', 'far'] },

  who: { d: '2024-02-13', c: Klass.Verb, td: '[interogative] @0 is who', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/hwaz', t: 'va' },

  least: { d: '2024-02-13', c: Klass.Verb, td: '[extent.extreme] @0 is (minimal, possibly lowest)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/l%C4%93ziz', t: 'ne' },
  little: { d: '2024-09-29', c: Klass.Verb, td: '[extent.subjective] @0 is of (low, small) extent, below subjective norm', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/fawaz', t: 'fa' },
  normal: { d: '2024-09-29', c: Klass.Verb, td: '[extent.subjective] @0 is of (normal, moderate, default, usual, ordinary) extent, at subjective norm', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-West_Germanic/gamet', t: 'met' },
  much: { d: '2024-09-29', c: Klass.Verb, td: '[extent.subjective] @0 is of (high, great) extent, above subjective norm', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/mikilaz', t: 'mix' },
  most: { d: '2024-02-13', c: Klass.Verb, td: '[extent.extreme] @0 is (maximal, possibly highest)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/maiz', t: 'maj' },

  positive: { d: '2024-09-29', c: Klass.Verb, td: '[extent.polarity] @0 is (positive, above objective norm)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/wela', t: 'vev' },
  negative: { d: '2024-09-29', c: Klass.Verb, td: '[extent.polarity] @0 is (negative, below objective norm)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/missa-', t: 'mis' },
  up: { d: '2024-09-29', c: Klass.Verb, td: '[extent.dynamic] @0 is (riseth, goeth up, ascends) along with @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/r%C4%ABsan%C4%85', t: 'ris' },
  down: { d: '2024-09-29', c: Klass.Verb, td: '[extent.dynamic] @0 is (falleth, goeth down, descends) along with @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/fallan%C4%85', t: 'fav' },

  [name]: { d: '2024-02-17', c: Klass.Verb, td: `@0 is the language ${name}`, o: 'a priori', t: name },

  // basic
  do: { d: '2025-04-09', c: Klass.Verb, td: '@0 doth something', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/d%C5%8Dn%C4%85', t: 'do' },

  true: { d: '2025-04-08', c: Klass.Verb, td: '@0 is (true, real, correct)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/w%C4%93raz', t: 'ver' },
  cause: { d: '2024-02-13', c: Klass.Verb, td: '@0 (causeth, leteth) @{1:result, effect}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/l%C4%93tan%C4%85', t: 'let' },
  back: { d: '2024-06-14', c: Klass.Verb, td: '@0 is temporally (inverse, opposite) of @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/bak%C4%85', t: 'bak' },
  counter: { d: '2024-06-14', c: Klass.Verb, td: '@0 (complementeth, is dual of) @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/ga-', t: 'jam' },
  relate: { d: '2024-09-14', c: Klass.Verb, td: '@0 is (related to @1, @1-ish)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Indo-European/-teros', t: 'der' },

  exist: { d: '2024-08-23', c: Klass.Verb, td: '@0 (existeth, happeneth, occureth, is real, is actual)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/beun%C4%85', t: 'bevn' },
  change: { d: '2025-04-06', c: Klass.Verb, td: '@0 turneth into @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/wihslaz', t: 'viks' },
  iterate: { d: '2025-04-07', c: Klass.Verb, td: '@0 (iterateth, repeateth)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/%C3%BEweran%C4%85', t: 'dver' },

  make: { d: '2024-08-02', c: Klass.Verb, td: '@0 (maketh, buildeth, createth) @1 from @{2:material, component}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/skapjan%C4%85', t: 'xaf' },
  break: { d: '2024-06-14', c: Klass.Verb, td: '@0 (breaketh, destructeth) @1 into @{2:pieces, components}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/brekan%C4%85', t: 'brek', complex: ['back', 'make'] },

  have: { d: '2024-08-19', c: Klass.Verb, td: '@0 (hath, owneth) @{1:property}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/habjan%C4%85', t: 'kaf' },
  give: { d: '2024-02-13', c: Klass.Verb, td: '@0 giveth @1 to @{2:receiver}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/geban%C4%85', t: 'cef' },
  take: { d: '2024-08-24', c: Klass.Verb, td: '@0 {taketh, receiveth} @1 from @2', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/neman%C4%85', t: 'nem', idiom: ['back', 'give'] },

  from: { d: '2024-08-26', c: Klass.Verb, td: '@0 (is, cometh) from @{1:source, origin, start}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/fan%C4%93', t: 'fan' },
  unto: { d: '2024-08-26', c: Klass.Verb, td: '@0 (is, goeth) to @{1:sink, destination, goal}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/til%C4%85', t: 'tev' },
  through: { d: '2024-08-26', c: Klass.Verb, td: '@0 (is, passeth) (through, via) @{1:process, route, medium}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/%C3%BEurhw', t: 'durk' },
  at: { d: '2024-02-13', c: Klass.Verb, td: '@0 (is, stayeth) at @{1:position, location, place}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/wesan%C4%85', t: 'ves' },

  part: { d: '2024-08-06', c: Klass.Verb, td: '@0 is a (part, component) of @{1:whole}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/dailiz', t: 'daj' },
  atom: { d: '2024-08-25', c: Klass.Verb, td: '@0 is an atom @{number of parts:least}', complex: ['least', 'done', 'part'] },
  simple: { d: '2024-08-25', c: Klass.Verb, td: '@0 is simple @{number of parts:little}', complex: ['little', 'done', 'part'] },
  complex: { d: '2024-08-25', c: Klass.Verb, td: '@0 is complex @{number of parts:much}', complex: ['much', 'done', 'part'] },

  empty: { d: '2024-08-02', c: Klass.Verb, td: '@0 is empty of @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/t%C5%8Dmaz', t: 'tom', complex: ['least', 'contain'] },
  contain: { d: '2024-08-06', c: Klass.Verb, td: '@{0:collection, set, group, list} containeth @{1:element, member}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-West_Germanic/gad', t: 'cat' },
  full: { d: '2024-08-02', c: Klass.Verb, td: '@0 is full of @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/fullaz', t: 'fov', complex: ['most', 'contain'] },

  stop: { d: '2024-08-31', c: Klass.Verb, td: '@0 (stopeth, halteth, is static)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-West_Germanic/stopp%C5%8Dn', t: 'stof', complex: ['least', 'swift'] },
  slow: { d: '2024-09-06', c: Klass.Verb, td: '@0 is slow', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/slaiwaz', t: 'slaj', complex: ['little', 'swift'] },
  move: { d: '2024-08-31', c: Klass.Verb, td: '@0 (moveth, is dynamic)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/wegan%C4%85', t: 'vex', complex: ['not', 'least', 'swift'] },
  swift: { d: '2024-06-18', c: Klass.Verb, td: '@0 is (swift, quick)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/snellaz', t: 'snev' },

  // mathematics
  number: { d: '2025-04-08', c: Klass.Verb, td: '[mathematics] @0 is a number', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/tal%C5%8D', t: 'tav' },
  integer: { d: '2025-04-08', c: Klass.Verb, td: '[mathematics] @0 is an integer number (…,-1,0,+1,…)', complex: ['number', 'one', 'far'] },
  real_number: { d: '2025-04-08', c: Klass.Verb, td: '[mathematics] @0 is a real number', complex: ['number', 'zero', 'far'] },

  shape: { d: '2025-04-08', c: Klass.Verb, td: '[mathematics] @0 is a shape', o: 'https://en.wiktionary.org/wiki/forma#Latin', t: 'form' },

  point: { d: '2024-10-01', c: Klass.Verb, td: '[mathematics] @0 is a sizeless point', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/bruzdaz', t: 'brur' },
  line: { d: '2025-04-07', c: Klass.Verb, td: '[mathematics] @0 is a straight line', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/l%C4%ABn%C7%AD', t: 'lin' },
  plane: { d: '2025-04-07', c: Klass.Verb, td: '[mathematics] @0 is a flat plane', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/flataz', t: 'flat' },

  size: { d: '2024-10-01', c: Klass.Verb, td: '[geometry] @0 is (a size, a measure, an area, a volume, an accumulation)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/haupaz', t: 'kavf' },

  circle: { d: '2025-04-07', c: Klass.Verb, td: '[mathematics] @0 is (a circle, a disc)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/hringaz', t: 'krink' },
  ball: { d: '2025-04-07', c: Klass.Verb, td: '[mathematics] @0 is (a ball, a sphere)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/balluz', t: 'bav' },

  basis: { d: '2025-04-08', c: Klass.Verb, td: '[geometry] @0 is a independent basis', o: 'https://en.wiktionary.org/wiki/%CE%B2%CE%AC%CF%83%CE%B9%CF%82#Ancient_Greek', t: 'bas' },
  dimension: { d: '2025-04-08', c: Klass.Verb, td: '[geometry] @0 is a dimension', complex: ['number', 'basis'] },

  parallel: { d: '2025-04-07', c: Klass.Verb, td: '[mathematics] @0 is (parallel, horizontal) to @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/baltijaz', t: 'bavt' },
  cross: { d: '2025-04-07', c: Klass.Verb, td: '[mathematics] @0 crosseth @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/spl%C4%ABtan%C4%85', t: 'spit' },
  skew: { d: '2025-04-07', c: Klass.Verb, td: '[mathematics] @0 is skew to @1', o: 'https://en.wiktionary.org/wiki/wrigian#Old_English', t: 'vrix', complex: ['not', 'parallel', 'not', 'cross'] },

  orthogonal: { d: '2025-04-07', c: Klass.Verb, td: '[mathematics] @0 is (orthogonal, perpendicular, vertical) to @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/staupaz', t: 'stavf' },

  polygon: { d: '2025-04-07', c: Klass.Verb, td: '[mathematics] @0 is a polygon', complex: ['shape', 'three', 'less_equal', 'line'] },
  polyhedron: { d: '2025-04-07', c: Klass.Verb, td: '[mathematics] @0 is a polyhedron', complex: ['shape', 'four', 'less_equal', 'plane'] },

  triangle: { d: '2025-04-07', c: Klass.Verb, td: '[geometry] @0 is a triangle', complex: ['shape', 'three', 'line'] },
  isosceles: { d: '2025-04-07', c: Klass.Verb, td: '[geometry] @0 is an isosceles triangle', complex: ['shape', 'three', 'line', 'two', 'same'] },
  regular_triangle: { d: '2025-04-07', c: Klass.Verb, td: '[geometry] @0 is an equilateral triangle', complex: ['shape', 'three', 'line', 'same'] },

  tetragon: { d: '2025-04-07', c: Klass.Verb, td: '[geometry] @0 is a tetragon', complex: ['shape', 'four', 'line'] },
  pentagon: { d: '2025-04-07', c: Klass.Verb, td: '[geometry] @0 is a pentagon', complex: ['shape', 'five', 'line'] },
  hexagon: { d: '2025-04-07', c: Klass.Verb, td: '[geometry] @0 is a hexagon', complex: ['shape', 'six', 'line'] },

  rectangle: { d: '2025-04-07', c: Klass.Verb, td: '[geometry] @0 is a rectangle', complex: ['shape', 'four', 'orthogonal'] },
  square: { d: '2025-04-07', c: Klass.Verb, td: '[geometry] @0 is a square', complex: ['shape', 'four', 'line', 'same'] },

  regular_hexahedron: { d: '2025-04-07', c: Klass.Verb, td: '[geometry] @0 is a regular hexagon', complex: ['shape', 'six', 'plane', 'same'] },

  // physics
  world: { d: '2024-02-13', c: Klass.Verb, td: '@0 is a (world, universe, spacetime)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/luftuz', t: 'luft' },
  space: { d: '2024-02-13', c: Klass.Verb, td: '@0 is the 3-dimensional physical spacial continuum', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/r%C5%ABm%C4%85', t: 'rum' },
  time: { d: '2024-02-13', c: Klass.Verb, td: '@0 is the 1-dimensional physical temporal continuum', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/t%C4%ABm%C3%B4', t: 'tim' },
  thing: { d: '2024-02-13', c: Klass.Verb, td: '@0 is a (thing, matter) located in a spacetime', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/%C3%BEing%C4%85', t: 'dink' },
  mass: { d: '2024-08-31', c: Klass.Verb, td: '@0 is mass of @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/balk%C3%B4', t: 'bavx' },

  date: { d: '2025-04-02', c: Klass.Verb, td: '@0 is (a date, a point in time)', complex: ['point', 'time'] },
  duration: { d: '2025-04-02', c: Klass.Verb, td: '@0 is (a duration, a quantity in time)', complex: ['size', 'time'] },

  energy: { d: '2024-08-31', c: Klass.Verb, td: '@0 is energy', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Italic/gn%C4%81wos', complex: ['how_much', 'work', 'may'] },
  heat: { d: '2024-09-06', c: Klass.Verb, td: '@0 is heat', complex: ['hot', 'energy'] },
  electric: { d: '2024-08-31', c: Klass.Verb, td: '@0 hath electric charge', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/sparkaz', t: 'spark' },
  force: { d: '2024-10-01', c: Klass.Verb, td: '@0 is force', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/kraftuz', t: 'kraft' },
  gravity: { d: '2025-04-06', c: Klass.Verb, td: '@0 is gravity', complex: ['force', 'heavy'] },

  wave: { d: '2024-08-19', c: Klass.Verb, td: '@{0:medium} waveth @{1:form}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/bulgij%C5%8D', t: 'bux' },
  ray: { d: '2024-02-13', c: Klass.Verb, td: '[wave] @0 is (a light, an electromagnetic wave)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/leuht%C4%85', t: 'ljuk' },
  sound: { d: '2024-08-19', c: Klass.Verb, td: '[wave] @0 is a sound from @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/klingan%C4%85', t: 'klin' },
  turn: { d: '2024-08-19', c: Klass.Verb, td: '@0 (turneth, rotateth, spineth) around @{1:pivot, center}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/%C3%BEr%C4%93an%C4%85', t: 'dren' },

  fire: { d: '2024-12-08', c: Klass.Verb, td: '@0 burneth @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/brinnan%C4%85', t: 'brin' },

  fate: { d: '2025-04-07', c: Klass.Verb, td: '@0 is (fate, destiny)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/wurdiz', t: 'vor', complex: ['little', 'luck'] },
  luck: { d: '2025-04-07', c: Klass.Verb, td: '@0 is (luck, chance)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/hamp%C4%85', t: 'kan' },

  // physical attribute
  big: { d: '2024-02-13', c: Klass.Verb, td: '@0 is (big, great)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/grautaz', t: 'crav' },
  small: { d: '2024-09-26', c: Klass.Verb, td: '@0 is small', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/smalaz', complex: ['little', 'big'], t: 'smav' },

  long: { d: '2024-02-13', c: Klass.Verb, td: '@0 is (long, big in 1 dimension and small in others)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/langaz', t: 'lank' },
  short: { d: '2024-09-26', c: Klass.Verb, td: '@0 is (short, small in 1 dimension and small in others)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/skurtaz', complex: ['little', 'long'], t: 'skur' },

  thick: { d: '2024-02-13', c: Klass.Verb, td: '@0 is (thick, dull)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/%C3%BEekuz', t: 'dik' },
  thin: { d: '2024-04-06', c: Klass.Verb, td: '@0 is (thin, sharp)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/%C3%BEunnuz', t: 'dun' },

  light: { d: '2025-04-05', c: Klass.Verb, td: '@0 is lightweight', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/linhtaz', t: 'lint', complex: ['little', 'heavy'] },
  heavy: { d: '2024-07-14', c: Klass.Verb, td: '@0 is heavy', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/sw%C4%93raz', t: 'sver' },

  dense: { d: '2024-07-15', c: Klass.Verb, td: '@0 is (dense, heavy per volume)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/%C3%BEinhtaz', t: 'dint' },

  smooth: { d: '2024-09-26', c: Klass.Verb, td: '@0 (is smooth, is sleek, hath low friction)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/sl%C4%ABkan%C4%85', t: 'srik', complex: ['little', 'rough'] },
  rough: { d: '2024-08-24', c: Klass.Verb, td: '@0 (is rough, is coarse, hath high friction)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/r%C5%ABhaz', t: 'ruk' },

  hard: { d: '2024-09-26', c: Klass.Verb, td: '@0 is (hard, firm)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/fastuz', complex: ['little', 'soft'], t: 'fas' },
  soft: { d: '2024-09-26', c: Klass.Verb, td: '@0 is soft @{#:how far the surface can move}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/w%C4%ABkwan%C4%85', t: 'vik' },

  cold: { d: '2024-08-30', c: Klass.Verb, td: '[temparature] @0 (cold, cool)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/kalan%C4%85', t: 'kav', complex: ['little', 'hot'] },
  hot: { d: '2024-08-30', c: Klass.Verb, td: '[temparature] @0 is (hot, warm)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/haitaz', t: 'kajt' },

  contact: { d: '2024-08-08', c: Klass.Verb, td: '@0 (toucheth, is adjacent, is in contact with) @1 @{distance:least}', complex: ['least', 'far'] },
  near: { d: '2024-08-08', c: Klass.Verb, td: '@0 is (near, close to) @1 @{distance:little}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/n%C4%93hwaz', complex: ['little', 'far'], t: 'nex' },
  far: { d: '2024-08-08', c: Klass.Verb, td: '@0 is (far, distant, remote) from @1 @{distance:much}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/ferrai', t: 'fer' },

  before: { d: '2024-02-13', c: Klass.Verb, td: '[direction] @0 is (before, earlier than) @{1:after}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/furai', t: 'for' },
  below: { d: '2024-02-13', c: Klass.Verb, td: '[direction] @0 is below @{1:above}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/ni%C3%BEan%C4%93', t: 'nit' },
  hind: { d: '2024-02-13', c: Klass.Verb, td: '[direction] @0 is behind @{1:front}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/hinder', t: 'xint' },
  left: { d: '2024-02-13', c: Klass.Verb, td: '[direction] @0 is to the left of @{1:right}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Old_High_German/link', t: 'link' },

  west: { d: '2024-08-24', c: Klass.Verb, td: '[direction] @0 is to the west of @{1:to the east}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/westraz', t: 'vest' },
  south: { d: '2024-08-24', c: Klass.Verb, td: '[direction] @0 is to the south of @{1:to the north}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/nur%C3%BEraz', t: 'nurt' },

  solid: { d: '2024-02-13', c: Klass.Verb, td: '[state of matter] @0 is solid', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/st%C4%ABfaz', t: 'stif' },
  liquid: { d: '2024-02-13', c: Klass.Verb, td: '[state of matter] @0 is liquid', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/flut%C4%85', t: 'flut' },
  gas: { d: '2024-02-13', c: Klass.Verb, td: '[state of matter] @0 is gas', o: 'https://en.wiktionary.org/wiki/gas#Dutch', t: 'cas' },
  plasm: { d: '2024-07-15', c: Klass.Verb, td: '[state of matter] @0 is plasm', o: 'https://en.wiktionary.org/wiki/flamma#Latin', t: 'flam' },

  water: { d: '2024-02-13', c: Klass.Verb, td: '[matter] @0 is water', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/wat%C5%8Dr', t: 'vat' },
  salt: { d: '2024-02-13', c: Klass.Verb, td: '[matter] @0 is salt', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/salt%C4%85', t: 'sav' },
  stone: { d: '2024-08-19', c: Klass.Verb, td: '[matter] @0 is stone', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/stainaz', t: 'sten' },
  smoke: { d: '2024-09-16', c: Klass.Verb, td: '[matter] @0 is smoke', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/dwemr%C4%85', t: 'dvem' },
  ash: { d: '2024-09-16', c: Klass.Verb, td: '[matter] @0 is ash', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/ask%C7%AD', t: 'hax' },

  dry: { d: '2024-09-16', c: Klass.Verb, td: '@0 is dry', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/druknaz', complex: ['little', 'contain', 'water'], t: 'drux' },
  wet: { d: '2024-09-16', c: Klass.Verb, td: '@0 is (wet, moist)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/funhtijaz', t: 'font', complex: ['contain', 'water'] },

  color: { d: '2024-02-13', c: Klass.Verb, td: '[color] @0 is the color of @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/farwaz', t: 'far' },
  hue: { d: '2024-11-20', c: Klass.Verb, td: '[color] @0 is (a hue, a frequency of a light) of @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/hiwj%C4%85', t: 'xiv' },

  red: { d: '2024-02-13', c: Klass.Verb, td: '[hue] @0 is red', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/raudaz', t: 'rav' },
  orange: { d: '2024-02-13', c: Klass.Verb, td: '[hue] @0 is orange', o: 'https://en.wiktionary.org/wiki/%D9%86%D8%A7%D8%B1%D9%86%DA%AF#Persian', t: 'naran' },
  yellow: { d: '2024-02-13', c: Klass.Verb, td: '[hue] @0 is yellow', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/gulaz', t: 'cov' },
  green: { d: '2024-02-13', c: Klass.Verb, td: '[hue] @0 is green', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/gr%C5%8Dniz', t: 'cron' },
  cyan: { d: '2025-04-07', c: Klass.Verb, td: '[hue] @0 is cyan', o: 'https://en.wiktionary.org/wiki/%CE%BA%CF%8D%CE%B1%CE%BD%CE%BF%CF%82#Ancient_Greek', t: 'kvan' },
  blue: { d: '2024-02-13', c: Klass.Verb, td: '[hue] @0 is blue', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/bl%C4%93waz', t: 'blev' },
  purple: { d: '2024-02-13', c: Klass.Verb, td: '[hue] @0 is purple', o: 'https://en.wiktionary.org/wiki/%E1%BC%B4%CE%BF%CE%BD#Ancient_Greek', t: 'vjon' },
  magenta: { d: '2025-04-07', c: Klass.Verb, td: '[hue] @0 is magenta', o: 'https://en.wiktionary.org/wiki/magenta#English', t: 'majen' },

  gray: { d: '2024-08-19', c: Klass.Verb, td: '[saturation] @0 is monochrome', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/gr%C4%93waz', t: 'crev', complex: ['least', 'vivid'] },
  dull: { d: '2024-08-19', c: Klass.Verb, td: '[saturation] @0 is dull-colored', complex: ['little', 'vivid'] },
  vivid: { d: '2024-08-19', c: Klass.Verb, td: '[saturation] @0 is vivid-colored', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/sk%C4%ABnan%C4%85', t: 'sken' },

  black: { d: '2024-04-26', c: Klass.Verb, td: '[brightness] @0 is black', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/swartaz', t: 'svart', complex: ['least', 'bright'] },
  dark: { d: '2024-08-19', c: Klass.Verb, td: '[brightness] @0 is (dark, dim)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/dimmaz', t: 'dim', complex: ['little', 'bright'] },
  bright: { d: '2024-08-19', c: Klass.Verb, td: '[brightness] @0 (is light, bright)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/berhtaz', t: 'bert' },
  white: { d: '2024-02-13', c: Klass.Verb, td: '[brightness] @0 is white', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/hw%C4%ABtaz', t: 'xvit', complex: ['most', 'bright'] },

  // celestial
  celestial: { d: '2025-04-07', c: Klass.Verb, td: '@0 is a celestial object in the space', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/stern%C7%AD', t: 'ster' },
  sun: { d: '2024-02-13', c: Klass.Verb, td: '[celestial] @0 is (a sun, a fixed star)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/sunn%C7%AD', t: 'sun', complex: ['celestial', 'stop'] },
  planet: { d: '2025-04-07', c: Klass.Verb, td: '[celestial] @0 is a planet', complex: ['celestial', 'move'] },
  moon: { d: '2024-02-13', c: Klass.Verb, td: '[celestial] @0 is (a moon, a planet)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/m%C4%93n%C3%B4', t: 'men', complex: ['celestial', 'done', 'lead'] },

  earth: { d: '2024-02-13', c: Klass.Verb, td: '[celestial] @0 is the earth', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/er%C3%BE%C5%8D', t: 'hert' },

  year: { d: '2024-08-30', c: Klass.Verb, td: '@0 is year of @{1:earth}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/j%C4%93r%C4%85', t: 'jer', complex: ['duration', 'sun'] },
  season: { d: '2024-08-30', c: Klass.Verb, td: '@0 is a season of @{1:earth}', complex: ['part', 'year'] },
  winter: { d: '2024-08-30', c: Klass.Verb, td: '@0 is a winter of @{1:earth}', complex: ['season', 'least', 'hot'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/wintruz', t: 'vinte' },
  spring: { d: '2024-11-21', c: Klass.Verb, td: '@0 is a spring of @{1:earth}', complex: ['season', 'up', 'hot'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/wazr%C4%85', t: 'vaza' },
  summer: { d: '2024-08-30', c: Klass.Verb, td: '@0 is a summer of @{1:earth}', complex: ['season', 'most', 'hot'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/sumaraz', t: 'suma' },
  autumn: { d: '2024-11-21', c: Klass.Verb, td: '@0 is an autumn of @{1:earth}', complex: ['season', 'down', 'hot'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/harbistaz', t: 'karbi' },

  day: { d: '2024-08-19', c: Klass.Verb, td: '@0 is a day', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/t%C4%ABnaz', t: 'tin', complex: ['duration', 'planet'] },
  morning: { d: '2024-08-19', c: Klass.Verb, td: '@0 is (a morning, a daytime)', complex: ['part', 'day', 'bright'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/murginaz', t: 'mur' },
  night: { d: '2024-08-19', c: Klass.Verb, td: '@0 is a night', complex: ['part', 'day', 'dark'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/nahts', t: 'nat' },

  // terrain
  land: { d: '2024-02-13', c: Klass.Verb, td: '[terrain] @0 is a land', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/land%C4%85', t: 'lan' },
  sea: { d: '2024-02-13', c: Klass.Verb, td: '[terrain] @0 is a sea', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/mari', t: 'mar' },
  hill: { d: '2024-02-13', c: Klass.Verb, td: '[terrain] @0 is a (mountain, hill)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/bergaz', t: 'berx' },
  river: { d: '2024-02-13', c: Klass.Verb, td: '[terrain] @0 is a river', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/straumaz', t: 'srom' },
  sky: { d: '2024-08-19', c: Klass.Verb, td: '[terrain] @0 is a sky', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/skiwj%C4%85', t: 'xim' },

  // weather
  cloud: { d: '2024-08-19', c: Klass.Verb, td: '[weather] @0 is a cloud', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/wulkn%C4%85', t: 'vovk' },
  fog: { d: '2024-08-19', c: Klass.Verb, td: '[weather] @0 is (fog, mist)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/mihstaz', t: 'mist' },
  rain: { d: '2024-08-19', c: Klass.Verb, td: '[weather] @0 is rain', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/regn%C4%85', t: 'rejn' },
  snow: { d: '2024-08-19', c: Klass.Verb, td: '[weather] @0 is snow', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/sn%C4%ABwan%C4%85', t: 'sniv' },
  hail: { d: '2024-08-19', c: Klass.Verb, td: '[weather] @0 is hail', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/haglaz', t: 'kev' },
  thunder: { d: '2024-08-19', c: Klass.Verb, td: '[weather] @0 is a thunder', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/%C3%BEunraz', t: 'dur' },

  // feel
  feel: { d: '2024-02-13', c: Klass.Verb, td: '@0 (feeleth, senseth) @{1:stimulus}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Indo-European/sent-', t: 'sen' },
  hear: { d: '2024-02-13', c: Klass.Verb, td: '[sense] @0 hears @{1:sound}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/hleum%C3%B4', t: 'xlev' },
  see: { d: '2024-02-13', c: Klass.Verb, td: '[sense] @0 sees @{1:sight}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/wl%C4%ABtan%C4%85', t: 'lis' },
  smell: { d: '2024-02-13', c: Klass.Verb, td: '[sense] @0 smells @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/reukan%C4%85', t: 'rev' },
  taste: { d: '2024-02-13', c: Klass.Verb, td: '[sense] @0 tastes @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-West_Germanic/smak%C4%93n', t: 'sma' },
  touch: { d: '2024-02-13', c: Klass.Verb, td: '[sense] @0 (palpeth, toucheth) @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/t%C4%93kan%C4%85', t: 'tek' },
  hurt: { d: '2025-03-01', c: Klass.Verb, td: '[sense] @0 (hurteth, feeleth pain) from @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/sairaz', t: 'sajr' },

  differ: { d: '2024-02-13', c: Klass.Verb, td: '[comparison] @0 (differeth, varieth) from @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/skiljan%C4%85', t: 'skev' },
  same: { d: '2024-08-27', c: Klass.Verb, td: '[comparison] @0 is (the same as, identical to, equal to) @1', complex: ['least', 'differ'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/samaz', t: 'sam' },

  simulate: { d: '2024-08-27', c: Klass.Verb, td: '@{0} (simulateth, mimiceth, imitateth, mocketh, faketh) @{1:original}', o: 'https://en.wiktionary.org/wiki/mock#English', t: 'mok' },
  test: { d: '2024-07-26', c: Klass.Verb, td: '@0 (checketh, examineth, inspecteth) @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/keusan%C4%85', t: 'xevs' },
  compare: { d: '2024-07-26', c: Klass.Verb, td: '@0 compares @{1:individuals}', complex: ['differ', 'test'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/metan%C4%85', t: 'mes' },

  // life
  live: { d: '2024-02-13', c: Klass.Verb, o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/libjan%C4%85', td: '@0 (liveth, is alive)', t: 'lif' },
  die: { d: '2024-08-24', c: Klass.Verb, td: '@0 (dieth, is dead)', idiom: ['live', 'end'] },
  kill: { d: '2024-08-24', c: Klass.Verb, td: '@0 killeth @1', idiom: ['cause', 'die'] },
  wake: { d: '2024-02-13', c: Klass.Verb, td: '@0 (waketh, is awake)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/wakan%C4%85', t: 'vax' },
  sleep: { d: '2024-04-26', c: Klass.Verb, td: '@0 (sleepeth, is asleep)', complex: ['least', 'wake'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/swefan%C4%85', t: 'svef' },

  // human action: change location
  lie: { d: '2024-08-30', c: Klass.Verb, td: '@0 (lieth, horizontally stayeth) on @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/ligjan%C4%85', t: 'lik' },
  sit: { d: '2024-08-30', c: Klass.Verb, td: '@0 sits on @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/sitjan%C4%85', t: 'ses' },
  stand: { d: '2024-08-30', c: Klass.Verb, td: '@0 stands on @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/st%C4%81n%C4%85', t: 'stan' },
  walk: { d: '2024-06-18', c: Klass.Verb, td: '@0 walk on @{1:ground}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/walkan%C4%85', t: 'vavk' },
  run: { d: '2024-06-18', c: Klass.Verb, td: '@0 run on @{1:ground}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/rinnan%C4%85', t: 'rin' },
  leap: { d: '2024-07-28', c: Klass.Verb, td: '@0 (jump, leap, skip, hop) over @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/hlaupan%C4%85', t: 'klavf' },
  crawl: { d: '2025-03-31', c: Klass.Verb, td: '@0 crawleth on @{1:ground}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/kreupan%C4%85', t: 'krevf' },
  swim: { d: '2024-08-19', c: Klass.Verb, td: '@0 (swimeth, flieth) in @{1:fluid}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/swimman%C4%85', t: 'svim' },
  fly: { d: '2024-07-28', c: Klass.Verb, td: '@0 flieth in @{1:air}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/fleugan%C4%85', t: 'flev' },

  // human action: stay
  dig: { d: '2024-07-28', c: Klass.Verb, td: '@0 digeth in @{1:ground}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/graban%C4%85', t: 'craf' },
  dream: { d: '2024-10-16', c: Klass.Verb, td: '@0 dreameth @{1:dream}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/draumaz', t: 'dravm' },

  // physiological
  eat: { d: '2024-02-13', c: Klass.Verb, td: '[physiological] @0 eateth @{1:food}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-West_Germanic/etan', t: 'het' },
  bite: { d: '2024-08-24', c: Klass.Verb, td: '[physiological.eat] @0 biteth @{1:food}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/b%C4%ABtan%C4%85', t: 'bis' },
  chew: { d: '2024-08-24', c: Klass.Verb, td: '[physiological.eat] @0 cheweth @{1:food}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/kewwan%C4%85', t: 'xev' },
  swallow: { d: '2024-08-24', c: Klass.Verb, td: '[physiological.eat] @0 swalloweth @{1:food}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/swelgan%C4%85', t: 'svev' },
  suck: { d: '2025-03-31', c: Klass.Verb, td: '[physiological.eat] @0 sucketh @{1:food}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/s%C5%ABkan%C4%85', t: 'suk' },
  lick: { d: '2024-08-19', c: Klass.Verb, td: '[body interaction] @0 licketh @1', complex: ['touch', 'tongue'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/likk%C5%8Dn%C4%85', t: 'lix' },

  vomit: { d: '2024-06-14', c: Klass.Verb, td: '[physiological] @0 vomits @{1:excreta}', complex: ['back', 'eat'], o: 'https://en.wiktionary.org/wiki/puke', t: 'puk' },
  shit: { d: '2024-06-14', c: Klass.Verb, td: '[physiological] @0 shits @{1:excreta}', complex: ['counter', 'eat'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/drit%C4%85', t: 'dris' },
  digest: { d: '2024-02-13', c: Klass.Verb, td: '[physiological] @0 digests @{1:food}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/meltan%C4%85', t: 'mevs' },
  fuck: { d: '2024-02-13', c: Klass.Verb, td: '[physiological] @0 fucketh @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/fukk%C5%8Dn%C4%85', t: 'fok' },
  sick: { d: '2024-02-13', c: Klass.Verb, td: '[physiological] @0 (is sick, malfunctioneth)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/seukaz', t: 'sevk' },
  healthy: { d: '2024-08-24', c: Klass.Verb, td: '[physiological] @0 is healthy', complex: ['little', 'sick'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/sundaz', t: 'suns' },
  recover: { d: '2024-12-24', c: Klass.Verb, complex: ['down', 'sick'], td: '[physiological] @0 recovers' },

  // emotion
  emotion: { d: '2024-08-02', c: Klass.Verb, td: '@0 feeleth @{1:emotion, feeling}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/hugiz', t: 'xuk' },
  bad: { d: '2024-08-02', c: Klass.Verb, td: '[emotion] @0 (disliketh, feeleth bad about) @{1:bad} @{desired distance:much}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/lai%C3%BEaz', t: 'rajs' },
  good: { d: '2024-08-02', c: Klass.Verb, td: '[emotion] @0 (liketh, feeleth good about) @{1:good} @{desired distance:little}', complex: ['little', 'bad'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/g%C5%8Ddaz', t: 'cot' },
  sad: { d: '2024-09-10', c: Klass.Verb, td: '[emotion] @0 is (sad, depressed) about @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/surg%C5%8D', t: 'surk' },
  glad: { d: '2024-08-02', c: Klass.Verb, td: '[emotion] @0 is (happy, glad, merry) about @1', complex: ['little', 'sad'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/frawaz', t: 'frav' },

  care: { d: '2024-09-10', c: Klass.Verb, td: '[emotion] @0 (regardeth, careth about) @{1:important}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/kar%C5%8D', t: 'kar' },
  fear: { d: '2024-09-10', c: Klass.Verb, td: '[emotion.care] @0 (worrieth, feareth, is afraid of, negatively cares about) @1', complex: ['care', 'bad'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/furhtaz', t: 'fors' },
  respect: { d: '2024-09-10', c: Klass.Verb, td: '[emotion.care] @0 (respecteth, honoureth, positively cares about) @1', complex: ['care', 'good'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/wer%C3%BEaz', t: 'vert' },
  neglect: { d: '2024-09-10', c: Klass.Verb, td: '[emotion] @0 (neglecteth, is indifferent to, cares less about) @1', complex: ['little', 'care'] },
  serene: { d: '2024-09-10', c: Klass.Verb, td: '[emotion] @0 is (calm about, serene about, positively neglects) @1', complex: ['neglect', 'good'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/r%C5%8D%C5%8D', t: 'rov' },
  scorn: { d: '2024-09-10', c: Klass.Verb, td: '[emotion] @0 (scorneth, disdaineth, disrespecteth, negatively neglects) @1', complex: ['neglect', 'bad'] },

  angry: { d: '2024-09-10', c: Klass.Verb, td: '[emotion] @0 is (angry with, mad at) @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/wrai%C3%BEaz', t: 'vraj' },
  tolerant: { d: '2025-04-01', c: Klass.Verb, td: '[emotion] @0 is tolrant to @1', complex: ['little', 'angry'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/%C3%BEul%C4%81n%C4%85', t: 'dov' },

  hate: { d: '2024-09-10', c: Klass.Verb, td: '[emotion] @0 is (hateth, detests) @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/hataz', t: 'xat' },
  expect: { d: '2024-09-10', c: Klass.Verb, o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/b%C4%ABdan%C4%85', td: '[emotion] @0 (expecteth, is not surprised at) @1', t: 'bida' },
  amaze: { d: '2024-08-02', c: Klass.Verb, td: '[emotion] @0 is (surprised, amazed) at @1', complex: ['little', 'expect'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/wundr%C4%85', t: 'vont' },
  bore: { d: '2024-09-10', c: Klass.Verb, td: '[emotion] @0 (is bored with, is far from surprised with) @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/bur%C5%8Dn%C4%85', t: 'bur' },
  enjoy: { d: '2024-09-10', c: Klass.Verb, td: '[emotion] @0 enjoys @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/neutan%C4%85', t: 'nevs' },
  trust: { d: '2024-08-02', c: Klass.Verb, td: '[emotion] @0 trusts @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/tr%C5%ABw%C4%81n%C4%85', t: 'tru' },
  doubt: { d: '2024-09-10', c: Klass.Verb, td: '[emotion] @0 doubts @1', complex: ['little', 'trust'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/tw%C4%ABflaz', t: 'tvif' },
  proud: { d: '2024-09-10', c: Klass.Verb, td: '[emotion] @0 is proud of @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/stultaz', t: 'stur' },
  shame: { d: '2024-09-10', c: Klass.Verb, td: '[emotion] @0 is ashamed of @1', complex: ['little', 'proud'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/skam%C5%8D', t: 'skam' },
  shun: { d: '2024-09-27', c: Klass.Verb, td: '[emotion] @0 is (shuneth, avoideth) @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/skeuhaz', t: 'skevk' },
  want: { d: '2024-02-13', c: Klass.Verb, td: '[emotion] @0 wants @1', complex: ['little', 'shun'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/wiljan%C4%85', t: 'viv' },
  love: { d: '2024-09-10', c: Klass.Verb, td: '[emotion] @0 (loveth, is romantically attracted to) @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/gernaz', t: 'jern' },
  randy: { d: '2024-09-12', c: Klass.Verb, o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/gailaz', td: '[emotion] @0 is (randy, aroused, lustful, horny, sexual) for @1', t: 'cev' },
  envy: { d: '2024-09-12', c: Klass.Verb, o: 'https://en.wiktionary.org/wiki/zelo#Latin', td: '[emotion.hate] @0 envieth @1', t: 'zev' },
  pity: { d: '2024-09-10', c: Klass.Verb, o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/mildijaz', td: '[emotion] @0 (pitieth, feel sympathy) @1', t: 'mivt' },

  // facial
  laugh: { d: '2024-02-13', c: Klass.Verb, td: '[facial expression] @0 laugheth', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/hlahjan%C4%85', t: 'klak' },
  smile: { d: '2024-02-13', c: Klass.Verb, td: '[facial expression] @0 smileth', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/sm%C4%ABlijan%C4%85', t: 'smiv' },
  frown: { d: '2024-02-13', c: Klass.Verb, td: '[facial expression] @0 frowneth', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/skelhaz', t: 'skela' },
  weep: { d: '2024-02-13', c: Klass.Verb, td: '[facial expression] @0 weepeth @{1:tear}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/w%C5%8Dpijan%C4%85', t: 'vof' },
  yell: { d: '2024-06-14', c: Klass.Verb, td: '@0 (yelleth, crieth, shouteth) @{1:voice}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/stun%C5%8Dn%C4%85', t: 'stun' },

  // mental
  know: { d: '2024-02-13', c: Klass.Verb, td: '@0 knoweth @{1:fact, idea}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/witan%C4%85', t: 'vis' },
  learn: { d: '2024-08-01', c: Klass.Verb, td: '@0 learneth @{1:idea}', idiom: ['know', 'begin'] },
  forget: { d: '2024-08-01', c: Klass.Verb, td: '@0 forgeteth @{1:idea}', idiom: ['know', 'end'] },

  think: { d: '2024-02-13', c: Klass.Verb, td: '@0 thinketh @{1:idea}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/fin%C3%BEan%C4%85', t: 'fint' },

  sane: { d: '2025-04-07', c: Klass.Verb, td: '@0 is sane', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/ra%C3%BEj%C7%AD', t: 'ras', complex: ['little', 'crazy'] },
  crazy: { d: '2025-04-07', c: Klass.Verb, td: '@0 is (insane, crazy) @{#:number of possible behavior}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/dwalaz', t: 'dvav' },

  worship: { d: '2025-04-07', c: Klass.Verb, td: '@0 worshipeth @{1:god, holy}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/bed%C4%85', t: 'bet' },
  god: { d: '2025-04-07', c: Klass.Verb, td: '@0 is the holiest object', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/t%C4%ABwaz', t: 'tiv', complex: ['done', 'most', 'worship'] },

  unique: { d: '2025-04-07', c: Klass.Verb, td: '@0 is (unique, one of a kind)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/sundraz', t: 'sunt', complex: ['least', 'common'] },
  weird: { d: '2025-04-07', c: Klass.Verb, td: '@0 is (special, rare, odd, weird, strange, irregular, peculiar)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/frama%C3%BEiz', t: 'fram', complex: ['little', 'common'] },
  common: { d: '2025-04-07', c: Klass.Verb, td: '@0 is (general, common, frequent, usual, normal, ordinary, standard, regular) @{#:number of possible behavior}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/mainiz', t: 'majn' },

  // communicate
  name: { d: '2024-07-28', c: Klass.Verb, td: '@0 (meaneth, signifieth, is a name of) @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/nam%C3%B4', t: 'nam' },
  speak: { d: '2024-06-14', c: Klass.Verb, td: '@0 speaketh in @{1:language, protocol}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/sprekan%C4%85', t: 'spek' },
  language: { d: '2024-06-14', c: Klass.Verb, td: '@0 language', idiom: ['done', 'speak'] },
  say: { d: '2024-06-14', c: Klass.Verb, td: '[communicate] @0 (sayeth, encodes) @{1:idea} as @{2:expression}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/sagjan%C4%85', t: 'sak' },
  understand: { d: '2024-06-14', c: Klass.Verb, td: '[communicate] @0 (understandeth, decodeth) @{1:idea} from @{2:expression}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/hlustiz', complex: ['counter', 'say'], t: 'xlust' },
  write: { d: '2024-06-14', c: Klass.Verb, td: '[communicate] @0 writeth @{1:idea} to @{2:expression}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/wr%C4%ABtan%C4%85', t: 'vrit' },
  read: { d: '2024-06-14', c: Klass.Verb, td: '[communicate] @0 readeth @{1:idea} from @{2:expression}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/r%C4%93dan%C4%85', complex: ['counter', 'write'], t: 'ret' },
  ask: { d: '2024-07-28', c: Klass.Verb, td: '[communicate] @0 asketh @{1:question} to @{2:questionee}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/fr%C4%93g%C5%8D', t: 'frex' },
  answer: { d: '2024-07-28', c: Klass.Verb, td: '[communicate] @0 answereth @{1:answer} to @{2:questioner}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/swar%C5%8Dn%C4%85', complex: ['counter', 'ask'], t: 'svar' },

  // performative
  greet: { d: '2024-02-13', c: Klass.Verb, td: '[performative] @0 greeteth @{1:person}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/gr%C4%93tan%C4%85', t: 'cres' },
  forgive: { d: '2024-02-13', c: Klass.Verb, td: '[performative] @0 forgiveth @{1:event}', o: 'https://en.wiktionary.org/wiki/donare#Latin', t: 'don' },
  thank: { d: '2024-02-13', c: Klass.Verb, td: '[performative] @0 thanketh @{1:event}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/%C3%BEankaz', t: 'dank' },
  promise: { d: '2024-08-19', c: Klass.Verb, td: '[performative] @0 (promiseth, guaranteeth, voweth) @{1:event}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/haitan%C4%85', t: 'keta' },
  command: { d: '2024-09-29', c: Klass.Verb, td: '[performative] @0 (command, request, recommend) @{1:must}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/stiurijan%C4%85', t: 'stivr' },

  // culture
  wear: { d: '2025-04-07', c: Klass.Verb, td: '[culture] @0 wear @{1:dress, cloth, armor}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/wazjan%C4%85', t: 'var' },
  decorate: { d: '2025-04-07', c: Klass.Verb, td: '[culture] @0 decorate @1 with @2', complex: ['cause', 'wear'] },
  sing: { d: '2024-02-13', c: Klass.Verb, td: '[culture] @0 (singeth, playeth) @{1:music, song}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/singwan%C4%85', t: 'sink' },
  dance: { d: '2024-02-13', c: Klass.Verb, td: '[culture] @0 danceth @{1:choreography}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-West_Germanic/%C3%BEans%C5%8Dn', t: 'dans' },
  cook: { d: '2025-04-07', c: Klass.Verb, td: '[culture] @0 cooketh @{1:food}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-West_Germanic/kok', t: 'kok' },

  // biochemistry
  fresh: { d: '2024-07-24', c: Klass.Verb, td: '@0 is fresh', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/friskaz', t: 'frix', complex: ['little', 'rot'] },
  rot: { d: '2024-02-13', c: Klass.Verb, td: '@0 is rotten', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/rut%C4%81n%C4%85', t: 'rut' },

  // reproduce
  beget: { d: '2024-08-19', c: Klass.Verb, td: '@0 (beareth, reproducteth, is a parent of) @{1:child}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/burdiz', t: 'burt' },
  male: { d: '2024-08-19', c: Klass.Verb, td: '@0 (is male, potentially produceth sperms)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/gum%C3%B4', t: 'jum' },
  female: { d: '2024-08-19', c: Klass.Verb, o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/w%C4%ABb%C4%85', td: '@0 (is female, potentially produceth ova)', t: 'vif' },

  // familly
  sibling: { d: '2025-02-08', c: Klass.Verb, td: '@0 (is a sibiling of, shareth a parent with) @{1}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/sibjaz', t: 'sif', complex: ['done', 'beget', 'same'] },
  family: { d: '2025-02-08', c: Klass.Verb, td: '@0 belongeth to the same family as @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/kunj%C4%85', t: 'xun' },

  // animal
  animal: { d: '2025-03-31', c: Klass.Verb, td: '[life] @0 is an animal', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/deuz%C4%85', t: 'devr', complex: ['live', 'move'] },
  mammal: { d: '2024-02-13', c: Klass.Verb, td: '[animal] @0 is a mammal', o: 'https://en.wiktionary.org/wiki/mammalis', t: 'mamav', complex: ['animal', 'milk'] },
  human: { d: '2024-02-13', c: Klass.Verb, td: '[mammal] @0 is a human', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/mann-', t: 'man' },
  rat: { d: '2024-02-13', c: Klass.Verb, td: '[mammal] @0 is a (rat, mouse)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/m%C5%ABs', t: 'mus' },
  hare: { d: '2024-02-13', c: Klass.Verb, td: '[mammal] @0 is a (hare, rabbit)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/has%C3%B4', t: 'xas' },
  cat: { d: '2024-02-13', c: Klass.Verb, td: '[mammal] @0 is a cat', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/kattuz', t: 'kat' },
  fox: { d: '2024-02-13', c: Klass.Verb, td: '[mammal] @0 is a (fox, vixen)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/fuhsaz', t: 'fox' },
  dog: { d: '2024-02-13', c: Klass.Verb, td: '[mammal] @0 is a (dog, bitch)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/hundaz', t: 'xuns' },
  wolf: { d: '2024-02-13', c: Klass.Verb, td: '[mammal] @0 is a wolf', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/wulfaz', t: 'vovf' },
  bear: { d: '2024-02-13', c: Klass.Verb, td: '[mammal] @0 is a bear', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/ber%C3%B4', t: 'ber' },
  sheep: { d: '2024-02-13', c: Klass.Verb, td: '[mammal] @0 is a sheep', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/sk%C4%93p%C4%85', t: 'skef' },
  goat: { d: '2024-02-13', c: Klass.Verb, td: '[mammal] @0 is a goat', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/gaits', t: 'cajs' },
  deer: { d: '2024-02-13', c: Klass.Verb, td: '[mammal] @0 is a deer', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/raih%C3%B4', t: 'rajk' },
  horse: { d: '2024-02-13', c: Klass.Verb, td: '[mammal] @0 is a (horse, stallion, mare)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/hruss%C4%85', t: 'krus' },
  cow: { d: '2024-02-13', c: Klass.Verb, td: '[mammal] @0 is a cow', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/k%C5%ABz', t: 'kur' },
  pig: { d: '2024-02-13', c: Klass.Verb, td: '[mammal] @0 is a pig', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/sw%C4%ABn%C4%85', t: 'svin' },

  reptile: { d: '2024-02-13', c: Klass.Verb, td: '[animal] @0 is a reptile', complex: ['animal', 'crawl'], o: 'https://en.wiktionary.org/wiki/reptilis#Latin', t: 'reftiv' },
  snake: { d: '2024-07-15', c: Klass.Verb, td: '[reptile] @0 is a snake', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/snegan%C4%85', t: 'snek' },

  bird: { d: '2024-02-13', c: Klass.Verb, td: '[animal] @0 is a bird', complex: ['animal', 'fly'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/fuglaz', t: 'fovk' },
  crow: { d: '2024-07-15', c: Klass.Verb, td: '[bird] @0 is a (crow, raven)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/hrabnaz', t: 'raf' },

  amphibia: { d: '2024-02-13', c: Klass.Verb, td: '[animal] @0 is an amphibia', complex: ['animal', 'wet'], o: 'https://en.wiktionary.org/wiki/amphibius#Latin', t: 'hanfif' },
  frog: { d: '2024-07-15', c: Klass.Verb, td: '[amphibia] @0 is a frog', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/fruskaz', t: 'frux' },

  fish: { d: '2024-02-13', c: Klass.Verb, td: '[animal] @0 is a fish', complex: ['animal', 'swim'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/fiskaz', t: 'fix' },

  // plant
  plant: { d: '2024-08-19', c: Klass.Verb, td: '@0 is a plant', complex: ['live', 'stop'], o: 'https://en.wiktionary.org/wiki/planta#Latin', t: 'plan' },
  tree: { d: '2024-08-19', c: Klass.Verb, td: '[plant] @0 is a tree', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/bagmaz', t: 'bavm' },
  grass: { d: '2024-08-19', c: Klass.Verb, td: '[plant] @0 is a grass', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/bagmaz', t: 'cras' },

  // body
  body: { d: '2024-02-13', c: Klass.Verb, td: '@0 is a body', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/hrefaz', t: 'kref' },
  bone: { d: '2024-02-13', c: Klass.Verb, td: '[body part] @0 is a bone', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/bain%C4%85', t: 'bajn' },
  spine: { d: '2025-02-06', c: Klass.Verb, td: '[body part] @0 is a spine', o: 'https://en.wiktionary.org/wiki/spina#Latin', t: 'spin' },
  flesh: { d: '2024-02-13', c: Klass.Verb, td: '[body part] @0 is a (flesh, meat, muscle)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/flaiski', t: 'flajs' },
  fat: { d: '2024-09-16', c: Klass.Verb, td: '[body part] @0 is a fat', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/faitaz', t: 'fajs' },
  skin: { d: '2024-02-13', c: Klass.Verb, td: '[body part] @0 is a (skin, peel)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/skin%C3%BE%C4%85', t: 'skent' },
  head: { d: '2024-02-13', c: Klass.Verb, td: '[body part] @0 is a head of @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/haubud%C4%85', t: 'kavt' },
  neck: { d: '2024-02-13', c: Klass.Verb, td: '[body part] @0 is a neck of @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/hnakk%C3%B4', t: 'knak' },
  shoulder: { d: '2024-02-13', c: Klass.Verb, td: '[body part] @0 is a (shoulder, buttock) of @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-West_Germanic/skuldru', t: 'skut' },

  limb: { d: '2024-02-13', c: Klass.Verb, td: '[body part] @0 is a (limb, leg, arm, branch) of @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/limuz', t: 'lim' },
  arm: { d: '2024-11-24', c: Klass.Verb, td: '[body part] @0 is an arm', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/armaz', t: 'harm' },
  leg: { d: '2024-11-24', c: Klass.Verb, td: '[body part] @0 is a leg', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/lagjaz', t: 'lax' },

  //extremity: { d: '2024-02-13', c: Klass.Verb, t: 'and', o: 'https://en.wiktionary.org/wiki/reconstruction:proto-germanic/handuz', td: '[body part] @0 is a (extremity, hand, foot) of @1' },
  foot: { d: '2024-11-24', c: Klass.Verb, td: '[body part] @0 is a foot', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/f%C5%8Dts', t: 'fos' },
  hand: { d: '2024-11-24', c: Klass.Verb, td: '[body part] @0 is a hand', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/handuz', t: 'kant' },
  trunk: { d: '2024-02-13', c: Klass.Verb, td: '[body part] @0 is a (trunk, torso, stem)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/stamniz', t: 'stam' },
  breast: { d: '2024-09-22', c: Klass.Verb, td: '[body part] @0 is a (chest, breast)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/brusts', t: 'brus' },
  belly: { d: '2024-09-22', c: Klass.Verb, td: '[body part] @0 is a belly', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/kwe%C3%BEuz', t: 'kvet' },
  tail: { d: '2024-02-13', c: Klass.Verb, td: '[body part] @0 is a tail', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/stertaz', t: 'stert' },
  hair: { d: '2024-02-13', c: Klass.Verb, td: '[body part] @0 is a (hair, fur)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/hazdaz', t: 'kart' },
  horn: { d: '2024-02-13', c: Klass.Verb, td: '[body part] @0 is a horn', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/hurn%C4%85', t: 'xurn' },
  tooth: { d: '2024-02-13', c: Klass.Verb, td: '[body part] @0 is a (tooth, fang)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/tan%C3%BEs', t: 'tant' },
  nail: { d: '2024-02-13', c: Klass.Verb, td: '[body part] @0 is a (nail, claw)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/naglaz', t: 'nev' },

  eye: { d: '2024-02-13', c: Klass.Verb, td: '[face part] @0 is (an eye, a visual sensor)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Uralic/%C5%9Bilm%C3%A4', t: 'xivm' },
  ear: { d: '2024-02-13', c: Klass.Verb, td: '[face part] @0 is (an ear, an audial sensor)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/aus%C3%B4', t: 'havs' },
  nose: { d: '2024-02-13', c: Klass.Verb, td: '[face part] @0 is a nose', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/nas%C5%8D', t: 'nas' },
  mouth: { d: '2024-02-13', c: Klass.Verb, td: '[face part] @0 is a mouth', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/mun%C3%BEaz', t: 'munt' },
  lip: { d: '2024-02-13', c: Klass.Verb, td: '[face part] @0 is a lip', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/lep%C3%B4', t: 'lef' },
  tongue: { d: '2024-02-13', c: Klass.Verb, td: '[face part] @0 is a tongue', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/tung%C7%AD', t: 'tunx' },

  viscera: { d: '2024-02-13', c: Klass.Verb, td: '[body part] @0 is a (viscera, inner organ)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/%C3%BEarmaz', t: 'darm' },
  lung: { d: '2024-09-02', c: Klass.Verb, td: '[viscera] @0 is a lung', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/lung%C3%B4', t: 'lunk' },
  heart: { d: '2024-09-02', c: Klass.Verb, td: '[viscera] @0 is a heart of @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/hert%C3%B4', t: 'xert' },
  maw: { d: '2024-09-02', c: Klass.Verb, td: '[viscera] @0 is a (maw, stomach) of @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/mag%C3%B4', t: 'mak' },
  liver: { d: '2024-09-02', c: Klass.Verb, td: '[viscera] @0 is a liver of @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/libr%C5%8D', t: 'ljur' },
  womb: { d: '2024-09-22', c: Klass.Verb, td: '[genitalia] @0 is a (prostate, womb) of @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/wamb%C5%8D', t: 'vanf' },
  vagina: { d: '2024-09-22', c: Klass.Verb, td: '[genitalia] @0 is a vagina of @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/fu%C3%BEiz', t: 'fot' },
  penis: { d: '2024-09-22', c: Klass.Verb, td: '[genitalia] @0 is a (penis, clitoris) of @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-West_Germanic/pinti', t: 'pint' },

  egg: { d: '2024-09-16', c: Klass.Verb, td: '@0 is an egg', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/ajj%C4%85', t: 'haj' },
  blood: { d: '2024-07-29', c: Klass.Verb, td: '[body fluid] @0 is blood', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/bl%C5%8D%C3%BE%C4%85', t: 'blot' },
  milk: { d: '2024-08-31', c: Klass.Verb, td: '[body fluid] @0 is milk', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/meluks', t: 'muk' },
  lymph: { d: '2024-08-31', c: Klass.Verb, td: '[body fluid] @0 is lymph', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/dreuzaz', t: 'frevr' },

  flower: { d: '2024-09-02', c: Klass.Verb, td: '[body.plant] @0 is a (flower, bloom, blossom)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/bl%C5%8Dan%C4%85', t: 'blov' },
  leaf: { d: '2024-09-02', c: Klass.Verb, td: '[body.plant] @0 is a leaf', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/laub%C4%85', t: 'lavf' },
  root: { d: '2024-09-02', c: Klass.Verb, td: '[body.plant] @0 is a root', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/wr%C5%8Dts', t: 'vrot' },

  // civilization
  person: { d: '2024-02-13', c: Klass.Verb, td: '@0 is (a person, an individual, a citizen)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/liudiz', t: 'ljut' },
  nation: { d: '2024-08-24', c: Klass.Verb, td: '@0 is a country', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/mark%C5%8D', t: 'marx' },
  rule: { d: '2024-07-28', c: Klass.Verb, td: '@{0:person, law} (ruleth, ordereth, dictateth) @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/waldan%C4%85', t: 'vavt' },
  law: { d: '2025-04-06', c: Klass.Verb, td: '@0 is a law', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/lag%C4%85', t: 'lak' },
  free: { d: '2025-04-02', c: Klass.Verb, td: '@0 is free', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/frijaz', t: 'fri' },
  fair: { d: '2025-04-06', c: Klass.Verb, td: '@0 is (right, ethical, fair)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/fagraz', t: 'fajr' },
  right: { d: '2025-04-06', c: Klass.Verb, td: '@0 is a human right', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/rehtaz', t: 'rext' },

  humble: { d: '2024-10-01', c: Klass.Verb, td: '@0 is humble', complex: ['little', 'noble'], o: 'https://en.wiktionary.org/wiki/mj%C3%BAkr#Old_Norse', t: 'mjuk' },
  noble: { d: '2024-10-01', c: Klass.Verb, td: '@0 is noble', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/a%C3%BEal%C4%85', t: 'hat' },

  work: { d: '2024-02-13', c: Klass.Verb, td: '@0 worketh @{1:operation}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/werk%C4%85', t: 'verx' },
  dwell: { d: '2024-12-20', c: Klass.Verb, td: '@0 dwelleth in @{1:house}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/b%C5%ABan%C4%85', t: 'bovn' },
  use: { d: '2024-06-14', c: Klass.Verb, td: '@0 useth @{1:tool} for @{2:purpose}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/nut%C5%8D', t: 'nut' },
  help: { d: '2024-06-18', c: Klass.Verb, td: '@0 helpeth @{1:event}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/helpan%C4%85', t: 'xevf' },
  harm: { d: '2024-08-19', c: Klass.Verb, td: '@0 (harmeth, hurteth, damageth) @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/ska%C3%BE%C3%B4', t: 'skat' },

  wont: { d: '2024-09-01', c: Klass.Verb, td: '@0 is used to @{1:custom, habit, routine, usual, regular}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/wun%C4%81n%C4%85', t: 'von' },
  lead: { d: '2024-09-01', c: Klass.Verb, t: 'drak', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/dragan%C4%85', td: '@0 (leadeth, guideth) @{1:follower}' },

  stab: { d: '2024-11-24', c: Klass.Verb, td: '@0 (stabeth, pierceth) @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/stikan%C4%85', t: 'stik' },
  cut: { d: '2024-11-21', c: Klass.Verb, td: '@0 cuteth @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/sn%C4%AB%C3%BEan%C4%85', t: 'snit' },
  rub: { d: '2025-04-07', c: Klass.Verb, td: '@0 (rubeth, scratcheth) @1', o: 'https://en.wiktionary.org/wiki/kratzen', t: 'krat' },

  // human action
  pick: { d: '2024-09-09', c: Klass.Verb, td: '@0 (picketh, hunteth, gathereth, collects) @{1:harvest, prey}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/jakk%C5%8Dn%C4%85', t: 'jak' },

  kiss: { d: '2024-11-23', c: Klass.Verb, complex: ['touch', 'lip'], td: '[body interaction] @0 kisseth @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/kussaz', t: 'kus' },
  caress: { d: '2024-11-23', c: Klass.Verb, td: '[body interaction] @0 carresseth @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/streukan%C4%85', t: 'stivk' },
  hug: { d: '2024-11-23', c: Klass.Verb, td: '[body interaction] @0 hugeth @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/fa%C3%BEmaz', t: 'fam' },
  hit: { d: '2024-11-23', c: Klass.Verb, td: '[body interaction] @0 (hiteth, kicketh, puncheth) @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/hittijan%C4%85', t: 'xit' },
  kick: { d: '2024-11-23', c: Klass.Verb, td: '[body interaction] @0 kicketh @1', complex: ['hit', 'foot'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/spurnan%C4%85', t: 'spurn' },
  punch: { d: '2024-11-23', c: Klass.Verb, td: '[body interaction] @0 puncheth @1', complex: ['hit', 'hand'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/slahan%C4%85', t: 'slak' },

  rope: { d: '2025-02-08', c: Klass.Verb, td: '[artifact] @0 is a (rope, cord, string)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/raipaz', t: 'rajf' },
  knife: { d: '2024-07-28', c: Klass.Verb, td: '[artifact] @{0:sword, knife, blade} cuteth @1', complex: ['done', 'use', 'cut'], o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/sahs%C4%85', t: 'saks' },
  scissor: { d: '2024-07-28', c: Klass.Verb, td: '[artifact] @0 is a pair of scissors', complex: ['knife', 'two'] },
  spear: { d: '2024-07-28', c: Klass.Verb, td: '[artifact] @{0:spear, pin} stingeth @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/speru', t: 'sper' },
  rod: { d: '2024-07-28', c: Klass.Verb, td: '[artifact] @{0:rod, stuff, wand, club} supporteth @1', o: 'https://en.wiktionary.org/wiki/rod', t: 'rot' },
  dish: { d: '2024-12-23', c: Klass.Verb, td: '[artifact] @{0:dish, bowl, cup, container} containeth @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/hnappaz', t: 'knaf' },
  fork: { d: '2024-12-23', c: Klass.Verb, td: '[artifact] @{0:fork} stingeth @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Celtic/gabl%C4%81', t: 'caf' },
  spoon: { d: '2024-12-23', c: Klass.Verb, td: '[artifact] @{0:spoon, scoop} scoopeth @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/sp%C4%93nuz', t: 'spen' },
  tong: { d: '2024-12-23', c: Klass.Verb, td: '[artifact] @{0:tong, plier, chopstick} grabeth @1', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/tang%C5%8D', t: 'tank' },
  money: { d: '2024-08-25', c: Klass.Verb, td: '[artifact] @0 is (money, coin, bill)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/fehu', t: 'fex' },
  ship: { d: '2024-10-05', c: Klass.Verb, td: '[artifact] @0 is a (ship, boat)', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/baitaz', t: 'bajt' },
  bridge: { d: '2025-02-08', c: Klass.Verb, td: '@0 (is a bridge between, connects) @{1}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/brugj%C7%AD', t: 'bruk' },

  // misc
  knot: { d: '2024-12-23', c: Klass.Verb, td: '@0 is a (knot, tangle, tie, bond) of @{1}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/knutt%C3%B4', t: 'knut' },

  idle: { d: '2025-04-09', c: Klass.Verb, td: '@0 is idle', complex: ['little', 'busy'] },
  busy: { d: '2025-04-09', c: Klass.Verb, td: '@0 is busy of @{1}', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-West_Germanic/bis%C5%8Dn', t: 'bis' },

  sentence: { d: '2024-10-05', c: Klass.Verb, td: '[grammar] @0 is a sentence', o: 'https://en.wiktionary.org/wiki/%CF%86%CF%81%CE%AC%CF%83%CE%B9%CF%82#Ancient_Greek', t: 'fras' },
  clause: { d: '2024-10-05', c: Klass.Verb, td: '[grammar] @0 is a clause', o: 'https://en.wiktionary.org/wiki/clauso#Latin', t: 'klavs' },
  word: { d: '2024-10-05', c: Klass.Verb, td: '[grammar] @0 is a word', o: 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/wurd%C4%85', t: 'vort' },

  verb: { d: '2024-10-05', c: Klass.Verb, td: '[grammar] @0 is a verb', complex: ['word', 'trunk'], o: 'https://en.wiktionary.org/wiki/verbo#Latin', t: 'verf' },
  case: { d: '2024-10-05', c: Klass.Verb, td: '[grammar] @0 is an case', o: 'https://en.wiktionary.org/wiki/casu#Latin', t: 'kas' },
  nominative: { d: '2024-12-23', c: Klass.Verb, td: '[grammar] @0 is nominative', complex: ['arm', 'zero', '_ord', 'verb'] },
  accusative: { d: '2024-12-23', c: Klass.Verb, td: '[grammar] @0 is accusative', complex: ['arm', 'one', '_ord', 'verb'] },
  dative: { d: '2024-12-23', c: Klass.Verb, td: '[grammar] @0 is dative', complex: ['arm', 'two', '_ord', 'verb'] },

  // country
  ...Object.fromEntries(
    [
      ['us', 'the united states', '2024-08-25', 'zamrik', 'https://en.wiktionary.org/wiki/America#Latin'],
      ['cn', 'china', '2024-08-25', 'zjuncok', 'https://en.wiktionary.org/wiki/%E4%B8%AD%E5%9C%8B'],
      ['de', 'germany', '2024-08-25', 'devdisk', 'https://en.wiktionary.org/wiki/Reconstruction:Proto-West_Germanic/%C3%BEiudisk'],
      ['jp', 'japan', '2024-08-25', 'nitfon', 'https://en.wiktionary.org/wiki/%E6%97%A5%E6%9C%AC'],
      ['in', 'india', '2024-11-22', 'varat', 'https://en.wiktionary.org/wiki/%E0%A4%AD%E0%A4%BE%E0%A4%B0%E0%A4%A4#Sanskrit'],
      ['gb', 'the united kingdom', '2024-08-25', 'britan', 'https://en.wiktionary.org/wiki/Britannia#Latin'],
      ['fr', 'france', '2024-08-25', 'frank', 'https://en.wiktionary.org/wiki/Francia#Latin'],
      ['it', 'italy', '2024-11-22', 'zitali', 'https://en.wiktionary.org/wiki/Italia#Latin'],
      ['ca', 'canada', '2024-11-22', 'kanat', 'https://en.wiktionary.org/wiki/kanata#Laurentian'],
      ['br', 'brazil', '2024-11-22', 'brasil', 'https://en.wiktionary.org/wiki/Brasil#Portuguese'],
      ['ru', 'russia', '2025-02-08', 'rosi', 'https://en.wiktionary.org/wiki/Reconstruction:Proto-Finnic/roocci'],
      ['tw', 'taiwan', '2025-02-28'],
    ].map(([iso, name, date]) => [
      `nation_${iso.toLowerCase()}`,
      {
        d: date,
        c: Klass.Verb,
        td: `[country] @0 is ${name} (${iso})`,
        o: 'ISO 3166-1 alpha-2',
        idiom: ['nation', 'called', '$' + fromAcronym(iso)],
      },
    ])
  ),

  // continent
  ...Object.fromEntries(
    [
      ['as', '2025-02-28', 'asia', 'zasja'],
      ['eu', '2025-02-28', 'europe', 'zevrof'],
      ['af', '2025-02-28', 'africa', 'zafrik'],
      ['na', '2025-02-28', 'north america', ['zamrik', 'north']],
      ['sa', '2025-02-28', 'south america', ['zamrik', 'south']],
      ['oc', '2025-02-28', 'oceania', 'zokjan'],
      ['an', '2025-02-28', 'antarctica', ''],
    ].map(([iso, d, name]: [string, string, string]) => [
      `continent_${iso.toLowerCase()}`,
      {
        d,
        c: Klass.Verb,
        td: `[continent] @0 is ${name} (${iso})`,
        o: 'https://datahub.io/core/continent-codes',
        idiom: ['land', 'called', '$' + fromAcronym(iso)],
      },
    ])
  ),

  // language
  ...Object.fromEntries(
    [
      ['en', '2024-08-31', 'english'],
      ['cmn', '2024-08-31', 'mandarin'],
      ['hi', '2024-08-31', 'hindi'],
      ['es', '2024-08-31', 'spanish'],
      ['ar', '2024-08-31', 'arabic'],
      ['fr', '2024-08-31', 'french'],
      ['bn', '2025-04-01', 'bengali'],
      ['pt', '2025-04-01', 'portuguese'],
      ['ru', '2024-08-31', 'russian'],
      ['id', '2025-04-01', 'indonesian'],
      ['ur', '2025-04-01', 'urdu'],
      ['de', '2024-08-31', 'german'],
      ['ja', '2024-08-31', 'japanese'],
      ['pcm', '2025-04-02', 'nigerian pidgin'],
    ].map(([iso, d, adjective]) => [
      `language_${iso}`,
      {
        d,
        c: Klass.Verb,
        idiom: ['done', 'speak', 'called', '$' + fromAcronym(iso)],
        td: `[language] @0 is ${adjective} language (${iso})`,
      },
    ])
  ),
} as {
  [key: string]: { d: string; c: Klass; td: string; o?: string; t?: string; complex?: string[]; idiom?: string[] };
};
