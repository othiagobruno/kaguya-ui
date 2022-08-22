/* eslint-disable react-hooks/rules-of-hooks */
import { IViewStyleConstants, viewStyleConstants } from './box_style'
import type { CSSProperties } from 'react'
import { useConverToColor } from './utils/convertToColor'

type CssStyle = CSSProperties

export const useMakeStyle = (props: any) => {
  const styles: any = {}
  const listColors: any[] = ['bg', 'color', 'backgroundColor', 'borderColor']

  for (const keys in props) {
    const value = props[keys as keyof CssStyle]
    const key = viewStyleConstants[
      keys as keyof IViewStyleConstants
    ] as keyof CssStyle

    if (key) {
      if (listColors.includes(keys)) {
        styles[key] = useConverToColor(value)
      } else styles[key] = value
    } else {
      if (listColors.includes(keys)) {
        styles[keys as keyof CssStyle] = useConverToColor(value)
      } else styles[keys as keyof CssStyle] = value
    }
  }

  return styles as CssStyle
}
