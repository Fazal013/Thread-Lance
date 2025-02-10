import React, { useEffect, useState } from 'react'

function Navbar() {
  const [sticky,setSticky]=useState(false)
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>0){
        setSticky(true)
      }
      else{
        setSticky(false)
      }
    }
    window.addEventListener("scroll",handleScroll)
    return (()=>{
      window.removeEventListener("scroll",handleScroll)
    })
  },[]);
  const navItems= (<>
    <li><a>Home</a></li>
        <li><a>For Women</a></li>
        <li><a>For Men</a></li>
        <li><a>Contact Us</a></li>
        <li><a>About Us</a></li>
        <li><a>Refund Policy</a></li>
        <li><a>Shipping Policy</a></li>
  </>)
  return (
    <>
    <div className={`backdrop-filter backdrop-blur z-10 max-w-screen-2xl container mx-auto md:px-20 px-4  fixed top-0 left-0 right-0 ${sticky?"sticky-navbar shadow-md text-yellow-500 duration-300 trasnition-all ease-in-out":""}`}>
    <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navItems}
      </ul>
    </div>
    {/* <a className="text-xl">Thread-Lance</a> */}
    <div className='hidden md:block'>
    <a href='/home'><img src={'logolance.png'} width={80} height={80} className="cursor-pointer mt-2" /></a>
    </div>
    <div className=' block md:hidden ml-5'>
      <p>Thread Lance</p>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg">
    {navItems}
    </ul>
  </div>
  <div className="navbar-end items-end">
    <a className='text-2xl cursor-pointer  hover:text-4xl transition-all '><i class="fa-sharp fa-regular fa-user"></i></a>
    <a className='text-2xl ml-10 cursor-pointer hover:text-4xl transition-all'><i class="fa-solid fa-cart-shopping"></i></a>
  </div>
</div>
    </div>
    </>
  )
}

export default Navbar
