/**
 * https://stackoverflow.com/questions/27194359/javascript-pluralize-an-english-string
 */
const uncountable: string[] = [
  'sheep',
  'fish',
  'deer',
  'moose',
  'series',
  'species',
  'money',
  'rice',
  'information',
  'equipment',
  'bison',
  'cod',
  'offspring',
  'pike',
  'salmon',
  'shrimp',
  'swine',
  'trout',
  'aircraft',
  'hovercraft',
  'spacecraft',
  'sugar',
  'tuna',
  'you',
  'wood',
];

const irregular: { [key: string]: string } = {
  move: 'moves',
  foot: 'feet',
  goose: 'geese',
  sex: 'sexes',
  child: 'children',
  man: 'men',
  tooth: 'teeth',
  person: 'people',
};

const plural: { [key: string]: string } = {
  '(quiz)$': '$1zes',
  '^(ox)$': '$1en',
  '([m|l])ouse$': '$1ice',
  '(matr|vert|ind)ix|ex$': '$1ices',
  '(x|ch|ss|sh)$': '$1es',
  '([^aeiouy]|qu)y$': '$1ies',
  '(hive)$': '$1s',
  '(?:([^f])fe|([lr])f)$': '$1$2ves',
  '(shea|lea|loa|thie)f$': '$1ves',
  sis$: 'ses',
  '([ti])um$': '$1a',
  '(tomat|potat|ech|her|vet)o$': '$1oes',
  '(bu)s$': '$1ses',
  '(alias)$': '$1es',
  '(octop)us$': '$1i',
  '(ax|test)is$': '$1es',
  '(us)$': '$1es',
  '([^s]+)$': '$1s',
};

export const pluralize = (word: string, count: number): string => {
  if (count < 2) {
    return word;
  }

  // 1. Save some time in the case that singular and plural are the same
  if (uncountable.includes(word.toLowerCase())) {
    return word;
  }

  // 2. Check for irregular forms
  const irregularKeys = Object.keys(irregular);
  const irregularIndex = irregularKeys.findIndex((irregularKey) => new RegExp(`${irregularKey}$`, 'i').test(word));

  if (irregularIndex !== -1) {
    const targetIrregularKey = irregularKeys[irregularIndex];
    const pattern = new RegExp(`${targetIrregularKey}$`, 'i');
    const replace = irregular[targetIrregularKey];

    return word.replace(pattern, replace);
  }

  // 3. Check for matches using regular expressions
  const pluralKeys = Object.keys(plural);
  const pluralIndex = pluralKeys.findIndex((pluralKey) => new RegExp(pluralKey, 'i').test(word));

  if (pluralIndex !== -1) {
    const targetPluralKey = pluralKeys[pluralIndex];
    const pattern = new RegExp(targetPluralKey, 'i');

    return word.replace(pattern, plural[targetPluralKey]);
  }

  return word;
};
