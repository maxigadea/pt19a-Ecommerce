'use client'
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const {userData} = useAuth();
  const pathname = usePathname();



  return (
    <nav className="flex flex-col items-center justify-between p-4 bg-gray-200">
      <div className="w-full flex flex-row items-center justify-between">
        <Link href="/">
          <Image
            src={"https://cdn-icons-png.flaticon.com/512/15216/15216856.png"}
            alt="T-STORE Logo"
            width={40}
            height={40}
          />
        </Link>

        <input
          type="text"
          placeholder="Search..."
          className="max-w-[200px] p-2 rounded-md outline-none"
        />

        {
          userData?.token ? (
            <div className="flex flex-row items-center gap-2">
              <Link href="/dashboard">
                <p>{userData.user.name}</p>
              </Link>

              <Link href="/cart">
          <Image
            src={"https://cdn-icons-png.flaticon.com/128/711/711897.png"}
            alt="Cart icon"
            width={20}
            height={20}
          />
        </Link>
            </div>
          ) : (
            <div>
              <Link href="/login">
                <p>Sign In</p>
              </Link>
            </div>
          )
        }


      

       

      </div>

      <div className="mt-4 flex items-center flex-row gap-4">
        <a>Smartphones</a>
        <a>Laptops</a>
        <a>Tablets</a>
      </div>
    </nav>
  );
};

export default Navbar;
