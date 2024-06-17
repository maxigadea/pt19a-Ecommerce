'use client'
import { useAuth } from '@/context/AuthContext';
import { createOrder } from '@/helpers/orders.helper';
import { IProduct } from '@/types'
import { useRouter } from 'next/navigation';
import React, {useEffect, useState} from 'react'

const Cart = () => {
  const router = useRouter();
  const {userData} = useAuth();
  const [cart, setCart] = useState<IProduct[]>([])
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    if(storedCart) {
      let totalCart = 0;
      storedCart.map((item: IProduct) => {
        totalCart = totalCart + item.price
      })
      setCart(storedCart)
      setTotal(totalCart)
    }
  }, [])

  const handleClick = async () => {
    const idProducts = new Set(cart.map((product) => product.id))
    await createOrder(Array.from(idProducts), userData?.token!)
    alert("Buy successfully!")
    setCart([])
    setTotal(0)
    localStorage.setItem("cart", "[]");
    router.push("/dashboard/orders")
  };

  return (
    <div className='flex flex-row items-center w-full justify-between gap-4 px-4'>
      <div className='flex flex-col gap-4 '>
      {
        cart?.length > 0 ? (
            cart?.map((cart) => {
              return (
                <div key={cart.id}>
                  <div>
                    <p>{cart.name}</p>
                    <p>Price: ${cart.price}</p>
                  </div>
                </div>
              )
            })
        ) : (
          <div> 
             <p>You dont have any products in your cart yet</p>
          </div>
        )
      }
      </div>

      <div>
        <p>Total: ${total}</p>
        <button onClick={handleClick} className='rounded-sm bg-gray-200 hover:bg-gray-400 text-black p-2 mt-2'>Checkout</button>
      </div>
    </div>
  )
}

export default Cart