export const text = {
  textAlign: 'textAlign',
  fontSize: 'fontSize',
  fontWeight: 'fontWeight',
  lineHeight: 'lineHeight',
  textTransform: 'textTransform',
  color: 'color',
  vertialAlign: 'verticalAlign',
  textDecoration: 'textDecoration',
  textDecorationLine: 'textDecorationLine',
  textDecorationStyle: 'textDecorationStyle',
  textDecorationColor: 'textDecorationColor',
  latterSpacing: 'latterSpacing',
  wordSpacing: 'wordSpacing',
  textShadow: 'textShadow',
  textOverflow: 'textOverflow',
  whiteSpace: 'whiteSpace',
  fontFamily: 'fontFamily',
  fontStyle: 'fontStyle',
  fontVariant: 'fontVariant'
}

export interface ITextStyle {
  textAlign?: 'center' | 'justify' | 'left' | 'right'
  fontSize?: string
  fontWeight?:
    | 'bold'
    | 'normal'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
  lineHeight?: string
  textTransform?: 'capitalize' | 'lowercase' | 'uppercase' | 'none'
  color?: string
  vertialAlign?:
    | 'baseline'
    | 'sub'
    | 'super'
    | 'text-top'
    | 'text-bottom'
    | 'middle'
  textDecoration?: string
  textDecorationColor?: string
  textDecorationStyle?: 'dashed' | 'dotted' | 'solid' | 'wavy'

  latterSpacing?: string
  wordSpacing?: string
  textShadow?: string
  textOverflow?:
    | 'clip'
    | 'ellipsis'
    | 'inherit'
    | 'initial'
    | 'unset'
    | 'visible'
  whiteSpace?:
    | 'normal'
    | 'nowrap'
    | 'pre'
    | 'pre-line'
    | 'pre-wrap'
    | 'initial'
    | 'inherit'
    | 'unset'

  fontFamily?: string
  fontStyle?: 'normal' | 'italic' | 'oblique' | 'initial' | 'inherit' | 'unset'
  fontVariant?: 'normal' | 'small-caps' | 'initial' | 'inherit' | 'unset'
}
