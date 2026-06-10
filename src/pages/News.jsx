import React from 'react'

import Navbar from '../component/Navbar';
import lane from "../assets/lane.jpg";
import visa from "../assets/visa.jpg";
import kat from "../assets/kat.jpg";
import Footer from '../component/Footer';
import { motion } from "framer-motion";


const News = () => {
  return (
    <div>
        
      <Navbar/>
<div
  style={{
    backgroundImage: `url(${lane})`,
    backgroundSize: "cover",
  }}
  className="flex-col md:flex-row mt-[50px]"
>
  <motion.div
    initial={{ y: -80, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.5 }}
  >
    <p className="text-center pt-[10%] text-[50px] font-bold text-white">
      Blog
    </p>

    <p className="text-center pt-[20px] text-[20px] text-white pb-[60px]">
      Home/Blog
    </p>
  </motion.div>
</div>

        
           <div className='flex-col md:flex-row'>
       
               <div>
                 <p className='text-center mt-[90px] text-[17px] text-purple-700'>OUR BLOGS</p>
       
                 <p className='text-[50px] font-bold text-center mt-[20px]'>News and Updates</p>
       
                 <p className='text-center mt-[30px] text-[17px]'>
                   Stay informed with our latest travel news, exclusive deals, and important updates.<br/>
                              Get the best tips and offers for your next journey! ✈️🌍</p>
               </div>
       
                  <div className='flex-col md:flex-row flex gap-[30px]'>
       
                <div className='mt-[70px]'>
       
             <img src={visa} className='w-[450px] ml-[20px] rounded-[8px]'/>
       
             <p className='ml-[20px] mt-[20px] text-[18px]'>June 6 2026</p>
       
             <p className='mt-[20px] text-[25px] font-bold ml-[20px] hover:text-orange-400 transition-colors duration-300 cursor-pointer mb-[20px]'>
               Hassle-Free Visa Procurement with<br/>
               Tranquilane Travels & Tours Limited</p>
       
              <a href='' className='text-orange-400 ml-[20px] mt-[20px] text-[20px] underline'>READ MORE</a>
               </div>
            
                <div className='mt-[70px] mb-[10%]'>
       
             <img src={kat} className='w-[450px] ml-[20px] rounded-[8px]'/>
       
             <p className='ml-[20px] mt-[20px] text-[18px]'>June 6 2026</p>
       
             <p className='mt-[20px] text-[25px] font-bold ml-[20px] hover:text-orange-400 transition-colors duration-300 cursor-pointer mb-[20px]'>
               Seamless Flight Booking with<br/>
               Tranquilane Travels and Tours Limited</p>
       
              <a href='' className='text-orange-400 ml-[20px] mt-[20px] text-[20px] underline'>READ MORE</a>
               </div>
       
        </div>

           </div>
        
        <Footer/>

    </div>
  )
}

export default News
