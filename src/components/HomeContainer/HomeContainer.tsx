import React from 'react'
import Cards from '../Cards/Cards';
import { getProducts } from '@/helpers/product.helper';

const HomeContainer = async () => {

  //PETICION HTTP
  const products = await getProducts();

  return (
    <div>
       <Cards products={products} />
    </div>
  )
}

export default HomeContainer;