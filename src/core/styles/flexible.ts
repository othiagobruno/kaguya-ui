export const flexible = {
  align: 'alignItems',
  justify: 'justifyContent',
  jus: 'justifyContent',
  direction: 'flexDirection',
  dir: 'flexDirection',
  display: 'display'
}

export interface IFlexibleStyle {
  align?: 'center' | 'flex-end' | 'flex-start' | 'baseline' | 'stretch'
  justify?:
    | 'space-between'
    | 'flex-end'
    | 'flex-start'
    | 'center'
    | 'space-around'
    | 'space-evenly'

  jus?:
    | 'space-between'
    | 'flex-end'
    | 'flex-start'
    | 'center'
    | 'space-around'
    | 'space-evenly'

  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  dir?: 'row' | 'column' | 'row-reverse' | 'column-reverse'

  display?: 'flex' | 'none' | 'block' | 'inline-block'
}
