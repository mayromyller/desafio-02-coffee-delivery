import { NavLink } from 'react-router-dom'

import { MapPin, ShoppingCart } from 'phosphor-react'

import Logo from '../../assets/logo.svg'

import { useCart } from '../../contexts/CartContext'

import * as S from './style'

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <S.Header>
      <S.Container>
        <NavLink to="/">
          <img
            src={Logo}
            alt="Logotipo do Coffee delivery: um copo com um foguete em lançamento no centro do copo e ao lado o nome Coffee Delivery"
          />
        </NavLink>

        <S.Flex>
          <S.Location>
            <MapPin size={20} weight="fill" />
            <S.Text>Floriano, PI</S.Text>
          </S.Location>
          <NavLink to="/checkout">
            <S.Cart>
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </S.Cart>
          </NavLink>
        </S.Flex>
      </S.Container>
    </S.Header>
  )
}
