import { Details } from '@/components/Details/details'
import { ApiResponseProduct, Props } from '@/types/pages/products'
import { api } from '@/tools/api'

async function fetchProductOne(
  productId: number
): Promise<ApiResponseProduct | null> {
  try {
    const response = await api.get(`/products/${productId}`)
    return response.data
  } catch (error) {
    console.error('Failed to fetch products:', error)
    return null
  }
}

export default async function Products({ params }: Props) {
  const { productsId } = params
  const response = await fetchProductOne(Number(productsId))

  return (
    <Details
      id={response?.product.id}
      brand={response?.product.brand}
      category={response?.product.category}
      color={response?.product.color}
      description={response?.product.description}
      discount={response?.product.discount}
      title={response?.product.title}
      image={response?.product.image}
      model={response?.product.model}
      price={response?.product.price}
    />
  )
}
