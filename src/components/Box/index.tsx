import React from 'react'
import type { BoxProps } from '../../interfaces/types'
import { useMakeStyle } from '../../core/make_style'

const Box: React.FC<BoxProps> = ({ children, as, ...props }) => {
  const styles = useMakeStyle(props)
  const NewBox = React.cloneElement(as ?? <div />, { style: styles }, children)

  return NewBox
}

export default Box
