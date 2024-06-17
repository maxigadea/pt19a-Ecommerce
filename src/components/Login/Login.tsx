'use client'
import { useAuth } from '@/context/AuthContext';
import { login } from '@/helpers/auth.helper';
import { validateFormLogin } from '@/helpers/formValidation';
import { LoginErrorsProps, LoginProps } from '@/types';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'

const Login = () => {
    const {setUserData, userData} = useAuth();
    const router = useRouter();
    const [dataUser, setDataUser] = useState<LoginProps>({
        email: "",
        password: "",
    });

    const [errorUser, setErrorUser] = useState<LoginErrorsProps>({
        email: "",
        password: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataUser({
            ...dataUser,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const response = await login(dataUser);
        alert("You have successfully loged")
        const {token, user} = response;
        setUserData({token, user: user})

        router.push("/")
        
    }

    useEffect(() => {
        const errors = validateFormLogin(dataUser);
        setErrorUser(errors)
    }, [dataUser])

  return (
    <div className='flex flex-col items-center justify-center'>
        <div>
            <h2>Sign in to T-STORE</h2>
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
                <button type='submit'>Sign in</button>
            </div>
        </form>
    </div>
  )
}

export default Login;