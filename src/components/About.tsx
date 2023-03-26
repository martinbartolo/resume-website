import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function About({}: Props) {
  return (
<div className='flex flex-col relative max-w-full h-screen bg-black md:flex-row px-10 justify-evenly mx-auto 
items-center border-t border-white'>
    <motion.h3
        initial={{
            x: -200,
            opacity: 0,
            scale: 0.5
        }}
        whileInView={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='absolute top-10 2xl:top-20 selectionwhite font-montserrat font-bold text-6xl md:text-7xl 2xl:text-8xl'>
        About Me
    </motion.h3>
    <motion.img
        initial={{
            y: 55,
            opacity: 0
        }}
        whileInView={{
            y: 55,
            opacity: 1
        }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        src='/about.jpg'
        className='-mb-20 md:mb-0 flex-shrink-0 h-[250px] rounded-xl object-cover object-center md:h-[400px] xl:h-[400px] 2xl:h-[600px] border border-white hover:border-2'
    />
    <motion.p
    initial={{
        y: 55,
        opacity: 0
    }}
    whileInView={{
        y: 55,
        opacity: 1
    }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className='font-montserrat text-justify selectionwhite text-sm md:text-lg xl:text-xl 2xl:text-2xl space-y-10 pt-6 md:px-10'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </motion.p>
</div>  )
}