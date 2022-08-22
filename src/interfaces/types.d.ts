import { IStyleCompose } from '../core/box_style'

export interface BoxProps extends IStyleCompose {
  as?: any
  children?: React.ReactNode
}

export interface StackProps extends IStyleCompose {
  children?: React.ReactNode
}
