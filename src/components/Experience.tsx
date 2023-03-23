import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function Experience({}: Props) {
  return (
    <div
        className='h-screen max-w-full relative flex flex-col md:flex-row overflow-hidden bg-black px-10 justify-evenly mx-auto items-center border-y border-white'>
        <motion.div
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
            className='absolute top-10 md:top-20 md:left-9 selectionwhite font-playfair text-6xl md:text-7xl 2xl:text-8xl'>
            Experience
        </motion.div>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
            <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[500px] xl:w-[800px] snap-center p-5 
            bg-black font-montserrat transition-opacity duration-150 overflow-hidden border border-white 
            max-w-[280px] md:max-w-full hover:border-2'>
                <div className='px-0 md:px-10'>
                    <h4 className='text-2xl font-light selectionwhite'>Machine Learning Annotator</h4>
                    <p className='font-bold text-lg py-1 selectionwhite'>University of Colorado Boulder</p>
                    <p className='font-light py-1 selectionwhite'>March &apos;22 -Present</p>
                    <ul className='list-disc space-y-2 ml-5 text-sm text-left'>
                        <li className='selectionwhite'>Oversaw the process of creating and maintaining 3 different natural language 
                            processing datasets for use in research by the Computational Linguistics Department.</li>
                        <li className='selectionwhite'>Adjudicated over 10,000 data annotations made by my team, ensuring that the 
                            datasets were ready to be used by machine learning models before the assigned deadlines.</li>
                    </ul>
                </div>
            </article>

            <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[500px] xl:w-[800px] snap-center p-10 
            bg-black font-montserrat transition-opacity duration-150 overflow-hidden border border-white 
            max-w-[280px] md:max-w-full hover:border-2'>
                <div className='px-0 md:px-10'>
                    <h4 className='text-2xl font-light py-1 selectionwhite'>Grader</h4>
                    <p className='font-bold text-lg py-1 selectionwhite'>University of Colorado Boulder</p>
                    <p className='font-light py-1 selectionwhite'>August &apos;21 - December &apos;21</p>
                    <ul className='list-disc space-y-2 ml-5 text-sm text-left'>
                        <li className='selectionwhite'>Graded homeworks and exams for over 100 students.</li>
                        <li className='selectionwhite'>Ran group and individual sessions to tutor students and answer their questions.</li>
                    </ul>
                </div>
            </article>

            <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[500px] xl:w-[800px] snap-center p-10 
            bg-black font-montserrat transition-opacity duration-150 overflow-hidden border border-white 
            max-w-[280px] md:max-w-full hover:border-2'>
                <div className='px-0 md:px-10'>
                    <h4 className='text-2xl font-light py-1 selectionwhite'>Freelance Graphic Designer</h4>
                    <p className='font-bold text-lg py-1 selectionwhite'>Fiverr.com</p>
                    <p className='font-light py-1 selectionwhite'>2016 - 2021</p>
                    <ul className='list-disc space-y-2 ml-5 text-sm text-left'>
                        <li className='selectionwhite'>Grew a successful online store from the ground up, offering graphic design services 
                            to more than 1000 individuals and brands.</li>
                        <li className='selectionwhite'>Built a strong and loyal customer base, amassing over 1100 orders and 900 5-star reviews.</li>
                    </ul>
                </div>
            </article>
            
        </div>
    </div>
  )
}