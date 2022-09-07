import { forwardRef, InputHTMLAttributes } from 'react'

import * as S from './style'

type Props = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, Props>(({ ...rest }, ref) => (
  <S.Input {...rest} ref={ref} />
))
