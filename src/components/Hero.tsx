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
                    <motion.h1 className='text-center text-5xl md:text-7xl max-w-prose pb-10 font-playfair drop-shadow-[3px_3px_0_rgba(0,0,0,1)]'
                        initial={{
                            x: -100,
                            opacity: 0
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}>
                        Hey, I&apos;m Martin.
                    </motion.h1>

                    <motion.h2 className='text-center md:text-justify text-xl md:text-xl px-5 max-w-prose pb-8 font-montserrat'
                        initial={{
                            x: -100,
                            opacity: 0
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}>
                        I&apos;m currently pursuing a Master&apos;s degree in Computer Science at the University of Colorado Boulder. 
                        I am passionate about using cutting-edge technology to design and develop innovative, elegant software solutions 
                        and I am actively searching for exciting and challenging opportunities in the software engineering field.
                    </motion.h2>

                    <motion.div className='flex  justify-center'
                        initial={{
                            x: -100,
                            opacity: 0
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.25 }}>
                            
                        <Link to='skills' smooth={true}>
                            <motion.button className='heroButton'
                                whileHover={{
                                    scale: 1.15,
                                    transition: { duration: 0.1 }
                                }}>
                                Skills
                            </motion.button>
                        </Link>
                        
                        <Link to='experience' smooth={true}>
                            <motion.button className='heroButton'
                                whileHover={{
                                    scale: 1.15,
                                    transition: { duration: 0.1 }
                                }}>
                                Experience
                            </motion.button>
                        </Link>

                        <Link to='about' smooth={true}>
                            <motion.button className='heroButton'
                                whileHover={{
                                    scale: 1.15,
                                    transition: { duration: 0.1 }
                                }}>
                                About
                            </motion.button>
                        </Link>
                        
                        <Link to='contact' smooth={true}>
                            <motion.button className='heroButton'
                                whileHover={{
                                    scale: 1.075,
                                    transition: { duration: 0.1 }
                                }}>
                                Contact
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
        </div>
    )
}