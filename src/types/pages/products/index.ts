export interface ApiResponseProduct {
  status: string
  message: string
  product: {
    id: number
    title: string
    image: string
    price: number
    description: string
    brand: string
    model: string
    color: string
    category: string
    discount: number
  }
}

export interface Props {
  params: {
    productsId: string
  }
  searchParams: {
    [key: string]: string | string[]
  }
}
