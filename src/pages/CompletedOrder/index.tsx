import { useLocation } from 'react-router-dom'

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { Subtitle, Text } from '../../styles/themes/typography'

import DeliveryManSVG from '../../assets/delivery-man.svg'

import { FormState } from '../Checkout'

import * as S from './styled'
import { formatPaymentMethod } from '../../utils/formatPaymentMethod'

type Props = {
  state: FormState
}

export function CompletedOrder() {
  const { state } = useLocation() as unknown as Props

  return (
    <S.Container>
      <S.Wrapper>
        <S.Box>
          <S.Heading>Uhu! Pedido confirmado</S.Heading>
          <Subtitle>
            Agora é só aguardar que logo o café chegará até você
          </Subtitle>
        </S.Box>

        <S.Grid>
          <S.Details>
            <S.Align>
              <S.ItemBackground color="purple">
                <MapPin size={18} weight="fill" />
              </S.ItemBackground>
              <Text>
                Entrega em{' '}
                <strong>
                  {state.district}, {state.number}
                </strong>
                <br />
                {state.street} - {state.city}, {state.uf}
              </Text>
            </S.Align>

            <S.Align>
              <S.ItemBackground color="yellow">
                <Timer size={18} weight="fill" />
              </S.ItemBackground>
              <Text>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min </strong>
              </Text>
            </S.Align>

            <S.Align>
              <S.ItemBackground color="yellow-dark">
                <CurrencyDollar size={18} weight="fill" />
              </S.ItemBackground>
              <Text>
                Pagamento na entrega
                <br />
                <strong>{formatPaymentMethod(state.paymentMethod)}</strong>
              </Text>
            </S.Align>
          </S.Details>

          <img src={DeliveryManSVG} alt="" />
        </S.Grid>
      </S.Wrapper>
    </S.Container>
  )
}
