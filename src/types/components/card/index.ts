import { StaticImageData } from 'next/image'

export interface CardProps {
  imageSrc: StaticImageData | string
  title: string
  description: string
  price: number
}
