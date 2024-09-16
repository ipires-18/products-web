import { PropsWithChildren } from 'react'
import GlobalStyles from '@/styles/global'
import { ProductsProvider } from '@/context/ProductsContext';
import { CartProvider } from '@/context/CartContext';

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
        <GlobalStyles />
        <ProductsProvider>
          <CartProvider>
             {children}
          </CartProvider>
        </ProductsProvider>
    </>
  )
}
