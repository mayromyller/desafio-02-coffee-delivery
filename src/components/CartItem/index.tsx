import { Trash } from 'phosphor-react'

import { CartItem, useCart } from '../../contexts/CartContext'

import { Text } from '../../styles/themes/typography'

import { InputQuantity } from '../InputQuantity'

import { formatPrice } from '../../utils/formatPrice'

import * as S from './style'

type CarItemProps = {
  coffee: CartItem
}

export function CarItem({ coffee }: CarItemProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  function increment() {
    changeCartItemQuantity(coffee.id, 'increment')
  }

  function decrement() {
    changeCartItemQuantity(coffee.id, 'decrement')
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  const totalPriceForItem = coffee.price * coffee.quantity
  const formattedPrice = formatPrice(totalPriceForItem)

  return (
    <S.Item key={coffee.id}>
      <div>
        <img src={coffee.image} alt={coffee.description} />

        <S.Details>
          <Text>{coffee.name}</Text>
          <S.Actions>
            <InputQuantity
              quantity={coffee.quantity}
              onDecrement={decrement}
              onIncrement={increment}
            />

            <S.DeleteButton onClick={handleRemove}>
              <Trash size={15} />
              Remover
            </S.DeleteButton>
          </S.Actions>
        </S.Details>
      </div>

      <S.Price>R$ {formattedPrice}</S.Price>
    </S.Item>
  )
}
