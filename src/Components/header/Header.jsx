import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import Log_In_Btn from './Log_In_Btn'
import { Link } from 'react-router-dom'
import { RiMenuAddFill } from "react-icons/ri";
function Header() {

    const [isOpen,setIsOpen] = useState(false)
    return (
        <div className="container flex flex-col items-center p-4 mx-auto">
            <header className="mb-4 text-center">
                <img src={logo} alt="logo" />
                <p className="italic">Journalism Without Fear or Favour</p>
                <p className="mt-2 font-semibold">Sunday, November 27, 2025</p>
            </header>
            <div className="w-full mb-4">
                <div className="flex items-center p-2 bg-gray-100 rounded">
                    <span className="px-4 py-2 text-white bg-red-500 rounded-l">Latest</span>
                    <marquee className="flex-1 px-4">
                        <span>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</span>
                    </marquee>
                </div>
            </div>

            <div className='grid justify-between w-full min-[768px]:grid-cols-8 max-md:flex '>
                <nav className="col-span-5 max-md:ps-4 text-[18px] flex justify-end xl:pe-20 lg:pe-0 md:-me-5 space-x-8 mb-4">
                    <Link to={'/'} className="hover:underline">Home</Link>
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Career</a>
                </nav>
                <div className='min-[768px]:hidden relative '>
                    <RiMenuAddFill onClick={()=> setIsOpen(!isOpen)} className='w-7 h-7 ' />
                    {
                        isOpen &&  <div className='absolute right-0 top-6 w-36'>
                        <Log_In_Btn className='justify-end col-span-3 mt-3 me-3' />
                        </div>
                    }
                   
                </div>
                <Log_In_Btn className='justify-end col-span-3 max-md:hidden' />
            </div>
            

        </div>
    )
}

export default Header