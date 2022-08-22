import { IViewStyleConstants } from '../core/box_style'
import { ITextStylesConstants } from '../core/text_style'

export interface BoxProps extends ITextStylesConstants {
  as?: any
  children?: React.ReactNode
}

export interface StackProps extends IViewStyleConstants {
  children?: React.ReactNode
}

export interface CenterProps extends IViewStyleConstants {
  children?: React.ReactNode
}

export interface TextProps extends ITextStylesConstants {}

export interface TitleProps extends ITextStylesConstants {}

export interface ParagraphProps extends ITextStylesConstants {}
