import { useState } from 'react'
import {
  CardPrice,
  CardTitle,
  HelperText
} from '../../styles/themes/typography'

import { InputQuantity } from '../InputQuantity'

import * as S from './style'
import { useCart } from '../../contexts/CartContext'
import { ShoppingCartSimple } from 'phosphor-react'
import { formatPrice } from '../../utils/formatPrice'

export type CartProps = {
  id: number
  tags: string[]
  name: string
  description: string
  price: number
  image: string
}

type Coffee = {
  coffee: CartProps
}

export function Card({ coffee }: Coffee) {
  const [quantity, setQuantity] = useState(1)

  const { addItemToCart } = useCart()

  function increment() {
    setQuantity((state) => state + 1)
  }

  function decrement() {
    setQuantity((state) => state - 1)
  }

  function handleCoffeeInCart() {
    const newCoffee = {
      ...coffee,
      quantity
    }

    addItemToCart(newCoffee)
  }

  const formattedPrice = formatPrice(coffee.price)

  return (
    <S.Card key={coffee.id}>
      <S.CardHeader>
        <S.CoffeeCardImage src={coffee.image} alt={coffee.description} />
      </S.CardHeader>

      <S.CardContent>
        <S.TagContainer>
          {coffee.tags.map((tag, index) => {
            return (
              <S.Tag key={index}>
                <S.TagText>{tag}</S.TagText>
              </S.Tag>
            )
          })}
        </S.TagContainer>

        <S.Box>
          <CardTitle>{coffee.name}</CardTitle>
          <HelperText>{coffee.description}</HelperText>
        </S.Box>
      </S.CardContent>

      <S.CardFooter>
        <S.PriceContainer>
          <span>R$</span>
          <CardPrice>{formattedPrice}</CardPrice>
        </S.PriceContainer>

        <S.Actions>
          <InputQuantity
            quantity={quantity}
            onDecrement={decrement}
            onIncrement={increment}
          />
          <S.ButtonCart onClick={handleCoffeeInCart}>
            <ShoppingCartSimple weight="fill" size={24} />
          </S.ButtonCart>
        </S.Actions>
      </S.CardFooter>
    </S.Card>
  )
}
