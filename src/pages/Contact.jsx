import React from 'react'
import Navbar from '../component/Navbar'
import lane from "../assets/lane.jpg";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import Map from "../assets/Map.png";
import Footer from '../component/Footer';

const Contact = () => {
  return (
    <div>

      <Navbar/>
<div
  style={{
    backgroundImage: `url(${lane})`,
    backgroundSize: "cover",
  }}
  className="mt-[50px]"
>
  <motion.div
    initial={{ y: 80, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.4 }}
  >
    <p className="text-center pt-[10%] text-[50px] font-bold text-white">
      Contact
    </p>

    <p className="text-center pt-[20px] text-[20px] text-white pb-[10%]">
      Home/Contact
    </p>
  </motion.div>
</div>
   
        <div className="relative w-full h-[700px] overflow-hidden mt-[10%]">

      {/* 🌍 MAP IMAGE */}
      <img
        src={Map}
        alt=" Map"
        className="w-full h-full object-cover"
      />

      {/* 🌑 DARK OVERLAY (optional for better visibility) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* ✈️ ANIMATED FLIGHT LINES (REPEATING EVERY 0.5s) */}
      <svg className="absolute inset-0 w-full h-full">

        {/* Line 1 */}
        <motion.path
          d="M200 350 Q500 100 800 250"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="10 10"
          fill="transparent"
          animate={{
            strokeDashoffset: [0, -40],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Line 2 */}
        <motion.path
          d="M250 500 Q600 300 900 450"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="10 10"
          fill="transparent"
          animate={{
            strokeDashoffset: [0, -40],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "linear",
            delay: 0.2,
          }}
        />
      </svg>

      {/* 📍 LOCATION PINS */}
      <motion.div
        className="absolute left-[30%] top-[40%]"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FaMapMarkerAlt className="text-red-500 text-3xl" />
      </motion.div>

      <motion.div
        className="absolute left-[60%] top-[50%]"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
      >
        <FaMapMarkerAlt className="text-red-500 text-3xl" />
      </motion.div>

    </div>

       <div style={{backgroundColor : "#FF61370D"}} className='mt-[80px] mb-[10%]'>
           <p className='text-orange-700 pl-[50px] pt-[10%] font-bold'>GET IN TOUCH</p>

           <p className='pl-[50px] text-[50px] pt-[30px] pt-[30px] font-bold'>Leave Us A Message</p>

           <p className='pl-[50px] pt-[30px] text-[20px]'>Ready to travel? Contact us now for seamless bookings, expert advice, and unbeatable deals! 📞</p>

           <div className='flex flex-col pt-[60px] pl-[30px]'>
             <label for=''>Your Name</label>
             <input type='text' className='p-[10px] bg-white rounded-[8px] mt-[10px] w-[90%]'/>
           </div>

             <div className='flex flex-col pl-[30px]'>
             <label for=''>Email</label>
             <input type='text' className='p-[10px] bg-white rounded-[8px] mt-[10px] w-[90%]'/>
           </div>

            <div className='flex flex-col pl-[30px]'>
             <label for=''>Subject</label>
             <input type='text' className='p-[10px] bg-white rounded-[8px] mt-[10px] w-[90%]'/>
           </div>

            <div className='flex flex-col pl-[30px]'>
             <label for=''>Your Message(Optional)</label>
             <input type='text' className='p-[10px] bg-white rounded-[8px] mt-[10px] w-[90%] pb-[60px]'/>
           </div>

           <button className='bg-orange-400 mt-[10px] ml-[30px] text-white p-[10px_50px] rounded-[30px] mb-[15%]'>Submit</button>

          </div>

         <Footer/>  
    </div>
  )
}

export default Contact
