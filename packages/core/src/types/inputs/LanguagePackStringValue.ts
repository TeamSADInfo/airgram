/** Represents the value of a string in a language pack */
export type LanguagePackStringValueInputUnion = LanguagePackStringValueOrdinaryInput
  | LanguagePackStringValuePluralizedInput
  | LanguagePackStringValueDeletedInput

/** An ordinary language pack string */
export interface LanguagePackStringValueOrdinaryInput {
  _: 'languagePackStringValueOrdinary'
  /** String value */
  value?: string
}

/**
 * A language pack string which has different forms based on the number of some object
 * it mentions. See https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
 * for more info
 */
export interface LanguagePackStringValuePluralizedInput {
  _: 'languagePackStringValuePluralized'
  /** Value for zero objects */
  zeroValue?: string
  /** Value for one object */
  oneValue?: string
  /** Value for two objects */
  twoValue?: string
  /** Value for few objects */
  fewValue?: string
  /** Value for many objects */
  manyValue?: string
  /** Default value */
  otherValue?: string
}

/**
 * A deleted language pack string, the value must be taken from the built-in English
 * language pack
 */
export interface LanguagePackStringValueDeletedInput {
  _: 'languagePackStringValueDeleted'
}
