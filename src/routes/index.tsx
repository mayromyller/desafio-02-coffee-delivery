import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home/index'
import { Checkout } from '../pages/Checkout/index'
import { CompletedOrder } from '../pages/CompletedOrder'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/completed-order" element={<CompletedOrder />} />
    </Routes>
  )
}
