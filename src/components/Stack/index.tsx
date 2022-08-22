import React from 'react'
import { useViewStyles } from '../../core/make_style'
import type { StackProps } from '../../interfaces/types'

const Stack: React.FC<StackProps> = ({ children, ...props }) => {
  const styles = useViewStyles(props)

  return <div style={{ padding: 20, ...styles }}>{children}</div>
}

export default Stack
