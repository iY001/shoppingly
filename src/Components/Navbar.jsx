import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar(props) {

    const [links, setLinks] = useState([
        {
            page: "Home",
            url: "/"
        }, {
            page: "Products",
            url: "/products"
        }, {
            page: "About us",
            url: "/aboutus"
        }]);
    return (
        <>
            <div className="relative z-10 md:bg-white bg-[#F4F4F4]">
                <div className="container mx-auto flex justify-between items-center align-middle py-3 bg-[#F4F4F4] md:bg-white ">
                    <div className="cursor-pointer mx-[-65px] md:mx-[-40px] mt-[-6px] md:mt-[-2px] py-2">
                        <h2 className="flex items-end font-normal text-[2rem] mx-[2.5em]">
                            Shopping
                            <p className="text-[#F43A09] text-[1.8rem]">.ly</p>
                        </h2>
                    </div>
                    <nav>
                        <span className="bg-[#F4F4F4] md:bg-white text-[#F43A09] duration-500 text-3xl mx-6 align-middle md:hidden block">
                            <button className="mr-6">
                                <ion-icon name="cart-outline"></ion-icon>
                            </button>
                            <button>
                                <ion-icon
                                    onClick={() => props.setOpen(!props.open)}
                                    name={props.open ? "close" : "menu"}
                                ></ion-icon>
                            </button>
                        </span>
                        <ul
                            className={`flex flex-col md:flex-row bg-[#F4F4F4] md:bg-white items-center text-[1.1rem] gap-[2em] md:flex md:items-center md:px-4 z-[-20] md:z-auto absolute md:static 
         w-full md:w-auto left-0 py-6 md:py-0 pl-7 md:pl-0 opacity-0 md:opacity-100
        top-[-400px] transition-all ease-in duration-500 ${props.open ? "top-[60px] opacity-100" : "top-[-80px] opacity-0"
                                } `}
                        >
                            {links.map((link, id) => {
                                return (
                                    <li key={id}>
                                        <Link
                                            className="text-black font-medium hover:opacity-[0.7] hover:text-[#F43A09]"
                                            to={`${link.url}`}
                                        >
                                            {link.page}
                                        </Link>
                                    </li>
                                );
                            })}
                            <Link to={'/signup'} className="md:bg-[#f0f0f0] md:px-[1.2rem] md:py-2 md:rounded-3xl hover:text-[#F43A09] font-medium  md:transition-all">
                                Sign Up
                            </Link>
                            <Link to={'/signin'} className="md:bg-[#f0f0f0] md:px-[1.2rem] md:py-2 md:rounded-3xl hover:text-[#F43A09] font-medium  md:transition-all">
                                Sign In
                            </Link>
                            {!props.open && (
                                <button className="bg-white w-100 md:bg-[#F43A09] md:text-white md:text-2xl md:px-[0.4rem] md:py-[0.2rem] md:rounded-xl md:transition-all">
                                    <ion-icon name="cart-outline"></ion-icon>
                                </button>
                            )}
                        </ul>
                    </nav>
                    {/* Navbar */}
                </div>
                {/* Container */}
            </div>

            {/* Navbar */}
        </>
    )
}

export default Navbar