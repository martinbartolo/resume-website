import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function Experience({}: Props) {
    return (
        <div className='xl:scale-90 max-w-full space-y-14 md:space-y-24 h-fit px-10 items-center justify-evenly pt-14 pb-52'>
            <motion.h1 className='top-20 md:top-24 text-center font-montserrat selectionwhite font-bold text-5xl md:text-7xl 2xl:text-8xl'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}>
                Experience.
            </motion.h1>

            <motion.div className='relative w-full flex space-x-10 overflow-x-scroll pb-10 px-10 snap-x snap-mandatory'
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
                <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[280px] md:w-[553px] lg:w-[553px] xl:w-[700px] 2xl:w-[1000px] snap-center p-5 bg-black font-montserrat overflow-hidden border border-white hover:border-2'>
                    <div className='px-1 2xl:p-5'>
                        <h4 className='text-lg md:text-2xl xl:text-3xl 2xl:text-5xl font-light selectionwhite'>Machine Learning Annotator</h4>
                        <p className='font-bold text-sm md:text-lg xl:text-lg 2xl:text-3xl py-1 2xl:py-3 selectionwhite'>University of Colorado Boulder</p>
                        <p className='font-light text-sm md:text-base xl:text-md 2xl:text-xl py-1 selectionwhite'>March 2022 -Present</p>
                        <ul className='list-disc space-y-2 ml-5 2xl:py-3 text-xs md:text-base xl:text-md 2xl:text-xl text-left'>
                            <li className='selectionwhite'>Oversaw the process of creating and maintaining 3 different natural language 
                                processing datasets for use in research by the Computational Linguistics Department.</li>
                            <li className='selectionwhite'>Adjudicated over 10,000 data annotations made by my team, ensuring that the 
                                datasets were ready to be used by machine learning models before the assigned deadlines.</li>
                        </ul>
                    </div>
                </article>

                <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[280px] md:w-[550px] lg:w-[550px] xl:w-[700px] 2xl:w-[1000px] snap-center p-5 bg-black font-montserrat overflow-hidden border border-white hover:border-2'>
                    <div className='px-1 2xl:p-5'>
                        <h4 className='text-lg md:text-2xl xl:text-3xl 2xl:text-5xl font-light selectionwhite'>Grader</h4>
                        <p className='font-bold text-sm md:text-lg xl:text-lg 2xl:text-3xl py-1 2xl:py-3 selectionwhite'>University of Colorado Boulder</p>
                        <p className='font-light text-sm md:text-base xl:text-md 2xl:text-xl py-1 selectionwhite'>August 2021 - December 2021</p>
                        <ul className='list-disc space-y-2 ml-5 2xl:py-3 text-xs md:text-base xl:text-md 2xl:text-xl text-left'>
                            <li className='selectionwhite'>Graded homework and exams for over 100 students.</li>
                            <li className='selectionwhite'>Ran group and individual sessions to tutor students and answer their questions.</li>
                        </ul>
                    </div>
                </article>

                <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[280px] md:w-[550px] lg:w-[550px] xl:w-[700px] 2xl:w-[1000px] snap-center p-5bg-black font-montserrat overflow-hidden border border-white hover:border-2'>
                    <div className='px-1 2xl:p-5'>
                        <h4 className='text-lg md:text-2xl xl:text-3xl 2xl:text-5xl font-light selectionwhite'>Freelance Graphic Designer</h4>
                        <p className='font-bold text-sm md:text-lg xl:text-lg 2xl:text-3xl py-1 2xl:py-3 selectionwhite'>Fiverr.com</p>
                        <p className='font-light text-sm md:text-base xl:text-md 2xl:text-lg py-1 selectionwhite'>May 2016 - July 2021</p>
                        <ul className='list-disc space-y-2 ml-5 2xl:py-3 text-xs md:text-base xl:text-md 2xl:text-xl text-left'>
                            <li className='selectionwhite'>Grew a successful online store from the ground up on fiverr.com, offering graphic design services such as branding, logo design, 
                            and social media graphics.</li>
                            <li className='selectionwhite'>Worked with over 1000 individuals and brands such as 
                                <a className='font-medium decoration-wavy underline hover:text-blue-700' href="https://www.principal-it.com/" target="_blank"> Principal IT</a> and 
                                <a className='font-medium decoration-wavy underline hover:text-blue-700' href="https://barkbutter.au/" target="_blank"> Bark Butter</a>.</li>
                            <li className='selectionwhite'>Built a strong and loyal customer base, amassing over 1100 orders and 900 5-star reviews. 
                            Visit <a className='font-medium decoration-wavy underline hover:text-blue-700' href="https://www.fiverr.com/martinbartolo" target="_blank">https://www.fiverr.com/martinbartolo </a> 
                            to view my work and testimonials.</li>
                        </ul>
                    </div>
                </article>
            </motion.div>
        </div> 
    )
}