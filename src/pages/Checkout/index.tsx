import { CurrencyDollar, MapPinLine } from 'phosphor-react'

import { useTheme } from 'styled-components'

import { FormProvider, useForm } from 'react-hook-form'

import toast, { Toaster } from 'react-hot-toast'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'

import { HelperText, Text, TitleForm } from '../../styles/themes/typography'

import { PaymentOption } from '../../components/PaymentOption'
import { CarItem } from '../../components/CartItem'
import { Input } from '../../components/Input'

import { useCart } from '../../contexts/CartContext'

import { formatPrice } from '../../utils/formatPrice'

import { paymentOptions } from './@maps/payment_options'

import { searchCep } from '../../utils/searchCep'

import * as S from './style'

const DELIVERY_PRICE = 3.5

const paymentEnum = {
  credit: 'credit',
  debit: 'debit',
  money: 'money'
} as const

const schema = zod.object({
  cep: zod.string().min(3, 'Informe seu CEP'),
  street: zod.string().min(2, 'Nome da rua é obrigatório'),
  number: zod.string().min(1, 'Informe o número da casa'),
  district: zod.string().min(2, 'Informe o bairro'),
  city: zod.string().min(2, 'Informe a cidade'),
  uf: zod.string().min(2, 'Informa a UF'),
  paymentMethod: zod.nativeEnum(paymentEnum)
})

export type FormState = zod.infer<typeof schema>

export function Checkout() {
  const { cartItems, cartTotalItems } = useCart()

  const hookFormMethods = useForm<FormState>({ resolver: zodResolver(schema) })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = hookFormMethods

  const cartTotal = DELIVERY_PRICE + cartTotalItems

  const totalItem = formatPrice(cartTotalItems)
  const totalCart = formatPrice(cartTotal)
  const totalDelivery = formatPrice(DELIVERY_PRICE)

  const { colors } = useTheme()
  const navigate = useNavigate()

  function handleConfirmOrder(data: FormState) {
    handleAddressByCep(data.cep)

    if (cartItems.length <= 0) {
      return toast.error(
        'Seu carrinho está vazio. Coloque algum item para continuar',
        {
          duration: 8000,
          style: {
            borderRadius: '10px',
            background: colors['base-card'],
            color: colors['base-title']
          }
        }
      )
    }

    navigate('/completed-order', {
      state: data
    })
  }

  async function handleAddressByCep(value: string) {
    const result = await searchCep(value)

    reset({
      city: result.localidade,
      district: result.bairro,
      street: result.logradouro,
      uf: result.uf
    })
  }

  return (
    <S.Container>
      <S.Grid onSubmit={handleSubmit(handleConfirmOrder)}>
        <FormProvider {...hookFormMethods}>
          <div>
            <TitleForm>Complete seu pedido</TitleForm>
            <S.CardForm>
              <S.Align>
                <MapPinLine size={22} color={colors['yellow-dark']} />
                <div>
                  <Text>Endereço de Entrega</Text>
                  <HelperText>
                    Informe o endereço onde deseja receber seu pedido
                  </HelperText>
                </div>
              </S.Align>

              <S.GridForm>
                <S.FirstFormGroup>
                  <Input
                    placeholder="CEP"
                    type="number"
                    {...register('cep')}
                    onBlur={(e) => handleAddressByCep(e.target.value)}
                  />
                </S.FirstFormGroup>

                <Input placeholder="Rua" type="text" {...register('street')} />

                <S.FirstFormGroup>
                  <Input
                    type="number"
                    placeholder="Número"
                    {...register('number')}
                  />

                  <Input
                    placeholder="Complemento"
                    type="text"
                    className="complement"
                  />
                </S.FirstFormGroup>

                <S.SecondFormGroup>
                  <Input
                    placeholder="Bairro"
                    type="text"
                    {...register('district')}
                  />

                  <Input
                    placeholder="Cidade"
                    type="text"
                    {...register('city')}
                  />

                  <Input placeholder="UF" type="text" {...register('uf')} />
                </S.SecondFormGroup>
              </S.GridForm>
            </S.CardForm>

            <S.CardForm>
              <S.Align>
                <CurrencyDollar size={22} color={colors['purple']} />
                <div>
                  <Text>Pagamento</Text>
                  <HelperText>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </HelperText>
                </div>
              </S.Align>
              <S.PaymentContainer>
                {paymentOptions.map((payment) => (
                  <PaymentOption
                    key={payment.id}
                    icon={payment.icon}
                    text={payment.text}
                    value={payment.method}
                    {...register('paymentMethod')}
                  />
                ))}
              </S.PaymentContainer>
            </S.CardForm>
          </div>

          <div>
            <TitleForm>Cafés selecionados</TitleForm>

            <S.Card>
              {cartItems.map((cartItem) => {
                return <CarItem coffee={cartItem} />
              })}

              <S.Divider />

              <S.Resume>
                <HelperText>Total de itens</HelperText>

                <HelperText>R$ {totalItem}</HelperText>
              </S.Resume>
              <S.Resume>
                <HelperText>Entrega</HelperText>

                <HelperText>R$ {totalDelivery}</HelperText>
              </S.Resume>

              <S.Resume>
                <S.TotalPrice>Total</S.TotalPrice>
                <S.TotalPrice>R$ {totalCart}</S.TotalPrice>
              </S.Resume>

              <S.Button type="submit">Confirmar pedido</S.Button>
              <Toaster position="top-right" />
            </S.Card>
          </div>
        </FormProvider>
      </S.Grid>
    </S.Container>
  )
}
