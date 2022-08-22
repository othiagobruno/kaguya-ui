export const background = {
  bg: 'background',
  bgColor: 'backgroundColor',
  bgImage: 'backgroundImage',
  bgRepeat: 'backgroundRepeat',
  bgPosition: 'backgroundPosition'
}

export interface IBackgroundStyle {
  bg?: string
  bgColor?: string
  bgImage?: string
  bgRepeat?: 'repeat-x' | 'repeat-y' | 'repeat' | 'no-repeat'
  bgPosition?: string
}
