import { LoginProps, RegisterProps } from "@/types";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// const { email, password, name, address, phone } = req.body;

export async function register(userData: RegisterProps) {
  try {
    const res = await fetch(`${apiUrl}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (res.ok) {
      return res.json();
    } else {
      alert("Failed to register");
      throw new Error("Failed to register");
    }
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function login(userData: LoginProps) {
  try {
    const res = await fetch(`${apiUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (res.ok) {
      return res.json();
    } else {
      alert("Failed to login");
      throw new Error("Failed to login");
    }
  } catch (error: any) {
    throw new Error(error);
  }
}
