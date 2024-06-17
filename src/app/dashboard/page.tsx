'use client'
import { useAuth } from '@/context/AuthContext';
import React from 'react'

const DashboardPage = () => {

  const {userData} = useAuth();
  return (
    <div>
        <h1>Dashboard</h1>
        <h3>Bienvenido {userData?.user.name}</h3>
        <p>Address: {userData?.user.address} </p>
        <p>Phone: {userData?.user.phone} </p>
    </div>
  )
}

export default DashboardPage;