import { useTheme } from '../../providers/theme.context'

export const useConverToColor = (colorString: string) => {
  const [key, color] = colorString?.split('.')

  const { theme } = useTheme()
  const colors = theme.colors as any

  if (color && typeof colors[key][color] === 'string') {
    return colors[key][color]
  } else if (typeof colors[key] === 'string') {
    return colors[key]
  }

  return colorString ?? colors.primary.main
}
