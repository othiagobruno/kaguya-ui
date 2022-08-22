import { background, IBackgroundStyle } from './styles/background'
import { border, IBorderStyle } from './styles/border'
import { flexible, IFlexibleStyle } from './styles/flexible'
import { ISpacingStyle, spacings } from './styles/spacing'
import { ITextStyle, text } from './styles/text'

export const StyleCompose = {
  ...text,
  ...background,
  ...border,
  ...spacings,
  ...flexible,

  w: 'width',
  h: 'height',
  maxW: 'maxWidth',
  minW: 'minWidth',
  maxH: 'maxHeight',
  minH: 'minHeight'
}

export interface IStyleCompose
  extends ITextStyle,
    IBackgroundStyle,
    IBorderStyle,
    ISpacingStyle,
    IFlexibleStyle {
  w?: string
  h?: string
  maxW?: string
  minW?: string
  maxH?: string
  minH?: string
}
