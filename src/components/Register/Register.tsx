'use client'
import { register } from '@/helpers/auth.helper';
import { validateFormRegister } from '@/helpers/formValidation';
import { RegisterErrorProps, RegisterProps } from '@/types';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'

const Register = () => {
    const router = useRouter();
    const [dataUser, setDataUser] = useState<RegisterProps>({
        email: "",
        password: "",
        name: "",
        address: "",
        phone: ""
    });

    const [errorUser, setErrorUser] = useState<RegisterErrorProps>({
        email: "",
        password: "",
        name: "",
        address: "",
        phone: ""
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataUser({
            ...dataUser,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        await register(dataUser)
        alert("You have successfully registered")
        router.push("/login")
    }

    useEffect(() => {
        const errors = validateFormRegister(dataUser);
        setErrorUser(errors)
    }, [dataUser])

  return (
    <div className='flex flex-col items-center justify-center'>
        <div>
            <h2>Register to T-STORE</h2>
        </div>

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email-address'>Email:</label>
                <input 
                    id='email-address'
                    type='email'
                    name="email"
                    value={dataUser.email}
                    onChange={handleChange}
                    placeholder='example@gmail.com'
                />
                {errorUser.email && <p>{errorUser.email}</p>}
            </div>

            <div>
                <label htmlFor='password'>Password:</label>
                <input 
                    id='password'
                    type='password'
                    name="password"
                    value={dataUser.password}
                    onChange={handleChange}
                    placeholder='*********'
                />
                {errorUser.password && <p>{errorUser.password}</p>}
            </div>

            <div>
                <label htmlFor='address'>Address:</label>
                <input 
                    id='address'
                    type='text'
                    name="address"
                    value={dataUser.address}
                    onChange={handleChange}
                    placeholder='Mz 4 - NY'
                />
                {errorUser.address && <p>{errorUser.address}</p>}
            </div>

            <div>
                <label htmlFor='name'>Name:</label>
                <input 
                    id='name'
                    type='text'
                    name="name"
                    value={dataUser.name}
                    onChange={handleChange}
                    placeholder='John Doe'
                />
                {errorUser.name && <p>{errorUser.name}</p>}
            </div>

            <div>
                <label htmlFor='phone'>Phone:</label>
                <input 
                    id='phone'
                    type='text'
                    name="phone"
                    value={dataUser.phone}
                    onChange={handleChange}
                    placeholder='11-232323'
                />
                {errorUser.phone && <p>{errorUser.phone}</p>}
            </div>

            <div>
                <button  type='submit'>Register</button>
            </div>
        </form>
    </div>
  )
}

export default Register;