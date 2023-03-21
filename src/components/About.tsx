import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function About({}: Props) {
  return (
<div
    className='
    flex
    flex-col
    relative
    h-screen
    bg-black
    text-center
    md:text-left
    md:flex-row
    max-w-full
    px-10
    justify-evenly
    mx-auto
    items-center
    border-y-2
    border-white'>
    <div
        className='absolute
        left-9
        top-24
        font-playfair
        text-7xl'>
        About
    </div>

    <motion.img
        initial={{
            x: -200,
            opacity: 0
        }}
        whileInView={{
            x: 0,
            y: 80,
            opacity: 1
        }}
        transition={{ duration: 0.5 }}
        src='/about.jpg'
        className='-mb-20 md:mb-0 flex-shrink-0 h-80 rounded-xl object-cover object-center
        md:h-[400px] xl:h-[500px]
        '
    />
    <motion.p
    initial={{
        x: 200,
        opacity: 0
    }}
    whileInView={{
        x: 0,
        y: 80,
        opacity: 1
    }}
    transition={{ duration: 0.5 }}
    className='font-montserrat text-base space-y-10 px-0 md:px-10'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </motion.p>
</div>  )
}

export default About