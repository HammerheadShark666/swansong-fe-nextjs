import React from "react";
import Link from "next/link";
import Logo from "./logo";
import { KeyboardEvent } from 'react';
import { useRouter } from "next/navigation";



const Navbar = ({ toggle }: { toggle: () => void }) => {

    const router = useRouter();

  const handleOnKeyDown = (e : KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push("/search?criteria=" + e.currentTarget.value);
      e.currentTarget.value = "";
    }
  }

  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <ul className="hidden md:flex gap-x-6 text-white ">
            <li>
                  <Link href="/albums">
                    <p>Albums</p>
                  </Link>
                </li>
                <li>
                  <Link href="/artists">
                    <p>Artists</p>
                  </Link>
                </li>
                <li>
                  <Link href="/members">
                    <p>Members</p>
                  </Link>
                </li>
            </ul>
            <div className="hidden md:block">
               
              <div className="relative ml-3 pt-1">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pt-2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                 <input onKeyDown={handleOnKeyDown} type="search" id="default-search" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
              </div>   
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;