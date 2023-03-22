import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function About({}: Props) {
  return (
<div className='flex flex-col relative w-full h-[690px] md:h-[675px] 2xl:h-screen bg-black text-center select-text md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center border-y-2 border-white'>
    <div
        className='absolute top-10 md:top-20 md:left-9 selectionwhite font-playfair text-6xl md:text-7xl 2xl:text-8xl'>
        About Me
    </div>
    <motion.img
        initial={{
            y: 55,
            opacity: 0
        }}
        whileInView={{
            y: 55,
            opacity: 1
        }}
        transition={{ duration: 0.5 }}
        src='/about.jpg'
        className='-mb-20 md:mb-0 flex-shrink-0 h-[250px] rounded-xl object-cover object-center md:h-[400px] xl:h-[400px] 2xl:h-[600px]'
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
    transition={{ duration: 1 }}
    className='font-montserrat text-sm selectionwhite md:text-lg xl:text-xl 2xl:text-2xl space-y-10 pt-6 md:px-10'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </motion.p>
</div>  )
}