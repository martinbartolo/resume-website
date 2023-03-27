import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className='big-image'>
    <div className='overlay'>
        <div className='h-screen scale-[0.8] xl:scale-100 2xl:scale-110 flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <div>
                <h1 className='text-center text-5xl md:text-7xl max-w-prose pb-10 font-playfair drop-shadow-[3px_3px_0_rgba(0,0,0,1)]'>
                    Hey, I&apos;m Martin.
                </h1>
                <h2 className='text-justify text-xl md:text-xl px-5 max-w-prose pb-8 font-montserrat'>
                    I&apos;m currently pursuing a Master&apos;s degree in Computer Science at the 
                    University of Colorado, Boulder. Most of my experience is in backend development and 
                    machine learning and I am also currently experimenting with website design in my free 
                    time. I am aiming to secure a software engineering role in the near future and I am 
                    actively seeking positions.
                </h2>

                <div className='flex  justify-center'>
                    <Link 
                    to='skills'
                    smooth={true}>
                        <motion.button 
                        whileHover={{
                            scale: 1.15,
                            transition: { duration: 0.1 },
                        }}
                        className='heroButton'>
                            Skills
                        </motion.button>
                    </Link>
                    
                    <Link 
                    to='work'
                    smooth={true}>
                        <motion.button 
                        whileHover={{
                            scale: 1.15,
                            transition: { duration: 0.1 },
                        }}
                        className='heroButton'>
                            Work
                        </motion.button>
                    </Link>

                    <Link 
                    to='about'
                    smooth={true}>
                        <motion.button 
                        whileHover={{
                            scale: 1.15,
                            transition: { duration: 0.1 },
                        }}
                        className='heroButton'>
                            About
                        </motion.button>
                    </Link>
                    
                    <Link 
                    to='contact'
                    smooth={true}>
                        <motion.button 
                        whileHover={{
                            scale: 1.075,
                            transition: { duration: 0.1 },
                        }}
                        className='heroButton'>
                            Contact
                        </motion.button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}