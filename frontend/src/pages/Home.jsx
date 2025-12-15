import React from 'react'
import Navbar from '../sections/Navbar'
import HeroSection from '../sections/HeroSection'
import About from '../sections/About'
import CoursesSection from '../sections/CoursesSection'
import TestimonialSection from '../sections/TestimonialSection'
import ContactForm from '../sections/ContactForm'
import { Element } from 'react-scroll'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WhatsappLogo from '../assets/images/whatsapp.png';

function Home() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918822184839', '_blank');
  };

  return (
    <>
      <Navbar />
      <Element name='home'>
        <HeroSection />
      </Element>
      <Element name='about'>
        <About />
      </Element>
      <CoursesSection />
      <TestimonialSection />
      <Element name='contact'>
        <ContactForm />
      </Element>

      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-[999] w-14 h-18 md:w-16 md:h-16 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <img 
          src={WhatsappLogo} 
          alt="WhatsApp" 
          className="w-9 h-9 md:w-12 md:h-12"
        />
        {/* Pulse animation ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
      </button>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover
        closeOnClick
        draggable
        theme="light"
      />
    </>
  )
}

export default Home