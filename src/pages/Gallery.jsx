import React from 'react'
import Navbar from '../component/Navbar'
import lane from "../assets/lane.jpg";
import Happy from "../assets/Happy.jpeg";
import Smile from "../assets/Smile.jpeg";
import Teeth from "../assets/Teeth.jpeg";
import Footer from '../component/Footer';
import { motion } from "framer-motion";
import bike from "../assets/bike.jpeg";
import gown from "../assets/gown.jpeg";
import foot from "../assets/foot1.jpeg";
import bag from "../assets/bag.jpeg";


const Gallery = () => {
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
    initial={{ y: -80, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: false }}
    className="text-center pt-[10%] font-bold text-[60px] text-white"
  >
    Gallery
  </motion.p>

  <motion.p
    initial={{ y: -80, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: false }}
    className="text-center pt-[20px] text-[20px] text-white pb-[10%]"
  >
    Home/Gallery
  </motion.p>
</div>

        <div className='flex-col md:flex-row flex gap-[10px] items-center justify-center mt-[30px]'>

  <div className='relative group overflow-hidden'>
    <img
      src={Happy}
      className='w-[450px] transition-transform duration-500 group-hover:scale-105'
    />
    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
  </div>

  <div className='relative group overflow-hidden'>
    <img
      src={Smile}
      className='w-[450px] transition-transform duration-500 group-hover:scale-105'
    />
    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
  </div>

  <div className='relative group overflow-hidden'>
    <img
      src={Teeth}
      className='w-[450px] transition-transform duration-500 group-hover:scale-105'
    />
    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
  </div>

</div>

       <div className='flex-col md:flex-row flex gap-[10px] items-center justify-center mt-[10px]'>

  <div className='relative group overflow-hidden'>
    <img
      src={bike}
      className='w-[450px] transition-transform duration-500 group-hover:scale-105'
    />
    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
  </div>

  <div className='relative group overflow-hidden'>
    <img
      src={gown}
      className='w-[450px] transition-transform duration-500 group-hover:scale-105'
    />
    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
  </div>

  <div className='relative group overflow-hidden'>
    <img
      src={foot}
      className='w-[450px] transition-transform duration-500 group-hover:scale-105'
    />
    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
  </div>

</div>

       <div className='flex-col md:flex-row flex gap-[10px] items-center justify-center mt-[10px]'>

  <div className='relative group overflow-hidden'>
    <img
      src={Happy}
      className='w-[450px] transition-transform duration-500 group-hover:scale-105'
    />
    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
  </div>

  <div className='relative group overflow-hidden'>
    <img
      src={Smile}
      className='w-[450px] transition-transform duration-500 group-hover:scale-105'
    />
    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
  </div>

  <div className='relative group overflow-hidden'>
    <img
      src={Teeth}
      className='w-[450px] transition-transform duration-500 group-hover:scale-105'
    />
    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
  </div>

</div>

      <div className='flex-col md:flex-row flex gap-[10px] items-center justify-center mt-[10px]'>

  <div className='relative group overflow-hidden'>
    <img
      src={Happy}
      className='w-[450px] transition-transform duration-500 group-hover:scale-105'
    />
    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
  </div>

  <div className='relative group overflow-hidden'>
    <img
      src={Smile}
      className='w-[450px] transition-transform duration-500 group-hover:scale-105'
    />
    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
  </div>

  <div className='relative group overflow-hidden'>
    <img
      src={Teeth}
      className='w-[450px] transition-transform duration-500 group-hover:scale-105'
    />
    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
  </div>

</div>

    <div className='items-center'>
      <img src={Teeth}  className='w-[450px] mt-[10px] mb-[60px]'/>
    </div>
     
      <Footer/>

    </div>
  )
}

export default Gallery
