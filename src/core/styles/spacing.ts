export const spacings = {
  p: 'padding',
  px: 'paddingHorizontal',
  py: 'paddingVertical',
  pl: 'paddingLeft',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pt: 'paddingTop',

  m: 'margin',
  my: 'marginVertical',
  mx: 'marginHorizontal',
  ml: 'marginLeft',
  mr: 'marginRight',
  mt: 'marginTop',
  mb: 'marginBottom'
}

export interface ISpacingStyle {
  p?: string
  px?: string
  py?: string
  pl?: string
  pr?: string
  pt?: string
  pb?: string

  m?: string
  my?: string
  mx?: string
  ml?: string
  mr?: string
  mt?: string
  mb?: string
}
