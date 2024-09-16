import { GridLayout } from '@/components/GridLayout/grid-layout'
import { ListProducts } from './list-products'
import { Header } from '@/components/Header/header'
import { Footer } from '@/components/Footer/footer'

export default function Home() {
  return (
    <>
      <Header />
      <GridLayout>
        <ListProducts />
      </GridLayout>
      <Footer />
    </>
  )
}
