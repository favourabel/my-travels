import React from 'react'
import { useNavigate } from "react-router-dom";

import winner from "../assets/winner.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {

   const navigate = useNavigate();

  return (
    <div>
      
        <nav className='flex mt-[30px]'>
               <div className='ml-[30px] font-bold text-[30px]'><img src={winner} alt='winner' className='w-[80px] h-[60px]'/></div>
       
              <ul className='flex font-bold gap-[50px] text-[20px] ml-[50px] mt-[10px]'>
  <li className='text-purple-600'>
    <Link to="/home">Home</Link>
  </li>

  <li className='hover:text-orange-400'>
    <Link to="/">About</Link>
  </li>


  <li className="relative group cursor-pointer">
  <span className="hover:text-orange-400 transition-colors duration-300">
    Our Services
  </span>

  <div className="absolute left-0 top-full mt-2 w-[260px] bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
    
    <div
      onClick={() => navigate("/flight")}
      className="text-black text-[17px] py-[10px] px-5 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
    >
      Flight Ticket
    </div>

    <div
      onClick={() => navigate("/customized")}
      className="text-black text-[17px] py-[10px] px-5 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
    >
      Customized Tours
    </div>

    <div
      onClick={() => navigate("/hotel")}
      className="text-black text-[17px] py-[10px] px-5 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
    >
      Hotel Reservations
    </div>

    <div
      onClick={() => navigate("/travel")}
      className="text-black text-[17px] py-[10px] px-5 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
    >
      Travel Insurance
    </div>

    <div
      onClick={() => navigate("/vacation")}
      className="text-black text-[17px] py-[10px] px-5 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
    >
      Vacation Packages
    </div>

    <div
      onClick={() => navigate("/visa")}
      className="text-black text-[17px] py-[10px] px-5 hover:bg-gray-50 cursor-pointer"
    >
      Visa Procurement
    </div>

</div>
</li>

  <li className='hover:text-orange-400'>
    <Link to="/packages">Our Packages</Link>
  </li>

  <li className='hover:text-orange-400'>
    <Link to="/testimonies">Testimonies</Link>
  </li>

  <li className='hover:text-orange-400'>
    <Link to="/gallery">Gallery</Link>
  </li>

  <li className='hover:text-orange-400'>
    <Link to="/news">News & Update</Link>
  </li>

  <li className='hover:text-orange-400'>
    <Link to="/contact">Contact</Link>
  </li>
</ul>
             </nav>

    </div>
  )
}

export default Navbar
