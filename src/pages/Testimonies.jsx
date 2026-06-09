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
  className="mt-[50px]"
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
           
           <div style={{backgroundColor : "#FF61370D"}}>

              <div>
        <p className='text-center pt-[70px] font-bold text-[40px] text-purple-700'>See It to Believe it</p>

        <p className='text-center pt-[40px] text-[20px] pb-[10%]'>
          At Macwise Travels,results speak louder than words. Explore real success<br/>
         stories through photos of approved visas, flight tickets, and happy clients.These<br/>
         are more than testimonies — they are proof that your travel dreams are possible with<br/>
                                        us. </p>
          </div>

           <div className='flex gap-[10px] items-center justify-center'>
  <div className='relative group overflow-hidden'>
    <img
      src={Germany}
      className='w-[650px] transition-transform duration-500 group-hover:scale-105'
    />
    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
  </div>

  <div className='relative group overflow-hidden'>
    <img
      src={poland}
      className='w-[650px] transition-transform duration-500 group-hover:scale-105'
    />
    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
  </div>
</div>

<div className='flex gap-[10px] items-center justify-center pt-[30px]'>
  <div className='relative group overflow-hidden'>
    <img
      src={egypr}
      className='w-[650px] transition-transform duration-500 group-hover:scale-105'
    />
    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
  </div>

  <div className='relative group overflow-hidden'>
    <img
      src={quatar}
      className='w-[650px] transition-transform duration-500 group-hover:scale-105'
    />
    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
  </div>
</div>

<div className='flex gap-[10px] items-center justify-center pt-[10px]'>
  <div className='relative group overflow-hidden'>
    <img
      src={good}
      className='w-[650px] transition-transform duration-500 group-hover:scale-105 pb-[80px]'
    />
    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
  </div>

  <div className='relative group overflow-hidden'>
    <img
      src={berlin}
      className='w-[650px] transition-transform duration-500 group-hover:scale-105'
    />
    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
  </div>
</div>
         </div>

   
         <motion.div
          style={{ backgroundColor: "white" }}
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
        
            <button className='bg-orange-400 text-white p-[15px_50px] cursor-pointer mt-[21%] rounded-[30px] mb-[80px]'>
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

         <div style={{backgroundColor : "#FF61370D"}}>
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

            <Footer/>
            
         </div>

    </div>
  )
}

export default Testimonies
