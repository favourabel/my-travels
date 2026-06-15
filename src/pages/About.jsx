import React from 'react'
import Navbar from '../component/Navbar'
import lady from "../assets/lady.png";
import agent from "../assets/agent.jpg";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEye, FaRunning, FaCheck } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import Footer from '../component/Footer';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full overflow-x-hidden">

      <Navbar/>

      <div
        style={{
          backgroundImage: `url(${lady})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="py-[60px] mt-[40px] mb-[60px] w-full"
      >

        {/* TITLE */}
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-[10%] font-bold text-[40px] md:text-[60px] text-white"
        >
          About Us
        </motion.p>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center pt-[20px] text-[18px] md:text-[20px] text-white"
        >
          Home / About Us
        </motion.p>

      </div>

      <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[40px] px-[15px] md:px-[30px]">

        {/* LEFT SIDE (COMES FROM LEFT) */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >

          <img
            src={agent}
            className="w-full lg:max-w-[900px] rounded-[8px] mt-[30px] lg:mt-[60px]"
            alt="Agent"
          />

          <p className="font-bold text-[28px] md:text-[40px] mt-[20px] text-center lg:text-left">
            MACWISE TRAVELS LTD.
          </p>

          <p className="mt-[20px] text-[14px] md:text-[16px] text-center lg:text-left leading-relaxed">
            Macwise Travels & Tours Limited is a leading Travel Management company, founded in 2020 and incorporated in
            2022. We specialize in managing the travel needs of NGOs, government agencies, multinational corporations, private
            firms, and individuals. As proud members of the National Association of Nigerian Travel Agencies (NANTA), the Nigerian
            Civil Aviation Authority (NCAA), and the National Association of Tour Operators (NATOP), we uphold the highest industry
            standards.
          </p>

          <p className="mt-[40px] lg:mt-[70px] text-[14px] md:text-[16px] text-center lg:text-left leading-relaxed">
            Our services are designed to be high-quality, timely, and client-focused, ensuring a seamless travel experience.
            Whether for business or leisure, we help our clients make informed travel decisions with ease and confidence.
          </p>

        </motion.div>

        {/* RIGHT SIDE FORM (COMES FROM RIGHT) */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 mt-[30px] lg:mt-[60px]"
        >

          <form
            style={{ backgroundColor: "#FF61370D" }}
            className="pt-[40px] lg:pt-[60px] rounded-[8px] px-[20px] md:px-[40px]"
          >

            <p className="font-bold text-[18px] md:text-[20px] mb-[30px]">
              Get In Touch
            </p>

            {/* NAME */}
            <div className="flex flex-col mb-[20px]">
              <label>Your Name</label>
              <input
                type="text"
                className="w-full bg-white rounded-[4px] mt-[10px] p-[10px]"
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col mb-[20px]">
              <label>Your Email</label>
              <input
                type="text"
                className="w-full bg-white rounded-[4px] mt-[10px] p-[10px]"
              />
            </div>

            {/* SUBJECT */}
            <div className="flex flex-col mb-[20px]">
              <label>Subject</label>
              <input
                type="text"
                className="w-full bg-white rounded-[4px] mt-[10px] p-[10px]"
              />
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col mb-[20px]">
              <label>Your Message (Optional)</label>
              <input
                type="text"
                className="w-full bg-white rounded-[4px] mt-[10px] p-[10px] h-[120px]"
              />
            </div>

            <button className="bg-orange-400 text-white px-[40px] py-[10px] rounded-[30px] cursor-pointer">
              Submit
            </button>

            {/* CONTACT INFO */}
            <p className="pt-[40px] text-[24px] md:text-[30px] font-bold">
              Contact Us
            </p>

            <div className="flex gap-[10px] pt-[20px]">
              <CiLocationOn className="w-[20px] h-[20px] text-orange-400 mt-[5px]" />
              <p className="text-[14px] md:text-[16px]">
                Block A, Shop 1, 3rd Avenue<br />
                Cornershop, Gwarimpa, Abuja, Nigeria
              </p>
            </div>

            <div className="flex gap-[10px] pt-[20px]">
              <MdOutlineEmail className="w-[20px] h-[20px] text-orange-400" />
              <p className="text-[14px] md:text-[16px]">Macwiseltd@gmail.com</p>
            </div>

            <div className="flex gap-[10px] pt-[20px]">
              <FaPhoneAlt className="w-[20px] h-[20px] text-orange-400" />
              <p className="text-[14px] md:text-[16px]">+2349130593550</p>
            </div>

            <img
              src={lady}
              className="w-full md:w-[300px] rounded-[7px] mt-[30px] mb-[50px]"
              alt="Decoration"
            />

          </form>

        </motion.div>

      </div>

      <div className="bg-[#f7f1f1] py-[60px] px-[20px] md:px-[40px] lg:px-[60px] mt-[10%]">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-[80px]">

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="bg-[#f4f4f4] border border-gray-300 rounded-[12px] p-[40px]"
          >
            <FaEye className="text-black text-[22px]" />

            <h2 className="text-[30px] font-bold text-[#0d2235] mt-[25px]">
              Vision
            </h2>

            <p className="text-gray-600 text-[18px] leading-[42px] mt-[10px]">
              To be a leading travel management company,
              delivering seamless and exceptional travel
              experiences globally.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-[#f4f4f4] border border-gray-300 rounded-[12px] p-[40px]"
          >
            <FaRunning className="text-black text-[22px]" />

            <h2 className="text-[30px] font-bold text-[#0d2235] mt-[25px]">
              Mission
            </h2>

            <p className="text-gray-600 text-[18px] leading-[42px] mt-[10px]">
              We are committed to providing high-quality,
              reliable, and customer-centric travel
              solutions, ensuring convenience,
              affordability, and satisfaction for individuals,
              businesses, and organizations.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[#f4f4f4] border border-gray-300 rounded-[12px] p-[40px]"
          >
            <h2 className="text-[30px] font-bold text-[#0d2235]">
              Core Values
            </h2>

            <div className="mt-[30px] space-y-6">

              <div className="flex items-start gap-4">
                <FaCheck className="text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600 text-[18px] leading-[38px]">
                  Excellence - Delivering top-notch travel services with precision.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaCheck className="text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600 text-[18px] leading-[38px]">
                  Integrity - Upholding honesty and transparency in all dealings.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaCheck className="text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600 text-[18px] leading-[38px]">
                  Customer-Centric - Prioritizing client satisfaction and personalized experiences.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaCheck className="text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600 text-[18px] leading-[38px]">
                  Innovation - Adopting modern solutions for seamless travel management.
                </p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>

      <Footer/>

    </div>
  )
}

export default About