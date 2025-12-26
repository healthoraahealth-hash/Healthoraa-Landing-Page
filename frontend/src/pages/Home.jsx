import React from 'react'
import Navbar from '../sections/Navbar'
import HeroSection from '../sections/HeroSection'
import About from '../sections/About'
import CoursesSection from '../sections/CoursesSection'
import TestimonialSection from '../sections/TestimonialSection'
import ContactForm from '../sections/ContactForm'
import Footer from '../sections/Footer'
import { Element } from 'react-scroll'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WhatsappLogo from '../assets/images/whatsapp.png';
// import ChristmasBanner from '../assets/videos/Christmas_offer.mp4';
// import ChristmasBanner2 from '../assets/videos/Christmas_offer2.mp4';
// import ChristmasBanner3 from '../assets/videos/Christmas_offer.mp4';
// import ChristmasOffer from '../assets/images/ChristmasOffer.jpeg';

function Home() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/916000206223', '_blank');
  };

  return (
    <>
      <Navbar />
{/*    
      <div className="w-full mt-16 sm:mt-20 bg-[#192347] overflow-hidden">
        <video
          src={ChristmasBanner2}
          className="w-full h-auto object-contain block"
          autoPlay
          muted
          loop
          playsInline
        />
      </div> */}

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
      <Footer/>

      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        aria-label="Chat on WhatsApp"
        className="
          fixed
          bottom-4
          right-[max(1rem,env(safe-area-inset-right))]
          z-50
          w-12 h-12 md:w-16 md:h-16
          rounded-full
          flex items-center justify-center
          shadow-lg
          overflow-hidden
        "
      >
        <img 
          src={WhatsappLogo} 
          alt="WhatsApp" 
          className="w-9 h-9 md:w-12 md:h-12 relative z-10"
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