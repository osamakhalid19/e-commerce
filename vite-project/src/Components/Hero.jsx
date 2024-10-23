import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { FaCartArrowDown } from "react-icons/fa"
import { IoMdMenu } from "react-icons/io";


const Hero = () => {
    const [active, setactive] = useState(false)
    const [freeSp, setfreeSp] = useState(false)


    return (
        <>
            <header>
                <nav className=' px-20 py-90 flex justify-between '>
                    <div className='flex items-center '>
                        <img className='sm:h-[30px] sm:left-1 sm:top-[4px] sm:absolute h-[40px] m-2' src="../Images/logo1.avif" alt="" />
                        <div className='sm:text-[20px] sm:left-12 text-[24px] absolute left-[140px] top-[10px]'>KAYYUU</div>
                    </div>
                    <div >
                        <ul className='lg:hidden flex gap-6 relative top-3 text-lg '>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Product">Products</Link></li>
                            <li><Link to="/Room">Rooms</Link></li>
                            <li><Link to="/AboutUs">About Us</Link></li>
                            <li><Link to="ContactUs">Contact Us</Link></li>
                            <FaCartArrowDown className='text-yellow-300 cursor-pointer h-7 w-7' />
                        </ul>
                        <div>
                            <IoMdMenu className='cursor-pointer absolute top-2 h-8 w-7 hidden lg:inline-block sm:top-1 sm:w-28' onClick={() => { setactive(!active) }} />

                            <div className={`h-full w-[30%] sm:w-[80%] transition-all duration-[1s] bg-gray-600 fixed top-0 left-0 ${active ? 'left-0' : 'left-[-454px]'}`}>

                                <ul className='relative block justify-around ml-[30px] py-10 space-y-6 text-[22px]'>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/Product">Products</Link></li>
                                    <li><Link to="/Rooms">Rooms</Link></li>
                                    <li><Link to="/AboutUs">About Us</Link></li>
                                    <li><Link to="ContactUs">Contact Us</Link></li>
                                    <FaCartArrowDown className='cursor-pointer h-7 w-7 text-yellow-300' />
                                </ul>
                            </div>
                        </div>
                        {/* <div className='h-full w-[70%] bg-slate-600 z-10 fixed '></div> */}



                    </div>
                </nav>
            </header>

        </>
    )
}

export default Hero
