export const viewStyleConstants = {
  w: 'width',
  h: 'height',
  align: 'alignItems',
  justify: 'justifyContent',
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
  mb: 'marginBottom',
  direction: 'flexDirection',
  bg: 'backgroundColor',
  radius: 'borderRadius'
}

export interface IViewStyleConstants {
  w?: string
  h?: string
  bg?: string
  radius?: string
  direction?: 'row' | 'column'
  align?: 'center' | 'flex-end' | 'flex-start' | 'baseline' | 'stretch'
  justify?:
    | 'space-between'
    | 'flex-end'
    | 'flex-start'
    | 'center'
    | 'space-around'
    | 'space-evenly'
  p?: string
  px?: string
  py?: string
  pl?: string
  pr?: string
  pb?: string
  pt?: string
  m?: string
  my?: string
  mx?: string
  ml?: string
  mr?: string
  mt?: string
  mb?: string
}
