import React from 'react'
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import lane from "../assets/lane.jpg";
import agent from "../assets/agent.jpg";
import moon from "../assets/moon.png";
import lady from "../assets/lady.png";
import { IoCheckmark } from "react-icons/io5";
import flight from "../assets/flight.jpg";
import hands from "../assets/hands.jpg";
import hotel from "../assets/hotel.jpg";
import clip from "../assets/clip.jpg";
import pack from "../assets/pack.jpg";
import visa from "../assets/visa.jpg";
import air from "../assets/air.jpeg";
import craft from "../assets/craft.jpeg";
import uma from "../assets/uma.jpeg";
import man from "../assets/man.jpeg";
import africa from "../assets/africa.jpeg";
import kid from "../assets/kid.jpeg";
import rocker from "../assets/rocker.jpg";
import kat from "../assets/kat.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import winner from "../assets/winner.jpeg";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const App = () => {

    const navigate = useNavigate();

  return (
    <div>

     <Navbar/>

      <motion.div
  style={{
    backgroundImage: `url(${lane})`,
    backgroundSize: "cover",
  }}
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1,
    ease: "easeOut",
  }}
>
  <motion.p
    className="text-[25px] pt-[10%] mt-[40px] ml-[40px] font-bold text-white"
    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    Seamless Journeys, Unforgettable Experiences.
  </motion.p>

  <motion.h1
    className="text-[70px] ml-[40px] font-bold mt-[30px] text-white"
    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    Tranquilane Travels
    <br />
    & Tours Limited
  </motion.h1>

  <motion.button
  className="bg-purple-600 text-white p-[15px_40px] cursor-pointer rounded-[30px] ml-[40px] mt-[50px] text-[20px]"
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  onClick={() => navigate("/Contact")}
>
  Contact Us
</motion.button>

  <motion.button
  className="bg-transparent text-[20px] border-[3px] border-purple-700 p-[15px_40px] ml-[20px] rounded-[30px] mb-[8%] text-white"
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.8 }}
  onClick={() => navigate("/packages")}
>
  Read More
