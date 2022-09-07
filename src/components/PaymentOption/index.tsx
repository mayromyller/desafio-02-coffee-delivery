import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'

import * as S from './style'

type PaymentOptionProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  text: string
}

export const PaymentOption = forwardRef<HTMLInputElement, PaymentOptionProps>(
  ({ id, icon, text, ...rest }, ref) => {
    return (
      <S.Container>
        <label htmlFor={id}>
          <input
            type="radio"
            id={id}
            name="paymentMethod"
            ref={ref}
            {...rest}
          />
          <S.OptionPay>
            {icon}
            {text}
          </S.OptionPay>
        </label>
      </S.Container>
    )
  }
)
