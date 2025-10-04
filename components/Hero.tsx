import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/lib/utils'
import { TextGenerateEffect } from './ui/text-genarateEffect'
import MagicButton from './ui/magicButton'
import { FaLocationArrow } from 'react-icons/fa6'

const Hero = () => {
    return (
        <div className='pd-20 pt-36'>

           <Spotlight
  className="absolute -top-40 -left-20 md:-top-32 md:-left-40 h-[100vh] w-[80vw]"
  fill="white"
/>
<Spotlight
  className="absolute top-20 left-1/2 -translate-x-1/2 h-[80vh] w-[60vw]"
  fill="purple"
/>
<Spotlight
  className="absolute bottom-0 right-0 md:-bottom-20 md:-right-32 h-[90vh] w-[70vw]"
  fill="white"
/>
<Spotlight
  className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[70vh] w-[50vw]"
  fill="purple"
/>

            <div
                className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
            >
                {/* Radial gradient for the container to give a faded look */}
                <div
                    // chnage the bg to bg-black-100, so it matches the bg color and will blend in
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        Dynamic Web Magic with Next.js
                    </p>
                    <TextGenerateEffect
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                        words="Transforming Concepts into Seamless User Experiences"
                    />
                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        Hi! I&apos;m Sayan, a Next.js Developer based in India.
                    </p>
                    <a href='#about' >
                        <MagicButton 
                        title="Show my Work"
                        icon={<FaLocationArrow />}
                        position='right'
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero