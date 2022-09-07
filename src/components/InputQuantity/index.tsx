import { useState } from 'react'

import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

import * as S from './style'

type Props = {
  quantity: number
  onIncrement: () => void
  onDecrement: () => void
}

export function InputQuantity({ quantity, onIncrement, onDecrement }: Props) {
  function handleIncrement() {
    onIncrement()
  }

  function handleDecrement() {
    onDecrement()
  }

  return (
    <>
      <S.ButtonContainer>
        <button disabled={quantity <= 1} onClick={handleDecrement}>
          <Minus size={15} weight="bold" />
        </button>
        <S.InputQuantity type="number" readOnly value={quantity} />
        <button onClick={handleIncrement}>
          <Plus size={15} weight="bold" />
        </button>
      </S.ButtonContainer>
    </>
  )
}
