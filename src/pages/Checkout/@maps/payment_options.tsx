import { Bank, CreditCard, Money } from 'phosphor-react'

export const paymentOptions = [
  {
    id: 1,
    method: 'credit',
    icon: <CreditCard size={22} />,
    text: 'Cartão de Crédito'
  },
  {
    id: 2,
    method: 'debit',
    icon: <Bank size={22} />,
    text: 'Cartão de débito'
  },
  {
    id: 3,
    method: 'money',
    icon: <Money size={22} />,
    text: 'Dinheiro'
  }
]
