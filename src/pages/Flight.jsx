import React from 'react';
import { motion } from "framer-motion";

import Navbar from '../component/Navbar';
import bull from "../assets/bull.jpg"
import lady from "../assets/lady.png";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from '../component/Footer';


const Flight = () => {
  return (
    <div>
      
      <Navbar/>

      <div style={{
    backgroundImage: `url(${bull})`,
    backgroundSize: "cover",}}
  className="mt-[50px]">
  <motion.p
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8 }}
    className='text-center pt-[10%] text-[50px] text-white'
  >
    Flight Booking
  </motion.p>

  <motion.p
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className='text-center pt-[30px] text-[20px] pb-[10%] text-white'
  >
    Home/Flight Booking
  </motion.p>
</div>

       <div className='flex'>
     
               <div>
     
             <img src={bull} className='w-[730px] rounded-[8px] mt-[60px] ml-[70px]'/>
     
               <p className='ml-[30px] font-bold text-[40px] mt-[20px] text-purple-700'>Flight Bookings</p>
     
                 <p className='ml-[30px] mt-[20px] text-[16px]'>
                  Booking flights has never been easier with Tranquilane Travels & Tours Limited. Whether you are<br/>
                  traveling for business or leisure, we offer seamless domestic and international flight bookings at<br/>
                  competitive rates. Our platform connects you to a wide range of airlines, providing flexible options to<br/>
                  suit your schedule, budget, and preferences. With us, you can book your flights quickly, securely,<br/>
                   and hassle-free.</p>
                     
                     <p className='ml-[30px] mt-[30px]'>
                  Choosing Macwise Travels means enjoying personalized service, expert guidance, and 24/7 
                  support. We ensure you get the best deals, exclusive discounts, and smooth travel arrangements.
                  Our strong industry partnerships allow us to provide real-time updates on flight availability,
                  schedules, and any necessary changes, ensuring a stress-free experience.</p>

                  <p className='mt-[30px] ml-[30px]'>
                    Let us handle your travel plans while you focus on your journey. With our efficient booking process<br/>
                    and dedicated support, you can travel with confidence. Fill out our consultation form below and let<br/>
                    us secure the best flights for you today! ✈️ </p>
           
                </div> 
     
             <div className='mt-[60px]'>
                  
           <form style={{backgroundColor : "#FF61370D"}} className=' h-[650px] rounded-[8px] p-[50px] mr-[150px]'>

                <p className='pl-[40px] pt-[20px] text-[30px] font-bold'>Contact Us</p>
     
                 <div className='flex gap-[10px] pt-[20px] pl-[40px]'>
                     <CiLocationOn className='w-[20px] h-[20px] text-orange-400 mt-[10px]'/>
                     <p>
                         Block A, Shop 1, 3rd Avenue<br/>
                       Cornershop, Gwarimpa, Abuja, Nigeria</p>
                 </div>
     
                 <div className='flex gap-[10px] pt-[20px] pl-[40px]'>
                     <MdOutlineEmail className='w-[20px] h-[20px] text-orange-400'/>
                     <p className='cursor-pointer'>Macwiseltd@gmail.com</p>
                 </div>
     
                  <div className='flex gap-[10px] pl-[40px] pt-[20px]'>
                     <FaPhoneAlt className='w-[20px] h-[20px] text-orange-400'/>
                     <p>+2349130593550</p>
                  </div>
     
                <img src= {lady} className='w-[300px] rounded-[7px] mt-[40px] ml-[10px] mb-[70px]'/>
      
              </form>
             </div>
     
            </div>
        
           
           <div className=" min-h-screen flex px-4 py-10 mt-[40px] ml-[30px] mb-[70px]">
  <div className="bg-[#ff6238] w-full max-w-[750px] p-5 sm:p-6 md:p-8">
    
    <div className="mb-3">
      <label className="block text-white text-[16px] mb-1">
        Name *
      </label>
      <input
        type="text"
        className="w-full h-[40px] bg-white outline-none px-3 rounded-sm"
      />
    </div>

    <div className="mb-3">
      <label className="block text-white text-[16px] mb-1">
        Email *
      </label>
      <input
        type="email"
        className="w-full h-[40px] bg-white outline-none px-3 rounded-sm"
      />
    </div>

    <div className="mb-3">
      <label className="block text-white text-[16px] mb-1">
        Phone Number
      </label>
      <input
        type="tel"
        className="w-full h-[40px] bg-white outline-none px-3 rounded-sm"
      />
    </div>

    <div className="mb-3">
      <label className="block text-white text-[16px] mb-1">
        Select Service
      </label>
      <select className="w-full h-[40px] bg-white outline-none px-3 rounded-sm">
        <option>Flight Booking</option>
        <option>Customized Tours</option>
        <option>Hotel Reservations</option>
        <option>Travel Insurance</option>
        <option>Vacation Packages</option>
        <option>Visa Procurement</option>
      </select>
    </div>

    <div className="mb-4">
      <label className="block text-white text-[16px] mb-1">
        Additional Details/Requests
      </label>
      <textarea
        rows="4"
        className="w-full bg-white outline-none p-3 rounded-sm resize-none"
      ></textarea>
    </div>

    <button className="bg-[#132531] text-white px-8 py-2 text-[16px] rounded-sm hover:opacity-90 transition">
      Submit
    </button>

  </div>
</div>

   <Footer/>

        </div>

  )
}

export default Flight
