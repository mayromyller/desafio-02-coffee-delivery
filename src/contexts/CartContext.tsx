import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

import { produce } from 'immer'

import { CartProps } from '../components/Card'

export interface CartItem extends CartProps {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  cartTotalItems: number
  addItemToCart: (item: CartItem) => void
  changeCartItemQuantity: (
    carItemId: number,
    type: 'increment' | 'decrement'
  ) => void
  removeCartItem: (carItemId: number) => void
}

interface CarContextProviderProps {
  children: ReactNode
}

const CartContext = createContext({} as CartContextType)

const LOCAL_STORED_KEY = '@coffee_delivery:v.1.0.0'

export function CartContextProvider({ children }: CarContextProviderProps) {
  const [cartItems, setCarItems] = useState<CartItem[]>(() => {
    const storedItems = localStorage.getItem(LOCAL_STORED_KEY)
    if (storedItems) {
      return JSON.parse(storedItems)
    }

    return []
  })

  const cartQuantity = cartItems.length
  const cartTotalItems = cartItems.reduce((total, currentValue) => {
    return total + currentValue.price * currentValue.quantity
  }, 0)

  function addItemToCart(item: CartItem) {
    const itemExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    )

    const newItem = produce(cartItems, (draft) => {
      if (itemExistsInCart < 0) {
        draft.push(item)
      } else {
        draft[itemExistsInCart].quantity += item.quantity
      }
    })

    setCarItems(newItem)
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increment' | 'decrement'
  ) {
    const newItem = produce(cartItems, (draft) => {
      const itemExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      )

      if (itemExistsInCart >= 0) {
        const item = draft[itemExistsInCart]
        draft[itemExistsInCart].quantity =
          type === 'increment' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCarItems(newItem)
  }

  function removeCartItem(cartItemId: number) {
    const newItem = produce(cartItems, (draft) => {
      const itemExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      )

      if (itemExistsInCart >= 0) {
        draft.splice(itemExistsInCart, 1)
      }
    })

    setCarItems(newItem)
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORED_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addItemToCart,
        cartTotalItems,
        changeCartItemQuantity,
        removeCartItem
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  return context
}
