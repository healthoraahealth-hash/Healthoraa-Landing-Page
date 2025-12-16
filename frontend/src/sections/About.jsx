import React from 'react'
import {CircleCheckBig, Zap } from 'lucide-react'

function About() {
    return (
        <>
            <div id='about' className='px-6 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24 lg:py-28 flex flex-col items-start'>
                {/* Hero Section */}
                <div className='mb-12 sm:mb-16 md:mb-20'>
                    <div className='inline-block px-4 py-2 bg-blue-50 text-blue-900 rounded-full text-sm font-semibold mb-6'>
                        ABOUT US
                    </div>
                    <h2 className='text-1xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold leading-tight max-w-4xl mb-6'>
                        Our aim is to make preventive healthcare more{' '}
                        <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#D4AF37]'>
                            Aware and Affordable
                        </span>{' '}
                        for all
                    </h2>
                    <p className='text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl'>
                        Through personalized lifestyle programs, expert guidance, and affordable care plans, we help people take control of their health before problems begin.
                    </p>
                </div>

             {/* USPs Section */}
<div className='w-full max-w-6xl mb-16 sm:mb-20'>
<div className="flex flex-nowrap items-center justify-start gap-3 sm:gap-6 md:gap-12 overflow-x-auto pb-2">
        <div className='flex items-center gap-1.5 sm:gap-3 group flex-shrink-0'>
            <div className='w-6 h-6 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <svg className='w-3.5 h-3.5 sm:w-5 sm:h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24' strokeWidth={2.5}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' />
                </svg>
            </div>
            <span className='text-xs sm:text-base md:text-lg font-semibold text-white whitespace-nowrap'>Fast Transformation</span>
        </div>

        <div className='w-px h-4 sm:h-8 bg-white/20 flex-shrink-0'></div>

        <div className='flex items-center gap-1.5 sm:gap-3 group flex-shrink-0'>
            <div className='w-6 h-6 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <svg className='w-3.5 h-3.5 sm:w-5 sm:h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24' strokeWidth={2.5}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
            </div>
            <span className='text-xs sm:text-base md:text-lg font-semibold text-white whitespace-nowrap'>Anti-Aging</span>
        </div>

        <div className='w-px h-4 sm:h-8 bg-white/20 flex-shrink-0'></div>

        <div className='flex items-center gap-1.5 sm:gap-3 group flex-shrink-0'>
            <div className='w-6 h-6 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <svg className='w-3.5 h-3.5 sm:w-5 sm:h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24' strokeWidth={2.5}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
                </svg>
            </div>
            <span className='text-xs sm:text-base md:text-lg font-semibold text-white whitespace-nowrap'>Longevity</span>
        </div>
    </div>
</div>


                {/* Our Focus Section */}
                <div className='w-full max-w-6xl'>
                    <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-10 md:mb-12'>Our Focus</h3>
                    
                    <div className='relative space-y-0'>
                        {/* Connecting Line */}
                        <div className='absolute left-8 sm:left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-teal-500 to-emerald-500'></div>                        
                        {/* Early Detection */}
                        <div className='relative flex items-start gap-6 sm:gap-8 group pb-12 sm:pb-16'>
                            <div className='relative z-10 flex-shrink-0'>
                                <div className='w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300'>
                                    <CircleCheckBig  className='text-white bold' strokeWidth={3}/>
                                </div>
                            </div>
                            
                            <div className='flex-1 pt-2 sm:pt-4'>
                                <div className='relative p-6 sm:p-8 transition-all duration-300'>
                                    <h4 className='text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4'>Early Detection</h4>
                                    <p className='text-base sm:text-lg text-white/90 leading-relaxed'>
                                        We emphasize regular screenings and health monitoring to identify potential issues before they become serious, enabling timely intervention and better outcomes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Lifestyle Modification */}
                        <div className='relative flex items-start gap-6 sm:gap-8 group'>
                            <div className='relative z-10 flex-shrink-0'>
                                <div className='w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300'>
                                    <Zap className='text-white bold' strokeWidth={3}/>
                                </div>
                            </div>
                            
                            <div className='flex-1 pt-2 sm:-pt-4'>
                                <div className='relative  p-6 sm:p-8  transition-all duration-300'>
                                    <h4 className='text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4'>Lifestyle Modification</h4>
                                    <p className='text-base sm:text-lg text-white/90 leading-relaxed'>
                                        We promote sustainable changes in diet, exercise, and daily habits that create lasting improvements in health and prevent chronic diseases.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About