import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function TestimonialSection() {
  const testimonials = [
    {
      quote: "I am a student of bsc nursing from assam medical college & hospital... I am so happy to say that coach Nilotpol providing guidance me for PCOD from last 1 months.. And i am so happy to sahre this with everyone that.. This month my period come on time...this is happened first time in my life since 2016......Thank you so much Nilotpol by providing guidance on diet and lifestyle changes that can help to improve my pcod journey..",
      author: "Prerana Sharma",
      // role: "Designer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"
    },
    {
      quote: "I am Alpona from Dergaon. It's a pleasure to share my weight loss journey under fit coach Nilotpal Kakoti. My weight was 67 kgs when I joined this online weight loss course. I followed all the necessary steps as guided by coach Nilotpal to loose my weight to 60 kg after 2 months. I am very thankful to my coach and wish him success in all his future endeavors.",
      author: "Alpona",
      // role: "Founder at SomeCo",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andrew"
    },
    {
      quote: "Hello my name is Dipshikha. I have lost 11 kg in 2 months with Fit Course Nilotpal Guide. I started having back pain from gaining too much weight. I have been taking pain injections continuously but have not taken any injections since exercising. I have never heard of a 2 month course at such a low cost. Now I am very happy. Thank you Nilotpal. Thank you",
      author: "Dipshikha",
      // role: "Product Designer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nick"
    },
   
    
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <div className="py-32 px-8 bg-[#192347]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white">
            Real stories from people who transformed their health with us
          </p>
        </div>

        {/* Testimonial Card with Navigation */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-12 md:p-12 transition-all duration-500">
            <p className="text-slate-300 text-sm italic md:text-lg leading-relaxed mb-12 min-h-[100px]">
              "{testimonials[currentIndex].quote}"
            </p>
            <div className="flex items-center gap-6">
          
              <div>
                <p className="text-white font-semibold text-xl">{testimonials[currentIndex].author}</p>
                <p className="text-slate-500">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white w-8' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection