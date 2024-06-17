
export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
}

export interface LoginProps {
    email: string;
    password: string;
}

export interface LoginErrorsProps {
    email?: string;
    password?: string;
}

export interface RegisterProps {
    email: string;
    password: string;
    name: string;
    address: string;
    phone: string;
}

export interface RegisterErrorProps {
    email?: string;
    password?: string;
    name?: string;
    address?: string;
    phone?: string;
}

export interface userSession {
    token: string;
    user: {
        address: string;
        email: string;
        id: number;
        name: string;
        phone: string;
        orders: []
        role: string
    }
}

export interface AuthContextProps {
    userData: userSession | null;
    setUserData: (userData: userSession | null) => void
}

export interface IOrder {
    id: number;
    status: string; 
    date: Date;
    products: IProduct[]
}