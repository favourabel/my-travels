import React from 'react'
import { motion } from "framer-motion";

import Navbar from '../component/Navbar';
import sad from "../assets/sad.jpg";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from '../component/Footer';
import lady from "../assets/lady.png";

const Customized = () => {
  return (
    <div>
      
       <Navbar/>

          <div style={{
           backgroundImage: `url(${sad})`,
           backgroundSize: "cover",}}
         className="flex-col md:flex-row mt-[50px]">
         <motion.p
           initial={{ opacity: 0, y: -50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false }}
           transition={{ duration: 0.8 }}
           className='text-center pt-[10%] text-[50px] text-white'
         >
           Customized Tours
         </motion.p>
       
         <motion.p
           initial={{ opacity: 0, y: -50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className='text-center pt-[30px] text-[20px] pb-[10%] text-white'
         >
           Home/Customized Tours
         </motion.p>
       </div>
       
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[100px]">

  <div>

    <img
      src={sad}
      className="w-full lg:w-[730px] rounded-[8px] mt-[60px] px-[20px] lg:px-0 lg:ml-[70px]"
    />

    <p className="ml-[20px] lg:ml-[30px] font-bold text-[28px] md:text-[35px] lg:text-[40px] mt-[20px] text-purple-700">
      Customized Tours
    </p>

    <p className="ml-[20px] lg:ml-[30px] mt-[20px] text-[14px] md:text-[15px] pr-[20px]">
      Experience the world your way with Macwise Travels Customized Tours! Whether you seek
      <br className="hidden lg:block" />
      cultural explorations, thrilling adventures, or serene getaways, we craft personalized itineraries
      <br className="hidden lg:block" />
      tailored to your interests. Our expert team designs each tour to match your preferences, ensuring a
      <br className="hidden lg:block" />
      seamless and unforgettable travel experience.
    </p>

    <p className="ml-[20px] lg:ml-[30px] mt-[30px] text-[14px] md:text-[15px] pr-[20px]">
      With our extensive industry connections and attention to detail, we provide exclusive access, expert
      <br className="hidden lg:block" />
      guidance, and hassle-free planning. Our tours are carefully curated to include the best destinations,
      <br className="hidden lg:block" />
      accommodations, and experiences, giving you exceptional value. Choose us for a stress-free journey
      <br className="hidden lg:block" />
      where every detail is handled professionally, allowing you to focus on making memories.
    </p>

    <p className="mt-[30px] ml-[20px] lg:ml-[30px] pr-[20px] text-[14px] md:text-[16px]">
      Let us turn your dream trip into reality! Whether solo, with family, or in a group, we guarantee an
      <br className="hidden lg:block" />
      extraordinary travel experience. Fill out our consultation form below, and let start planning your
      <br className="hidden lg:block" />
      perfect getaway today! 🌍✈️
    </p>

  </div>

  <div className="mt-[60px] px-[20px] lg:px-0">

    <form
      style={{ backgroundColor: "#FF61370D" }}
      className="w-full lg:w-auto min-h-[650px] rounded-[8px] p-[30px] md:p-[50px] lg:mr-[150px]"
    >

      <p className="pl-[10px] md:pl-[40px] pt-[20px] text-[24px] md:text-[30px] font-bold">
        Contact Us
      </p>

      <div className="flex gap-[10px] pt-[20px] pl-[10px] md:pl-[40px]">
        <CiLocationOn className="w-[20px] h-[20px] text-orange-400 mt-[10px] flex-shrink-0" />
        <p>
          Block A, Shop 1, 3rd Avenue
          <br />
          Cornershop, Gwarimpa, Abuja, Nigeria
        </p>
      </div>

      <div className="flex gap-[10px] pt-[20px] pl-[10px] md:pl-[40px]">
        <MdOutlineEmail className="w-[20px] h-[20px] text-orange-400 flex-shrink-0" />
        <p className="cursor-pointer break-all">
          Macwiseltd@gmail.com
        </p>
      </div>

      <div className="flex gap-[10px] pl-[10px] md:pl-[40px] pt-[20px]">
        <FaPhoneAlt className="w-[20px] h-[20px] text-orange-400 flex-shrink-0" />
        <p>+2349130593550</p>
      </div>

      <img
        src={lady}
        className="w-full max-w-[300px] rounded-[7px] mt-[40px] mx-auto mb-[70px]"
      />

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

export default Customized
