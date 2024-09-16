'use client'
import { Card } from '@/components/Card/card'
import { useProducts } from "@/context/ProductsContext";
import Link from 'next/link'

export function ListProducts(){
  const { products } = useProducts();

  return (
      products?.map(product => (
        <Link key={product.id} href={`products/${product.id}`}>
          <Card
            title={product.title}
            description={product.description}
            imageSrc={product.image}
            price={product.price}
          />
        </Link>
    ))
  )
}
