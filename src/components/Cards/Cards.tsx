import React from 'react'
import Card from '../Card/Card'
import { IProduct } from '@/types'
import Link from 'next/link'


const Cards = ({products}: { products: IProduct[]}) => {
  return (
    <div className='flex justify-center items-center flex-wrap gap-6'>
         {
            products && products?.map((product) => {
                return (
                  <Link key={product.id} href={`/product/${product.id}`}>
                    <Card key={product.id} {...product} />
                  </Link>
                )
            })
        }
    </div>
  )
}

export default Cards;