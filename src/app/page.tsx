import { api } from '@/tools/api'
import { Card } from '@/components/Card/card'
import { GridLayout } from '@/components/GridLayout/grid-layout'
import { ApiResponseProducts } from '@/types/pages/home'

async function fetchProducts(): Promise<ApiResponseProducts | null> {
  try {
    const response = await api.get('/products?page=1&limit=10')
    return response.data
  } catch (error) {
    console.error('Failed to fetch products:', error)
    return null
  }
}

export default async function Home() {
  const response = await fetchProducts()

  return (
    <>
      <GridLayout>
        {response?.products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            description={product.description}
            imageSrc={product.image}
            price={product.price}
          />
        ))}
      </GridLayout>
    </>
  )
}