</motion.button>
</motion.div>

    <div className='mb-[14%]'>

  <div className="flex items-center gap-[13%]">

    {/* Images Section (LEFT ANIMATION) */}
    <motion.div
      className="relative w-[600px] h-[600px] flex-shrink-0 mt-[7%]"
      initial={{ opacity: 0, x: -120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >

      <img
        src={agent}
        className="absolute top-5 left-5 w-[450px] rounded-xl"
        alt=""
      />

      <img
        src={moon}
        className="absolute top-0 right-20 left-130 w-28 ml-[60px]"
        alt=""
      />

      <img
        src={lady}
        className="absolute bottom-1 top-90 right-2 left-100 w-[350px] rounded-xl z-10"
        alt=""
      />

    </motion.div>

    {/* Text Section (RIGHT ANIMATION) */}
    <motion.div
      className=''
      initial={{ opacity: 0, x: 120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >

      <p className="text-purple-700 mt-[6%]">About Us</p>

      <p className="text-[40px] font-bold">
        Expert travel management<br/>
        for seamless, high-quality<br/>
        experiences.
      </p>

      <p className='pt-[60px] text-[17px]'>
        Founded in 2020 and incorporated in 2022, we provide expert travel<br/>
        management services to NGOs, government agencies, corporations,and<br/>
        individuals.
      </p>

      <div className='flex pt-[20px] gap-[10px] mt-[60px]'>
        <IoCheckmark className='text-purple-700 w-[30px] h-[30px] pt-[10px]'/>
        <p className='text-[18px] pt-[10px]'>
          Hassle-free bookings with expert travel support.
        </p>
      </div>

      <div className='flex pt-[20px] gap-[10px] mt-[10px]'>
        <IoCheckmark className='text-purple-700 w-[30px] h-[30px] pt-[10px]'/>
        <p className='text-[18px] pt-[10px]'>
          Tailored travel solutions for every need.
        </p>
      </div>

      <div className='flex pt-[20px] gap-[10px] mt-[10px]'>
        <IoCheckmark className='text-purple-700 font-bold w-[30px] h-[30px] pt-[10px]'/>
        <p className='text-[18px] pt-[10px]'>
          Competitive pricing with top-tier service quality.
        </p>
      </div>

     <button onClick={() => navigate("/packages")}
  className="bg-purple-700 p-[15px_30px] text-[20px] text-white mt-[10%] rounded-[30px]">
  Our Package
  </button>

    </motion.div>

  </div>

</div>

  <motion.div
  style={{ backgroundColor: "#FF61370D" }}
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>

  <motion.div>

    <motion.p
      className='text-[17px] text-purple-700 text-center pt-[10%]'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      WHAT WE DO
    </motion.p>

    <motion.p
      className='text-center font-bold text-[50px] pt-[30px]'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Our Services
    </motion.p>

    <motion.p
      className='pt-[60px] text-center text-grey-500 text-[18px]'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      With years of experience, industry partnerships, and a dedicated team, we deliver expert travel<br/>
      solutions, ensuring seamless bookings, personalized tours, and exceptional customer service.<br/>
      Click on any of the services below for more details.
    </motion.p>

  </motion.div>

  {/* FIRST ROW */}
  <motion.div
    className='flex gap-[6px] mt-[80px]'
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >

    <div>
      <img src={flight} className='w-[420px] rounded-[8px] border-b-[5px] border-orange-400'/>
      <p className='text-[27px] font-bold pt-[30px]'>Flight Booking</p>
      <p className='pt-[20px] text-[18px]'>
        Book flights effortlessly with Tranquilane Travels! Enjoy<br/>
        competitive fares, flexible options, and stress-free travel<br/>
        arrangements. Fly smarter, travel better! ✈️
      </p>
    </div>

    <div>
      <img src={hands} className='w-[420px] rounded-[8px] border-b-[5px] border-orange-400'/>
      <p className='text-[27px] font-bold pt-[30px]'>Customized Tours</p>
      <p className='pt-[20px] text-[18px]'>
        Explore the world your way! Our tailor-made tours cater<br/>
        to your unique interests, delivering unforgettable<br/>
        experiences. Adventure awaits—lets plan yours! 🌍
      </p>
    </div>

    <div>
      <img src={hotel} className='w-[420px] rounded-[8px] border-b-[5px] border-orange-400'/>
      <p className='text-[27px] font-bold pt-[30px]'>Hotel Reservations</p>
      <p className='pt-[20px] text-[18px]'>
        Stay in comfort anywhere! From luxury resorts to<br/>
        budget-friendly stays, we secure the best<br/>
        accommodations for you. Your perfect stay, guaranteed!
      </p>
    </div>

  </motion.div>

  {/* SECOND ROW */}
  <motion.div
    className='flex gap-[6px] mt-[80px] pb-[13%]'
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >

    <div>
      <img src={clip} className='w-[420px] rounded-[8px] border-b-[5px] border-orange-400'/>
      <p className='text-[27px] font-bold pt-[30px]'>Travel Issurance</p>
      <p className='pt-[20px] text-[18px]'>
        Travel with confidence! Our comprehensive travel<br/>
        insurance protects you from unexpected situations. Stay<br/>
        covered, travel worry-free! 🛡️
      </p>
    </div>

    <div>
      <img src={pack} className='w-[420px] rounded-[8px] border-b-[5px] border-orange-400'/>
      <p className='text-[27px] font-bold pt-[30px]'>Vacation Packages</p>
      <p className='pt-[20px] text-[18px]'>
        Dream vacations made easy! Discover exclusive<br/>
        getaways, from beach retreats to cultural adventures.<br/>
        Pack your bags—we’ll handle the rest! 🌴
      </p>
    </div>

    <div>
      <img src={visa} className='w-[420px] rounded-[8px] border-b-[5px] border-orange-400'/>
      <p className='text-[27px] font-bold pt-[30px]'>Visa Procurement</p>
      <p className='pt-[20px] text-[18px]'>
        Get your visa stress-free! Our experts streamline the<br/>
        process for individuals and businesses. Fast, reliable,<br/>
        and hassle-free visa services! 🛂
      </p>
    </div>

  </motion.div>

</motion.div>

   <motion.div
  initial={{ opacity: 0, y: -100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
>

  <div>

    <motion.div
      initial={{ opacity: 0, y: -60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <p className='text-center mt-[80px] text-[40px] font-bold'>Our Packages</p>

      <p className='text-center pt-[60px] text-[18px]'>
        Explore our exclusive travel packages designed for every adventure. From relaxing getaways<br/>
        to thrilling experiences, we have the perfect trip for you! 🌍✈️
      </p>
    </motion.div>

  </div>

  <motion.div
    className='flex justify-center items-center gap-[10px] mt-[80px]'
    initial={{ opacity: 0, y: -80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
  >

    <div>
      <img src={air} className='w-[430px] rounded-[6px]'/>
      <button onClick={() => navigate("/Contact")}
  className="bg-purple-700 text-white p-[12px_55px] ml-[15px] mt-[10px] rounded-[25px]">
  Book Now
  </button>
    </div>

    <div>
      <img src={craft} className='w-[430px] rounded-[6px]'/>
     <button onClick={() => navigate("/Contact")}
  className="bg-purple-700 text-white p-[12px_55px] ml-[15px] mt-[10px] rounded-[25px]">
  Book Now
</button>
    </div>

    <div>
      <img src={uma} className='w-[430px] rounded-[6px]'/>
      <button onClick={() => navigate("/Contact")}
  className="bg-purple-700 text-white p-[12px_55px] ml-[15px] mt-[10px] rounded-[25px]">
  Book Now
  </button>
    </div>

  </motion.div>

  <motion.div
    className='flex justify-center items-center gap-[10px] mt-[80px]'
    initial={{ opacity: 0, y: -80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
  >

    <div>
      <img src={man} className='w-[430px] rounded-[6px]'/>
      <button onClick={() => navigate("/Contact")}
  className="bg-purple-700 text-white p-[12px_55px] ml-[15px] mt-[10px] rounded-[25px]">
   Book Now
  </button>
    </div>

    <div>
      <img src={africa} className='w-[430px] rounded-[6px]'/>
     <button onClick={() => navigate("/Contact")}
   className="bg-purple-700 text-white p-[12px_55px] ml-[15px] mt-[10px] rounded-[25px]">
   Book Now
  </button>
    </div>

    <div>
      <img src={kid} className='w-[430px] rounded-[6px]'/>
     <button onClick={() => navigate("/Contact")}
    className="bg-purple-700 text-white p-[12px_55px] ml-[15px] mt-[10px] rounded-[25px]">
   Book Now
  </button>
    </div>

  </motion.div>

</motion.div>

     <button onClick={() => navigate("/news")}
  className="bg-orange-400 text-white p-[15px_50px] mt-[40px] rounded-[30px] ml-[20px] mb-[80px]">
  See All
</button>

      <motion.div
  style={{
    backgroundImage: `url(${rocker})`,
    backgroundSize: "cover",
  }}
  initial={{ opacity: 0, y: -120 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
>

  <motion.p
    className='text-center pt-[12%] font-bold text-white font-bold'
    initial={{ opacity: 0, y: -60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    TRUST IN US
  </motion.p>

  <motion.p
    className='text-center pt-[60px] font-bold text-[45px] text-white'
    initial={{ opacity: 0, y: -80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
  >
    Ready for your next adventure? Contact us<br/>
    now for seamless travel!
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: -60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
  >
    <center>
     <button onClick={() => navigate("/contact")}
  className='bg-orange-400 p-[15px_50px] mt-[70px] cursor-pointer rounded-[30px] text-white mb-[6%]'>
  Contact Us
  </button>
    </center>
  </motion.div>

</motion.div>
     <motion.div
  style={{ backgroundColor: "#FF61370D" }}
  className="flex items-start gap-[10%] px-[20px] py-[80px]"
>

  {/* LEFT SIDE TEXT */}
  <motion.div
    initial={{ opacity: 0, x: -120 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
  >
    <p className="text-orange-400 pl-[20px] text-[20px] pt-[10%]">
      CLIENT FEEDBACK
    </p>

    <p className="font-bold text-[43px] pl-[20px] pt-[10px]">
      What do people say<br />
      about our services?
    </p>

    <p className="pl-[20px] pt-[40px]">
      Hear from our happy travelers! See how Tranquilane<br />
      Travels made their journeys seamless and<br />
      unforgettable.
    </p>

    <button onClick={() => navigate("/testimonies")}
  className='bg-orange-400 text-white p-[15px_50px] cursor-pointer mt-[21%] rounded-[30px] mb-[80px]'>
  Read More
</button>
  </motion.div>

  {/* RIGHT SIDE SLIDER */}
  <motion.div
    className="w-[700px]"
    initial={{ opacity: 0, x: 120 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
  >

    {/* SCROLL AREA */}
    <div
      id="testimonialScroll"
      className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
    >

      <div className="min-w-[320px] snap-start shadow-lg p-4 rounded-xl bg-white">
        <p className="pt-[40px] text-purple-700 text-[20px]">
          ★ ★ ★ ★ ★
        </p>

        <p className="pt-[10px]">
             The customized tour was beyond my<br/>
      expectations! Every detail was perfect, and the<br/>
         experience was unforgettable. Thank you,<br/>
             Tranquilane Travels! 🌍</p>

        <img src={winner} className="w-[200px] pl-[60px]" />

        <p className="pl-[90px] pt-[10px]">
          Fatima . K
        </p>

        <p className="pl-[90px] pt-[10px]">
          Abuja
        </p>
      </div>

      <div className="min-w-[320px] snap-start shadow-lg p-4 rounded-xl bg-white">
        <p className="pt-[40px] text-purple-700 text-[20px]">
          ★ ★ ★ ★ ★
        </p>

        <p className="pt-[10px]">
          Visa procurement was effortless with<br/>
       Tranquilane Travels. They guided me through<br/>
        every step, and I got my visa hassle-free! 🛂</p>

        <img src={winner} className="w-[200px] pl-[60px]" />

        <p className="pl-[90px] pt-[10px]">
          Emeka . N
        </p>

        <p className="pl-[90px] pt-[10px]">
          Enugu
        </p>
      </div>

      <div className="min-w-[320px] snap-start shadow-lg p-4 rounded-xl bg-white">
        <p className="pt-[40px] text-purple-700 text-[20px]">
          ★ ★ ★ ★ ★
        </p>

        <p className="pt-[10px]">
          Their hotel booking service was excellent! I got a<br/>
           great hotel at the best price. Will definitely use<br/>
                           them again!</p>

        <img src={winner} className="w-[200px] pl-[60px]" />

        <p className="pl-[90px] pt-[10px]">
          Yetunde . A
        </p>

        <p className="pl-[90px] pt-[10px]">
          Port Harcourt
        </p>
      </div>

      <div className="min-w-[320px] snap-start shadow-lg p-4 rounded-xl bg-white">
        <p className="pt-[40px] text-purple-700 text-[20px]">
          ★ ★ ★ ★ ★
        </p>

        <p className="pt-[10px]">
          Amazing service! They helped me<br/>
      plan my dream vacation within my budget.<br/>
              Highly recommended</p>

        <img src={winner} className="w-[200px] pl-[60px]" />

        <p className="pl-[90px] pt-[10px]">
          Gift . O
        </p>

        <p className="pl-[90px] pt-[10px]">
          Edo
        </p>
      </div>

      <div className="min-w-[320px] snap-start shadow-lg p-4 rounded-xl bg-white">
        <p className="pt-[40px] text-purple-700 text-[20px]">
          ★ ★ ★ ★ ★
        </p>

        <p className="pt-[10px]">
          Tranquilane Travels made my flight booking<br />
          seamless and stress-free! Their service was fast,<br />
          reliable, and affordable. Highly recommend!✈️
        </p>

        <img src={winner} className="w-[200px] pl-[60px]" />

        <p className="pl-[90px] pt-[10px]">
          Adebayo . O
        </p>

        <p className="pl-[90px] pt-[10px]">
          Lagos
        </p>
      </div>

    </div>

    {/* DOTS */}
    <div className="flex justify-center gap-3 mt-6">

      <button
        onClick={() =>
          document.getElementById("testimonialScroll").scrollLeft = 0
        }
        className="w-3 h-3 rounded-full bg-purple-700"
      />

      <button
        onClick={() =>
          document.getElementById("testimonialScroll").scrollLeft = 350
        }
        className="w-3 h-3 rounded-full bg-purple-700"
      />

      <button
        onClick={() =>
          document.getElementById("testimonialScroll").scrollLeft = 700
        }
        className="w-3 h-3 rounded-full bg-purple-700"
      />

    </div>

  </motion.div>

</motion.div>
    
    <div>

        <div>
          <p className='text-center mt-[90px] text-[17px] text-purple-700'>OUR BLOGS</p>

          <p className='text-[50px] font-bold text-center mt-[20px]'>News and Updates</p>

          <p className='text-center mt-[30px] text-[17px]'>
            Stay informed with our latest travel news, exclusive deals, and important updates.<br/>
                       Get the best tips and offers for your next journey! ✈️🌍</p>
        </div>

           <div className='flex gap-[30px]'>

         <div className='mt-[70px]'>

      <img src={visa} className='w-[450px] ml-[20px] rounded-[8px]'/>

      <p className='ml-[20px] mt-[20px] text-[18px]'>June 6 2026</p>

      <p className='mt-[20px] text-[25px] font-bold ml-[20px] hover:text-orange-400 transition-colors duration-300 cursor-pointer mb-[20px]'>
        Hassle-Free Visa Procurement with<br/>
        Tranquilane Travels & Tours Limited</p>

    <a
  onClick={() => navigate("/packages")} className="text-orange-400 ml-[20px] mt-[20px] text-[20px] underline cursor-pointer">
  READ MORE
  </a>
        </div>
     
         <div className='mt-[70px]'>

      <img src={kat} className='w-[450px] ml-[20px] rounded-[8px]'/>

      <p className='ml-[20px] mt-[20px] text-[18px]'>June 6 2026</p>

      <p className='mt-[20px] text-[25px] font-bold ml-[20px] hover:text-orange-400 transition-colors duration-300 cursor-pointer mb-[20px]'>
        Seamless Flight Booking with<br/>
        Tranquilane Travels and Tours Limited</p>

       <a onClick={() => navigate("/packages")} className="text-orange-400 ml-[20px] mt-[20px] text-[20px] underline cursor-pointer">
      READ MORE
      </a>
        </div>

 </div>
     <button onClick={() => navigate("/news")}
  className="bg-black text-white p-[15px_50px] mt-[40px] rounded-[30px] ml-[20px] mb-[80px]">
  See All
 </button>
    </div>


     <Footer/>

    </div>
  )
}

export default App
