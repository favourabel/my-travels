import React from 'react'
import Navbar from '../component/Navbar'
import lane from "../assets/lane.jpg";
import { motion } from "framer-motion";
import Germany from "../assets/Germany.jpeg";
import poland from "../assets/poland.jpeg";
import egypr from "../assets/egypr.jpeg";
import quatar from "../assets/quatar.jpeg";
import good from "../assets/good.jpeg";
import berlin from "../assets/berlin.jpeg";
import winner from "../assets/winner.jpeg";
import Footer from '../component/Footer';

const Testimonies = () => {
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
  <motion.p
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.8 }}
    className="text-center pt-[10%] text-[50px] font-bold text-white"
  >
    Testimonies
  </motion.p>

  <motion.p
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="text-center pt-[30px] text-[25px] text-white pb-[10%]"
  >
    Home/ Testimonies
  </motion.p>
</div>
           
           <div style={{backgroundColor : "#FF61370D"}} className='flex-col md:flex-row'>

              <div>
        <p className='text-center pt-[70px] font-bold text-[40px] text-purple-700'>See It to Believe it</p>

        <p className='text-center pt-[40px] text-[20px] pb-[10%]'>
          At Macwise Travels,results speak louder than words. Explore real success<br/>
         stories through photos of approved visas, flight tickets, and happy clients.These<br/>
         are more than testimonies — they are proof that your travel dreams are possible with<br/>
                                        us. </p>
          </div>
<div className='px-[15px] md:px-0'>

  <div className='flex flex-col md:flex-row gap-[15px] items-center justify-center'>
    <div className='relative group overflow-hidden w-full md:w-auto'>
      <img
        src={Germany}
        className='w-full md:w-[650px] transition-transform duration-500 group-hover:scale-105'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
    </div>

    <div className='relative group overflow-hidden w-full md:w-auto'>
      <img
        src={poland}
        className='w-full md:w-[650px] transition-transform duration-500 group-hover:scale-105'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
    </div>
  </div>

  <div className='flex flex-col md:flex-row gap-[15px] items-center justify-center pt-[15px] md:pt-[30px]'>
    <div className='relative group overflow-hidden w-full md:w-auto'>
      <img
        src={egypr}
        className='w-full md:w-[650px] transition-transform duration-500 group-hover:scale-105'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
    </div>

    <div className='relative group overflow-hidden w-full md:w-auto'>
      <img
        src={quatar}
        className='w-full md:w-[650px] transition-transform duration-500 group-hover:scale-105'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
    </div>
  </div>

  <div className='flex flex-col md:flex-row gap-[15px] items-center justify-center pt-[15px] md:pt-[10px]'>
    <div className='relative group overflow-hidden w-full md:w-auto'>
      <img
        src={good}
        className='w-full md:w-[650px] transition-transform duration-500 group-hover:scale-105 md:pb-[80px]'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
    </div>

    <div className='relative group overflow-hidden w-full md:w-auto'>
      <img
        src={berlin}
        className='w-full md:w-[650px] transition-transform duration-500 group-hover:scale-105'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
    </div>
  </div>

</div>
   <motion.div
  style={{ backgroundColor: "white" }}
  className="flex flex-col lg:flex-row items-start gap-[40px] lg:gap-[10%] px-[20px] md:px-[40px] py-[60px] md:py-[80px]"
