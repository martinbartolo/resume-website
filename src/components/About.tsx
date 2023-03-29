import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function About({}: Props) {
    return (
        <div className='flex gradient -skew-y-[5deg] py-36 2xl:py-44'>
        <div className='2xl:scale-95 relative max-w-full h-fit space-y-20 2xl:space-y-32 skew-y-[5deg] px-10 mx-auto'>
            
            <motion.h1 className='relative text-center selectionwhite font-montserrat font-bold text-6xl md:text-7xl 2xl:text-8xl'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}>
                About.
            </motion.h1>

            <motion.p className='font-montserrat max-w-prose text-justify text-sm md:text-lg xl:text-xl 2xl:text-2xl md:px-10'
                initial={{ 
                    y: 100,
                    opacity: 0 
                }}
                whileInView={{ 
                    y: 0,
                    opacity: 1
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}>
                I&apos;ve had the privilege of experiencing life in different parts of the world - from the island of Malta where I grew up, to the UK where I lived for a while. 
                Currently, I&apos;m settled in the stunning mountains of Boulder, Colorado, where the breathtaking scenery has become a significant source of inspiration in my life.
                Colorado&apos;s diverse landscapes provide me with ample opportunities to pursue my outdoor interests, including skiing, fishing, and hiking.
                <br/>
                <br/>

                Aside from exploring the great outdoors, music has always been my passion. I have a <a className='decoration-wavy underline text-b;l' href="https://www.youtube.com/@yesok" target="_blank">YouTube channel </a> with over 4k subscribers and 1.25m views where I share my music 
                production. The creative process of producing music is my happy place, and has enabled me to connect with people from all over the world.
            </motion.p>
        </div>
        </div>  
    )
}