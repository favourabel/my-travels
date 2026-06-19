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
    <div className="overflow-x-hidden">

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
  }} className='flex flex-col px-4 sm:px-6 md:px-10'>
  <motion.p
    className="text-base sm:text-lg md:text-[25px] pt-[10%] mt-[40px] font-bold text-white"
    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    Seamless Journeys, Unforgettable Experiences.
  </motion.p>

  <motion.h1
    className="text-[28px] sm:text-[40px] md:text-[55px] lg:text-[70px] font-bold mt-[20px] sm:mt-[30px] text-white leading-tight"
    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    Tranquilane Travels
    <br />
    & Tours Limited
  </motion.h1>

  <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-[30px] sm:mt-[50px] mb-[8%]">
  <motion.button
  className="bg-purple-600 text-white p-[12px_30px] sm:p-[15px_40px] cursor-pointer rounded-[30px] text-[16px] sm:text-[20px]"
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  onClick={() => navigate("/Contact")}
>
  Contact Us
</motion.button>

  <motion.button
  className="bg-transparent text-[16px] sm:text-[20px] border-[3px] border-purple-700 p-[12px_30px] sm:p-[15px_40px] rounded-[30px] text-white"
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.8 }}
  onClick={() => navigate("/packages")}
>
  Read More
</motion.button>
  </div>