>

  {/* LEFT SIDE TEXT */}
  <motion.div
    initial={{ opacity: 0, x: -120 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    className="w-full lg:w-[40%] text-center lg:text-left"
  >
    <p className="text-orange-400 text-[16px] md:text-[20px] pt-[5%] lg:pt-[10%]">
      CLIENT FEEDBACK
    </p>

    <p className="font-bold text-[30px] sm:text-[36px] md:text-[43px] pt-[10px] leading-tight">
      What do people say
      <br className="hidden md:block" />
      about our services?
    </p>

    <p className="pt-[25px] md:pt-[40px] text-[15px] md:text-[16px] leading-relaxed">
      Hear from our happy travelers! See how Tranquilane
      <br className="hidden md:block" />
      Travels made their journeys seamless and
      <br className="hidden md:block" />
      unforgettable.
    </p>

    <button
      onClick={() => navigate("/testimonies")}
      className="bg-orange-400 text-white px-[40px] py-[15px] cursor-pointer mt-[40px] lg:mt-[21%] rounded-[30px] mb-[30px] lg:mb-[80px]"
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

      <div className="min-w-[260px] sm:min-w-[300px] md:min-w-[320px] snap-start shadow-lg p-4 rounded-xl bg-white">
        <p className="pt-[20px] md:pt-[40px] text-purple-700 text-[20px]">
          ★ ★ ★ ★ ★
        </p>

        <p className="pt-[10px] text-[14px] md:text-[16px]">
          The customized tour was beyond my expectations! Every detail was
          perfect, and the experience was unforgettable. Thank you,
          Tranquilane Travels! 🌍
        </p>

        <img src={winner} className="w-[120px] md:w-[200px] mx-auto" />

        <p className="text-center pt-[10px]">Fatima . K</p>
        <p className="text-center pt-[10px]">Abuja</p>
      </div>

      <div className="min-w-[260px] sm:min-w-[300px] md:min-w-[320px] snap-start shadow-lg p-4 rounded-xl bg-white">
        <p className="pt-[20px] md:pt-[40px] text-purple-700 text-[20px]">
          ★ ★ ★ ★ ★
        </p>

        <p className="pt-[10px] text-[14px] md:text-[16px]">
          Visa procurement was effortless with Tranquilane Travels. They guided
          me through every step, and I got my visa hassle-free! 🛂
        </p>

        <img src={winner} className="w-[120px] md:w-[200px] mx-auto" />

        <p className="text-center pt-[10px]">Emeka . N</p>
        <p className="text-center pt-[10px]">Enugu</p>
      </div>

      <div className="min-w-[260px] sm:min-w-[300px] md:min-w-[320px] snap-start shadow-lg p-4 rounded-xl bg-white">
        <p className="pt-[20px] md:pt-[40px] text-purple-700 text-[20px]">
          ★ ★ ★ ★ ★
        </p>

        <p className="pt-[10px] text-[14px] md:text-[16px]">
          Their hotel booking service was excellent! I got a great hotel at the
          best price. Will definitely use them again!
        </p>

        <img src={winner} className="w-[120px] md:w-[200px] mx-auto" />

        <p className="text-center pt-[10px]">Yetunde . A</p>
        <p className="text-center pt-[10px]">Port Harcourt</p>
      </div>

      <div className="min-w-[260px] sm:min-w-[300px] md:min-w-[320px] snap-start shadow-lg p-4 rounded-xl bg-white">
        <p className="pt-[20px] md:pt-[40px] text-purple-700 text-[20px]">
          ★ ★ ★ ★ ★
        </p>

        <p className="pt-[10px] text-[14px] md:text-[16px]">
          Amazing service! They helped me plan my dream vacation within my
          budget. Highly recommended.
        </p>

        <img src={winner} className="w-[120px] md:w-[200px] mx-auto" />

        <p className="text-center pt-[10px]">Gift . O</p>
        <p className="text-center pt-[10px]">Edo</p>
      </div>

      <div className="min-w-[260px] sm:min-w-[300px] md:min-w-[320px] snap-start shadow-lg p-4 rounded-xl bg-white">
        <p className="pt-[20px] md:pt-[40px] text-purple-700 text-[20px]">
          ★ ★ ★ ★ ★
        </p>

        <p className="pt-[10px] text-[14px] md:text-[16px]">
          Tranquilane Travels made my flight booking seamless and stress-free!
          Their service was fast, reliable, and affordable. Highly recommend!✈️
        </p>

        <img src={winner} className="w-[120px] md:w-[200px] mx-auto" />

        <p className="text-center pt-[10px]">Adebayo . O</p>
        <p className="text-center pt-[10px]">Lagos</p>
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

         <div
  style={{ backgroundColor: "#FF61370D" }}
  className="mt-[80px] mb-[10%]"
>
  <p className="text-orange-700 pl-[20px] md:pl-[50px] pt-[15%] md:pt-[10%] font-bold">
    GET IN TOUCH
  </p>

  <p className="pl-[20px] md:pl-[50px] text-[32px] sm:text-[40px] md:text-[50px] pt-[20px] md:pt-[30px] font-bold leading-tight">
    Leave Us A Message
  </p>

  <p className="pl-[20px] md:pl-[50px] pt-[20px] md:pt-[30px] text-[16px] md:text-[20px] pr-[20px]">
    Ready to travel? Contact us now for seamless bookings, expert advice,
    and unbeatable deals! 📞
  </p>

  <div className="flex flex-col pt-[40px] md:pt-[60px] px-[20px] md:pl-[30px]">
    <label>Your Name</label>
    <input
      type="text"
      className="p-[10px] bg-white rounded-[8px] mt-[10px] w-full md:w-[90%]"
    />
  </div>

  <div className="flex flex-col px-[20px] md:pl-[30px] mt-[20px]">
    <label>Email</label>
    <input
      type="text"
      className="p-[10px] bg-white rounded-[8px] mt-[10px] w-full md:w-[90%]"
    />
  </div>

  <div className="flex flex-col px-[20px] md:pl-[30px] mt-[20px]">
    <label>Subject</label>
    <input
      type="text"
      className="p-[10px] bg-white rounded-[8px] mt-[10px] w-full md:w-[90%]"
    />
  </div>

  <div className="flex flex-col px-[20px] md:pl-[30px] mt-[20px]">
    <label>Your Message(Optional)</label>
    <input
      type="text"
      className="p-[10px] bg-white rounded-[8px] mt-[10px] w-full md:w-[90%] pb-[60px]"
    />
  </div>

  <button className="bg-orange-400 mt-[20px] ml-[20px] md:ml-[30px] text-white px-[40px] md:px-[50px] py-[10px] rounded-[30px] mb-[15%]">
    Submit
  </button>

            <Footer/>
            
         </div>

    </div>
    </div>
  )
}

export default Testimonies
