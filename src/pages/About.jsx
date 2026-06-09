import React from 'react'
import Navbar from '../component/Navbar'
import lady from "../assets/lady.png";
import agent from "../assets/agent.jpg";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const About = () => {
  return (
    <div>

      <Navbar/>

      <div style={{backgroundImage: `url(${lady})`,backgroundSize: "cover",}} className='py-[60px] mt-[40px] mb-[60px]'>
        <p className='text-center mt-[10%] font-bold text-[60px] text-white'>About Us</p>

        <p className='text-center pt-[20px] text-[20px] text-white'>Home/About Us</p>
      </div>

       <div className='flex gap-[40px]'>

          <div>

        <img src={agent} className='w-[900px] rounded-[8px] mt-[60px] ml-[30px]'/>

          <p className='ml-[30px] font-bold text-[40px] mt-[20px]'>MACWISE TRAVELS LTD.</p>

            <p className='ml-[30px] mt-[20px] text-[16px]'>
             Macwise Travels & Tours Limited is a leading Travel Management company, founded in 2020 and incorporated in<br/>
             2022. We specialize in managing the travel needs of NGOs, government agencies, multinational corporations, private<br/>
             firms, and individuals. As proud members of the National Association of Nigerian Travel Agencies (NANTA), the Nigerian<br/>
             Civil Aviation Authority (NCAA), and the National Association of Tour Operators (NATOP), we uphold the highest industry<br/>
              standards.</p>

             <p className='ml-[30px] mt-[70px]'>
                Our services are designed to be high-quality, timely, and client-focused, ensuring a seamless travel experience.<br/>
                Whether for business or leisure, we help our clients make informed travel decisions with ease and confidence.</p>

           </div> 

        <div className='mt-[60px]'>

               <form style={{backgroundColor : "#FF61370D"}} className='pt-[60px] h-[98%] rounded-[8px]'>

           <p className='font-bold text-[20px] pl-[40px] mb-[30px]'>Get In Touch</p>

           <div className='flex flex-col pl-[40px]'>
             <label htmlFor ='mt-[30px]'>Your Name</label>
             <input type='text' className='w-[90%] bg-white rounded-[4px] pt-[10px] mt-[10px] border-none p-[2px] pl-[90px]'/>
           </div>

            <div className='flex flex-col pl-[40px]'>
              <label htmlFor=''>Your Email</label>
              <input type='text'  className='w-[90%] bg-white rounded-[4px] pt-[10px] mt-[10px] border-none p-[2px]'/>
           </div>

              <div className='flex flex-col pl-[40px]'>
              <label htmlFor=''>Subject</label>
              <input type='text'  className='w-[90%] bg-white rounded-[4px] pt-[10px] mt-[10px] border-none p-[2px]'/>
           </div>
            
           <div className='flex flex-col pl-[40px]'>
              <label htmlFor=''>Your Message(Optional)</label>
              <input type='text'  className='w-[90%] bg-white rounded-[4px] pt-[10px] mt-[10px] border-none p-[2px] pb-[90px]'/>
           </div>

           <button className='ml-[40px] bg-orange-400 mt-[30px] text-white rounded-[30px] p-[7px_40px] cursor-pointer'>Submit</button>

           <p className='pl-[40px] pt-[60px] text-[30px] font-bold'>Contact Us</p>

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

    </div>
  )
}

export default About
