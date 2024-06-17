import { IProduct } from '@/types';
import React from 'react'

const Card: React.FC<IProduct> = ({name, price, image}) => {
  return (

        <div className="w-full bg-white border border-gray-200 rounded-lg shadow p-4 flex items-center justify-center flex-col max-w-[140px] h-full min-h-[280px]">
            <a href="#">
                <img className="rounded-t-lg w-full max-w-[100px] h-full min-h-[100px]" src={image} alt="product image" />
            </a>
            <div className="flex items-center justify-center flex-col pb-5">
                <a href="#">
                    <h5 className="text-lg text-center font-semibold tracking-tight text-gray-900">{name}</h5>
                </a>
                <div className="flex items-center justify-between">
                    <span className="text-center text-2xl font-bold text-gray-900 ">${price}</span>
                </div>
            </div>
        </div>
  )
}

export default Card;