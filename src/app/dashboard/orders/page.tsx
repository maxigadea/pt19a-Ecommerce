'use client'
import { useAuth } from '@/context/AuthContext';
import { getOrders } from '@/helpers/orders.helper';
import { IOrder } from '@/types';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const OrdersPage = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const {userData} = useAuth();

  const fetchData = async () => {
    const ordersResponse = await getOrders(userData?.token!);
    setOrders(ordersResponse);
  };

useEffect(() => {
    userData?.token && fetchData();
}, [userData?.token])


  return (
    <div className='flex flex-col gap-4 '>
    {
      orders?.length > 0 ? (
          orders?.map((order) => {
            return (
              <div key={order.id}>
                <div>
                  <p>{new Date(order.date).toLocaleString()}</p>
                </div>
              </div>
            )
          })
      ) : (
        <div> 
           <p>You dont have buy any products yet</p>
        </div>
      )
    }
    </div>
  )
}

export default OrdersPage;