</motion.div>

  <div className='mb-[8%] md:mb-[14%] px-[15px] sm:px-[20px] md:px-[40px]'>

  <div className="flex flex-col md:flex-row items-center gap-[30px] sm:gap-[50px] md:gap-[8%] lg:gap-[13%]">

    {/* Images Section (LEFT ANIMATION) */}
    <motion.div
      className="relative w-full max-w-[600px] h-[280px] sm:h-[350px] md:h-[600px] flex-shrink-0 mt-[7%]"
      initial={{ opacity: 0, x: -120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >

      <img
        src={agent}
        className="absolute top-5 left-0 md:left-5 w-[200px] sm:w-[280px] md:w-[350px] lg:w-[450px] rounded-xl"
        alt=""
      />

      <img
        src={moon}
        className="absolute top-0 right-5 md:right-20 w-[70px] md:w-28 hidden md:block"
        alt=""
      />

      <img
        src={lady}
        className="absolute bottom-0 right-0 md:right-2 w-[180px] sm:w-[250px] md:w-[350px] rounded-xl z-10 hidden md:block"
        alt=""
      />

    </motion.div>

    {/* Text Section (RIGHT ANIMATION) */}
    <motion.div
      className='w-full text-center md:text-left'
      initial={{ opacity: 0, x: 120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >

      <p className="text-purple-700 mt-[6%]">
        About Us
      </p>

      <p className="text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold leading-tight">
        Expert travel management
        <br className="hidden md:block" />
        for seamless, high-quality
        <br className="hidden md:block" />
        experiences.
      </p>

      <p className='pt-[20px] sm:pt-[30px] md:pt-[60px] text-[14px] sm:text-[16px] md:text-[17px] leading-relaxed'>
        Founded in 2020 and incorporated in 2022, we provide expert travel
        <br className="hidden md:block" />
        management services to NGOs, government agencies, corporations,and
        <br className="hidden md:block" />
        individuals.
      </p>

      <div className='flex items-start md:items-center justify-center md:justify-start pt-[15px] sm:pt-[20px] gap-[10px] mt-[20px] sm:mt-[30px] md:mt-[60px] text-left'>
        <IoCheckmark className='text-purple-700 w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] flex-shrink-0 pt-[5px]'/>
        <p className='text-[14px] sm:text-[16px] md:text-[18px]'>
          Hassle-free bookings with expert travel support.
        </p>
      </div>

      <div className='flex items-start md:items-center justify-center md:justify-start pt-[15px] sm:pt-[20px] gap-[10px] mt-[10px] text-left'>
        <IoCheckmark className='text-purple-700 w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] flex-shrink-0 pt-[5px]'/>
        <p className='text-[14px] sm:text-[16px] md:text-[18px]'>
          Tailored travel solutions for every need.
        </p>
      </div>

      <div className='flex items-start md:items-center justify-center md:justify-start pt-[15px] sm:pt-[20px] gap-[10px] mt-[10px] text-left'>
        <IoCheckmark className='text-purple-700 font-bold w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] flex-shrink-0 pt-[5px]'/>
        <p className='text-[14px] sm:text-[16px] md:text-[18px]'>
          Competitive pricing with top-tier service quality.
        </p>
      </div>

      <button
        onClick={() => navigate("/packages")}
        className="bg-purple-700 p-[12px_25px] sm:p-[15px_30px] text-[16px] sm:text-[18px] md:text-[20px] text-white mt-[8%] sm:mt-[10%] rounded-[30px]"
      >
        Our Package
      </button>

    </motion.div>

  </div>

</div>

  <motion.div
  style={{ backgroundColor: "#FF61370D" }}
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }} className='px-4 sm:px-6 md:px-10 lg:px-16'>

  <motion.div>

    <motion.p
      className='text-[15px] sm:text-[17px] text-purple-700 text-center pt-[10%]'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      WHAT WE DO
    </motion.p>

    <motion.p
      className='text-center font-bold text-[30px] sm:text-[40px] md:text-[50px] pt-[20px] sm:pt-[30px]'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Our Services
    </motion.p>

    <motion.p
      className='pt-[30px] sm:pt-[40px] md:pt-[60px] text-center text-grey-500 text-[14px] sm:text-[16px] md:text-[18px] max-w-[800px] mx-auto'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      With years of experience, industry partnerships, and a dedicated team, we deliver expert travel
      solutions, ensuring seamless bookings, personalized tours, and exceptional customer service.
      Click on any of the services below for more details.
    </motion.p>

  </motion.div>

  {/* FIRST ROW */}
  <motion.div
    className='flex flex-col md:flex-row gap-[30px] sm:gap-[40px] md:gap-[20px] lg:gap-[6px] mt-[50px] sm:mt-[60px] md:mt-[80px] items-center'
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >

    <div className='w-full max-w-[420px]'>
      <img src={flight} className='w-full rounded-[8px] border-b-[5px] border-orange-400'/>
      <p className='text-[20px] sm:text-[24px] md:text-[27px] font-bold pt-[20px] sm:pt-[30px]'>Flight Booking</p>
      <p className='pt-[15px] sm:pt-[20px] text-[14px] sm:text-[16px] md:text-[18px]'>
        Book flights effortlessly with Tranquilane Travels! Enjoy
        competitive fares, flexible options, and stress-free travel
        arrangements. Fly smarter, travel better! ✈️
      </p>
    </div>

    <div className='w-full max-w-[420px]'>
      <img src={hands} className='w-full rounded-[8px] border-b-[5px] border-orange-400'/>
      <p className='text-[20px] sm:text-[24px] md:text-[27px] font-bold pt-[20px] sm:pt-[30px]'>Customized Tours</p>
      <p className='pt-[15px] sm:pt-[20px] text-[14px] sm:text-[16px] md:text-[18px]'>
        Explore the world your way! Our tailor-made tours cater
        to your unique interests, delivering unforgettable
        experiences. Adventure awaits—lets plan yours! 🌍
      </p>
    </div>

    <div className='w-full max-w-[420px]'>
      <img src={hotel} className='w-full rounded-[8px] border-b-[5px] border-orange-400'/>
      <p className='text-[20px] sm:text-[24px] md:text-[27px] font-bold pt-[20px] sm:pt-[30px]'>Hotel Reservations</p>
      <p className='pt-[15px] sm:pt-[20px] text-[14px] sm:text-[16px] md:text-[18px]'>
        Stay in comfort anywhere! From luxury resorts to
        budget-friendly stays, we secure the best
        accommodations for you. Your perfect stay, guaranteed!
      </p>
    </div>

  </motion.div>

  {/* SECOND ROW */}
  <motion.div
    className='flex flex-col md:flex-row gap-[30px] sm:gap-[40px] md:gap-[20px] lg:gap-[6px] mt-[50px] sm:mt-[60px] md:mt-[80px] pb-[8%] sm:pb-[10%] md:pb-[13%] items-center'
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >

    <div className='w-full max-w-[420px]'>
      <img src={clip} className='w-full rounded-[8px] border-b-[5px] border-orange-400'/>
      <p className='text-[20px] sm:text-[24px] md:text-[27px] font-bold pt-[20px] sm:pt-[30px]'>Travel Issurance</p>
      <p className='pt-[15px] sm:pt-[20px] text-[14px] sm:text-[16px] md:text-[18px]'>
        Travel with confidence! Our comprehensive travel
        insurance protects you from unexpected situations. Stay
        covered, travel worry-free! 🛡️
      </p>
    </div>

    <div className='w-full max-w-[420px]'>
      <img src={pack} className='w-full rounded-[8px] border-b-[5px] border-orange-400'/>
      <p className='text-[20px] sm:text-[24px] md:text-[27px] font-bold pt-[20px] sm:pt-[30px]'>Vacation Packages</p>
      <p className='pt-[15px] sm:pt-[20px] text-[14px] sm:text-[16px] md:text-[18px]'>
        Dream vacations made easy! Discover exclusive
        getaways, from beach retreats to cultural adventures.
        Pack your bags—we'll handle the rest! 🌴
      </p>
    </div>

    <div className='w-full max-w-[420px]'>
      <img src={visa} className='w-full rounded-[8px] border-b-[5px] border-orange-400'/>
      <p className='text-[20px] sm:text-[24px] md:text-[27px] font-bold pt-[20px] sm:pt-[30px]'>Visa Procurement</p>
      <p className='pt-[15px] sm:pt-[20px] text-[14px] sm:text-[16px] md:text-[18px]'>
        Get your visa stress-free! Our experts streamline the
        process for individuals and businesses. Fast, reliable,
        and hassle-free visa services! 🛂
      </p>
    </div>

  </motion.div>

</motion.div>

   <motion.div
  initial={{ opacity: 0, y: -100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  className='px-4 sm:px-6 md:px-10'
>

  <div>

    <motion.div
      initial={{ opacity: 0, y: -60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <p className='text-center mt-[50px] sm:mt-[60px] md:mt-[80px] text-[28px] sm:text-[35px] md:text-[40px] font-bold'>Our Packages</p>

      <p className='text-center pt-[30px] sm:pt-[40px] md:pt-[60px] text-[14px] sm:text-[16px] md:text-[18px] max-w-[700px] mx-auto'>
        Explore our exclusive travel packages designed for every adventure. From relaxing getaways
        to thrilling experiences, we have the perfect trip for you! 🌍✈️
      </p>
    </motion.div>

  </div>

  <motion.div
    className='flex flex-col sm:flex-row flex-wrap justify-center items-center gap-[20px] sm:gap-[10px] mt-[50px] sm:mt-[60px] md:mt-[80px]'
    initial={{ opacity: 0, y: -80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
  >

    <div className='w-full sm:w-[48%] lg:w-[31%] max-w-[430px]'>
      <img src={air} className='w-full rounded-[6px]'/>
      <button onClick={() => navigate("/Contact")}
  className="bg-purple-700 text-white p-[10px_40px] sm:p-[12px_55px] ml-[15px] mt-[10px] rounded-[25px]">
  Book Now
  </button>
    </div>

    <div className='w-full sm:w-[48%] lg:w-[31%] max-w-[430px]'>
      <img src={craft} className='w-full rounded-[6px]'/>
     <button onClick={() => navigate("/Contact")}
  className="bg-purple-700 text-white p-[10px_40px] sm:p-[12px_55px] ml-[15px] mt-[10px] rounded-[25px]">
  Book Now
</button>
    </div>

    <div className='w-full sm:w-[48%] lg:w-[31%] max-w-[430px]'>
      <img src={uma} className='w-full rounded-[6px]'/>
      <button onClick={() => navigate("/Contact")}
  className="bg-purple-700 text-white p-[10px_40px] sm:p-[12px_55px] ml-[15px] mt-[10px] rounded-[25px]">
  Book Now
  </button>
    </div>

  </motion.div>

  <motion.div
    className='flex flex-col sm:flex-row flex-wrap justify-center items-center gap-[20px] sm:gap-[10px] mt-[30px] sm:mt-[50px] md:mt-[80px]'
    initial={{ opacity: 0, y: -80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
  >

    <div className='w-full sm:w-[48%] lg:w-[31%] max-w-[430px]'>
      <img src={man} className='w-full rounded-[6px]'/>
      <button onClick={() => navigate("/Contact")}
  className="bg-purple-700 text-white p-[10px_40px] sm:p-[12px_55px] ml-[15px] mt-[10px] rounded-[25px]">
   Book Now
  </button>
    </div>

    <div className='w-full sm:w-[48%] lg:w-[31%] max-w-[430px]'>
      <img src={africa} className='w-full rounded-[6px]'/>
     <button onClick={() => navigate("/Contact")}
   className="bg-purple-700 text-white p-[10px_40px] sm:p-[12px_55px] ml-[15px] mt-[10px] rounded-[25px]">
   Book Now
  </button>
    </div>

    <div className='w-full sm:w-[48%] lg:w-[31%] max-w-[430px]'>
      <img src={kid} className='w-full rounded-[6px]'/>
     <button onClick={() => navigate("/Contact")}
    className="bg-purple-700 text-white p-[10px_40px] sm:p-[12px_55px] ml-[15px] mt-[10px] rounded-[25px]">
   Book Now
  </button>
    </div>

  </motion.div>

</motion.div>

     <button onClick={() => navigate("/news")}
  className="bg-orange-400 text-white p-[12px_35px] sm:p-[15px_50px] mt-[40px] rounded-[30px] ml-[15px] sm:ml-[20px] mb-[50px] sm:mb-[80px]">
  See All
</button>

      <motion.div
  style={{
    backgroundImage: `url(${rocker})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  initial={{ opacity: 0, y: -120 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }} className='px-4 sm:px-6 md:px-10'>

  <motion.p
    className='text-center pt-[12%] font-bold text-white text-[14px] sm:text-[16px] md:text-base'
    initial={{ opacity: 0, y: -60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    TRUST IN US
  </motion.p>

  <motion.p
    className='text-center pt-[30px] sm:pt-[40px] md:pt-[60px] font-bold text-[22px] sm:text-[30px] md:text-[38px] lg:text-[45px] text-white leading-tight max-w-[900px] mx-auto'
    initial={{ opacity: 0, y: -80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
  >
    Ready for your next adventure? Contact us
    now for seamless travel!
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: -60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
  >
    <center>
     <button onClick={() => navigate("/contact")}
  className='bg-orange-400 p-[12px_35px] sm:p-[15px_50px] mt-[40px] sm:mt-[70px] cursor-pointer rounded-[30px] text-white mb-[6%]'>
  Contact Us
  </button>
    </center>
  </motion.div>

</motion.div>

  <motion.div style={{ backgroundColor: "#FF61370D" }}
  className="flex flex-col lg:flex-row items-start gap-[40px] lg:gap-[10%] px-[15px] sm:px-[20px] md:px-[40px] py-[40px] sm:py-[60px] md:py-[80px]">

  {/* LEFT SIDE TEXT */}
  <motion.div
    initial={{ opacity: 0, x: -120 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    className="w-full lg:w-[40%] text-center lg:text-left"
  >
    <p className="text-orange-400 text-[14px] sm:text-[16px] md:text-[20px] pt-[5%] lg:pt-[10%]">
      CLIENT FEEDBACK
    </p>

    <p className="font-bold text-[24px] sm:text-[30px] md:text-[36px] lg:text-[43px] pt-[10px] leading-tight">
      What do people say
      <br className="hidden md:block" />
      about our services?
    </p>

    <p className="pt-[20px] sm:pt-[25px] md:pt-[40px] text-[13px] sm:text-[15px] md:text-[16px] leading-relaxed">
      Hear from our happy travelers! See how Tranquilane
      <br className="hidden md:block" />
      Travels made their journeys seamless and
      <br className="hidden md:block" />
      unforgettable.
    </p>

    <button
      onClick={() => navigate("/testimonies")}
      className="bg-orange-400 text-white px-[30px] sm:px-[40px] py-[12px] sm:py-[15px] cursor-pointer mt-[30px] sm:mt-[40px] lg:mt-[21%] rounded-[30px] mb-[20px] sm:mb-[30px] lg:mb-[80px]"
    >
      Read More
    </button>
  </motion.div>

  {/* RIGHT SIDE SLIDER */}
  <motion.div
    className="w-full lg:w-[700px]"
    initial={{ opacity: 0, x: 120 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
  >

    <div
      id="testimonialScroll"
      className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
    >

      <div className="min-w-[240px] sm:min-w-[280px] md:min-w-[320px] snap-start shadow-lg p-4 rounded-xl bg-white">
        <p className="pt-[20px] md:pt-[40px] text-purple-700 text-[18px] sm:text-[20px]">
          ★ ★ ★ ★ ★
        </p>

        <p className="pt-[10px] text-[13px] sm:text-[14px] md:text-[16px]">
          The customized tour was beyond my expectations! Every detail was
          perfect, and the experience was unforgettable. Thank you,
          Tranquilane Travels! 🌍
        </p>

        <img src={winner} className="w-[100px] sm:w-[120px] md:w-[200px] mx-auto" />

        <p className="text-center pt-[10px] text-[14px] sm:text-base">Fatima . K</p>
        <p className="text-center pt-[10px] text-[14px] sm:text-base">Abuja</p>
      </div>

      <div className="min-w-[240px] sm:min-w-[280px] md:min-w-[320px] snap-start shadow-lg p-4 rounded-xl bg-white">
        <p className="pt-[20px] md:pt-[40px] text-purple-700 text-[18px] sm:text-[20px]">
          ★ ★ ★ ★ ★
        </p>

        <p className="pt-[10px] text-[13px] sm:text-[14px] md:text-[16px]">
          Visa procurement was effortless with Tranquilane Travels. They guided
          me through every step, and I got my visa hassle-free! 🛂
        </p>

        <img src={winner} className="w-[100px] sm:w-[120px] md:w-[200px] mx-auto" />

        <p className="text-center pt-[10px] text-[14px] sm:text-base">Emeka . N</p>
        <p className="text-center pt-[10px] text-[14px] sm:text-base">Enugu</p>
      </div>

      <div className="min-w-[240px] sm:min-w-[280px] md:min-w-[320px] snap-start shadow-lg p-4 rounded-xl bg-white">
        <p className="pt-[20px] md:pt-[40px] text-purple-700 text-[18px] sm:text-[20px]">
          ★ ★ ★ ★ ★
        </p>

        <p className="pt-[10px] text-[13px] sm:text-[14px] md:text-[16px]">
          Their hotel booking service was excellent! I got a great hotel at the
          best price. Will definitely use them again!
        </p>

        <img src={winner} className="w-[100px] sm:w-[120px] md:w-[200px] mx-auto" />

        <p className="text-center pt-[10px] text-[14px] sm:text-base">Yetunde . A</p>
        <p className="text-center pt-[10px] text-[14px] sm:text-base">Port Harcourt</p>
      </div>

      <div className="min-w-[240px] sm:min-w-[280px] md:min-w-[320px] snap-start shadow-lg p-4 rounded-xl bg-white">
        <p className="pt-[20px] md:pt-[40px] text-purple-700 text-[18px] sm:text-[20px]">
          ★ ★ ★ ★ ★
        </p>

        <p className="pt-[10px] text-[13px] sm:text-[14px] md:text-[16px]">
          Amazing service! They helped me plan my dream vacation within my
          budget. Highly recommended.
        </p>

        <img src={winner} className="w-[100px] sm:w-[120px] md:w-[200px] mx-auto" />

        <p className="text-center pt-[10px] text-[14px] sm:text-base">Gift . O</p>
        <p className="text-center pt-[10px] text-[14px] sm:text-base">Edo</p>
      </div>

      <div className="min-w-[240px] sm:min-w-[280px] md:min-w-[320px] snap-start shadow-lg p-4 rounded-xl bg-white">
        <p className="pt-[20px] md:pt-[40px] text-purple-700 text-[18px] sm:text-[20px]">
          ★ ★ ★ ★ ★
        </p>

        <p className="pt-[10px] text-[13px] sm:text-[14px] md:text-[16px]">
          Tranquilane Travels made my flight booking seamless and stress-free!
          Their service was fast, reliable, and affordable. Highly recommend!✈️
        </p>

        <img src={winner} className="w-[100px] sm:w-[120px] md:w-[200px] mx-auto" />

        <p className="text-center pt-[10px] text-[14px] sm:text-base">Adebayo . O</p>
        <p className="text-center pt-[10px] text-[14px] sm:text-base">Lagos</p>
      </div>

    </div>

    {/* DOTS */}
    <div className="flex justify-center gap-3 mt-6">
      <button
        onClick={() =>
          (document.getElementById("testimonialScroll").scrollLeft = 0)
        }
        className="w-3 h-3 rounded-full bg-purple-700"
      />

      <button
        onClick={() =>
          (document.getElementById("testimonialScroll").scrollLeft = 350)
        }
        className="w-3 h-3 rounded-full bg-purple-700"
      />

      <button
        onClick={() =>
          (document.getElementById("testimonialScroll").scrollLeft = 700)
        }
        className="w-3 h-3 rounded-full bg-purple-700"
      />
    </div>

  </motion.div>

</motion.div>
    <div className='px-4 sm:px-6 md:px-10'>

        <div className='text-center'>
          <p className='text-center mt-[50px] sm:mt-[70px] md:mt-[90px] text-[15px] sm:text-[17px] text-purple-700'>OUR BLOGS</p>

          <p className='text-[28px] sm:text-[38px] md:text-[50px] font-bold text-center mt-[15px] sm:mt-[20px]'>News and Updates</p>

          <p className='text-center mt-[20px] sm:mt-[30px] text-[14px] sm:text-[16px] md:text-[17px] max-w-[700px] mx-auto'>
            Stay informed with our latest travel news, exclusive deals, and important updates.
                       Get the best tips and offers for your next journey! ✈️🌍</p>
        </div>

           <div className='flex flex-col md:flex-row gap-[30px] justify-center'>

         <div className='mt-[40px] sm:mt-[50px] md:mt-[70px] w-full md:w-[48%] max-w-[500px]'>

      <img src={visa} className='w-full max-w-[450px] rounded-[8px]'/>

      <p className='mt-[15px] sm:mt-[20px] text-[15px] sm:text-[18px]'>June 6 2026</p>

      <p className='mt-[15px] sm:mt-[20px] text-[20px] sm:text-[23px] md:text-[25px] font-bold hover:text-orange-400 transition-colors duration-300 cursor-pointer mb-[15px] sm:mb-[20px]'>
        Hassle-Free Visa Procurement with
        Tranquilane Travels & Tours Limited</p>

    <a
  onClick={() => navigate("/packages")} className="text-orange-400 mt-[15px] sm:mt-[20px] text-[16px] sm:text-[18px] md:text-[20px] underline cursor-pointer">
  READ MORE
  </a>
        </div>
     
         <div className='mt-[40px] sm:mt-[50px] md:mt-[70px] w-full md:w-[48%] max-w-[500px]'>

      <img src={kat} className='w-full max-w-[450px] rounded-[8px]'/>

      <p className='mt-[15px] sm:mt-[20px] text-[15px] sm:text-[18px]'>June 6 2026</p>

      <p className='mt-[15px] sm:mt-[20px] text-[20px] sm:text-[23px] md:text-[25px] font-bold hover:text-orange-400 transition-colors duration-300 cursor-pointer mb-[15px] sm:mb-[20px]'>
        Seamless Flight Booking with
        Tranquilane Travels and Tours Limited</p>

       <a onClick={() => navigate("/packages")} className="text-orange-400 mt-[15px] sm:mt-[20px] text-[16px] sm:text-[18px] md:text-[20px] underline cursor-pointer">
      READ MORE
      </a>
        </div>

 </div>
     <button onClick={() => navigate("/news")}
  className="bg-black text-white p-[12px_35px] sm:p-[15px_50px] mt-[30px] sm:mt-[40px] rounded-[30px] mb-[50px] sm:mb-[80px]">
  See All
 </button>
    </div>


     <Footer/>

    </div>
  )
}

export default App