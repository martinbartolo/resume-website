import React, { useState, useEffect } from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

export default function Header() {

    const [navBg, setNavBg] = useState(false);

    const changeNavBg = () => {
        console.log(window.scrollY);
        window.scrollY > 0 ? setNavBg(true) : setNavBg(false);
    }

    useEffect(() => {
        changeNavBg()
        window.addEventListener("scroll", changeNavBg)
    })

  return (
    <div onScroll={changeNavBg}>
        <header className={navBg ? 'fixed left-0 top-0 w-full p-2 md:p-5 flex justify-between mx-auto z-20 bg-black md:bg-transparent' : 'fixed left-0 top-0 w-full p-5 flex justify-between mx-auto z-20 bg-transparent' }>
            <motion.div 
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{ duration: 1 }}
            className='md:px-6 flex flex-row items-center gap-0 md:gap-2 xl:gap-3 2xl:gap-4'>
                <motion.div
                    whileHover={{
                        scale: 1.15,
                        transition: { duration: 0.1 }
                    }}>
                    <SocialIcon
                    url="https://github.com/martin-bartolo"
                    fgColor="white"
                    bgColor="transparent" 
                    className='scale-110 xl:scale-125 2xl:scale-150'/>
                </motion.div>
                
                <motion.div
                    whileHover={{
                        scale: 1.15,
                        transition: { duration: 0.1 },
                    }}>
                    <SocialIcon
                    url="https://www.linkedin.com/in/martinbartolo"
                    fgColor="white"
                    bgColor="transparent"
                    className='scale-110 xl:scale-125 2xl:scale-150'/>
                </motion.div>
            </motion.div>

            <motion.div 
            initial={{
                x: 500,
                y: 5,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                y: 5,
                opacity: 1,
                scale: 1
            }}
            transition={{ duration: 1 }}
            whileHover={{
                scale: 1.15,
                transition: { duration: 0.1 },
            }}
            className='px-2 pt-2 xl:pt-0 md:px-10'>
                <button className='font-montserrat font-medium text-base xl:text-xl text-white'> Contact Me </button>
            </motion.div>
        </header>
    </div>
  )
}