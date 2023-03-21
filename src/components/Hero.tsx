import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className='big-image'>
    <div className='overlay'>
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <Image 
                className='relative rounded-full'
                src='/avatar.jpg'
                alt="avatar"
                width={125}
                height={125}/>
            <div>
                <h1
                    className='text-center
                    text-7xl
                    pb-10
                    font-playfair
                    drop-shadow-[3px_3px_0_rgba(0,0,0,1)]'>
                        Hey, I&apos;m Martin Bartolo
                </h1>
                <h2
                    className='text-center
                    text-lg
                    pb-8
                    font-montserrat'>
                    I&apos;m currently pursuing a Master&apos;s degree in Computer Science at the University of Colorado, Boulder.<br/>
                    Most of my experience is in backend development and machine learning. I am also currently experimenting with website design in my free time.
                </h2>

                <div>
                    <Link href='#about'>
                        <motion.button 
                        whileHover={{
                            scale: 1.15,
                            transition: { duration: 0.1 },
                        }}
                        className='heroButton'>
                            About
                        </motion.button>
                    </Link>
                    
                    
                    <Link href='#experience'>
                        <motion.button 
                        whileHover={{
                            scale: 1.15,
                            transition: { duration: 0.1 },
                        }}
                        className='heroButton'>
                            Experience
                        </motion.button>
                    </Link>

                    <Link href='#education'>
                        <motion.button 
                        whileHover={{
                            scale: 1.15,
                            transition: { duration: 0.1 },
                        }}
                        className='heroButton'>
                            Education
                        </motion.button>
                    </Link>
                    
                    <Link href='#skills'>
                        <motion.button 
                        whileHover={{
                            scale: 1.075,
                            transition: { duration: 0.1 },
                        }}
                        className='heroButton'>
                            Skills
                        </motion.button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}