import { Details } from '@/components/Details/details'
import { NextPage } from 'next'

export default function Products(props: NextPage) {
  console.log(props)
  return (
    <>
      <Details />
    </>
  )
}
