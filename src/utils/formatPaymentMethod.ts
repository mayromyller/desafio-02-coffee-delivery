export function formatPaymentMethod(paymentMethod: string) {
  if (paymentMethod === 'credit') {
    return 'Crédito'
  } else if (paymentMethod === 'debit') {
    return 'Débito'
  } else {
    return 'Dinheiro'
  }
}
