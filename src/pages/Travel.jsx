import React from 'react'
import { motion } from "framer-motion";

import Navbar from '../component/Navbar'
import policy from "../assets/policy.jpg"
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import lady from "../assets/lady.png";
import Footer from '../component/Footer';

const Travel = () => {
  return (
    <div>
       
      <Navbar/>

         <div style={{
                 backgroundImage: `url(${policy})`,
                 backgroundSize: "cover",}}
               className="flex-col md:flex-row mt-[50px]">
               <motion.p
                 initial={{ opacity: 0, y: -50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: false }}
                 transition={{ duration: 0.8 }}
                 className='text-center pt-[10%] text-[50px] text-white'
               >
                 Travel Insurance
               </motion.p>
             
               <motion.p
                 initial={{ opacity: 0, y: -50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: false }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className='text-center pt-[30px] text-[20px] pb-[10%] text-white'
               >
                 Home/Travel Insurance
               </motion.p>
             </div>
             
                 <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[120px]">

  <div>

    <img
      src={policy}
      className="w-full lg:w-[730px] rounded-[8px] mt-[60px] px-[20px] lg:px-0 lg:ml-[70px]"
    />

    <p className="ml-[20px] lg:ml-[30px] font-bold text-[28px] md:text-[35px] lg:text-[40px] mt-[20px] text-purple-700">
      Travel Insurance
    </p>

    <p className="ml-[20px] lg:ml-[30px] mt-[20px] text-[14px] md:text-[15px] pr-[20px]">
      Unexpected events can disrupt even the best-planned trips, but with Macwise Travels & Tours,
      <br className="hidden lg:block" />
      you can travel worry-free. Our comprehensive travel insurance covers medical emergencies, trip
      <br className="hidden lg:block" />
      cancellations, lost baggage, and other unforeseen circumstances, ensuring you’re protected no
      <br className="hidden lg:block" />
      matter where you go. Whether you’re traveling for business or leisure, our insurance solutions
      <br className="hidden lg:block" />
      provide the security you need.
    </p>

    <p className="ml-[20px] lg:ml-[30px] mt-[30px] text-[14px] md:text-[15px] pr-[20px]">
      Why choose us? We partner with trusted insurance providers to offer flexible coverage tailored to
      <br className="hidden lg:block" />
      your specific needs. Our expert team guides you through selecting the best plan, ensuring you
      <br className="hidden lg:block" />
      receive affordable, reliable, and hassle-free coverage. With us, you get peace of mind knowing you
      <br className="hidden lg:block" />
      safeguarded against travel uncertainties.
    </p>

    <p className="mt-[30px] ml-[20px] lg:ml-[30px] pr-[20px] text-[14px] md:text-[15px]">
      Let us handle your travel protection while you focus on making memories! We guarantee a seamless
      <br className="hidden lg:block" />
      experience from consultation to policy issuance. Fill out our consultation form below, and let secure
      <br className="hidden lg:block" />
      your journey today! 🛡️✈️
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

export default Travel
