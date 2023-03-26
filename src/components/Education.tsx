import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function Education({}: Props) {
  return (
    <div
        className='h-screen max-w-full relative flex flex-col md:flex-row overflow-hidden bg-black px-10 justify-evenly mx-auto items-center'>
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
            className='absolute top-10 2xl:top-20 selectionwhite font-montserrat font-bold text-6xl md:text-7xl 2xl:text-8xl'>
            Educuation
        </motion.div>

        <motion.div 
            initial={{ y: 40 }}
            className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
            <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[278px] md:w-[553px] lg:w-[553px] xl:w-[600px] 2xl:w-[800px] snap-center p-5 
            bg-black font-montserrat transition-opacity duration-150 overflow-hidden border border-white hover:border-2'>
                <div className='px-1 2xl:p-5'>
                    <h4 className='text-lg md:text-2xl xl:text-3xl 2xl:text-5xl font-light selectionwhite'>University of Colorado Boulder</h4>
                    <p className='font-bold text-sm md:text-lg xl:text-lg 2xl:text-3xl py-1 2xl:py-3 selectionwhite'>Master&apos;s Degree &#40;M.S.&#41; in Computer Science</p>
                    <p className='font-light text-sm md:text-base xl:text-md 2xl:text-xl py-1 selectionwhite'>August 2021 - May 2023</p>
                    <ul className='list-disc space-y-2 ml-5 2xl:py-3 text-xs md:text-base xl:text-md 2xl:text-xl text-left'>
                        <li className='selectionwhite'>GPA: 3.9/4.0</li>
                        <li className='selectionwhite'>Ongoing Project with Lockheed Martin titled <i>Subcontract Scorecard Predictive Analytics.</i></li>
                        <li className='selectionwhite'><b>Relevant Coursework:</b> Machine Learning, Neural Networks and Deep Learning, Cybersecurity, Big Data Analytics, Natural Language 
                        Processing, Algorithms, Computability and Complexity, Compiler Design, Software Engineering.</li>
                    </ul>
                </div>
            </article>

            <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[277px] md:w-[550px] lg:w-[550px] xl:w-[600px] 2xl:w-[800px] snap-center p-5 
            bg-black font-montserrat transition-opacity duration-150 overflow-hidden border border-white hover:border-2'>
                <div className='px-1 2xl:p-5'>
                    <h4 className='text-lg md:text-2xl xl:text-3xl 2xl:text-5xl font-light selectionwhite'>University of Warwick</h4>
                    <p className='font-bold text-sm md:text-lg xl:text-lg 2xl:text-3xl py-1 2xl:py-3 selectionwhite'>B.Sc. &#40;Hons&#41; Computing Science and Mathematics &#40;Double Major&#41;</p>
                    <p className='font-light text-sm md:text-base xl:text-md 2xl:text-xl py-1 selectionwhite'>September 2019 - June 2020</p>
                    <ul className='list-disc space-y-2 ml-5 2xl:py-3 text-xs md:text-base xl:text-md 2xl:text-xl text-left'>
                        <li className='selectionwhite'>Student Exchange for a full academic year.</li>
                        <li className='selectionwhite'>GPA: 3.4/4.0</li>
                    </ul>
                </div>
            </article>

            <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[274px] md:w-[550px] lg:w-[550px] xl:w-[600px] 2xl:w-[802px] snap-center p-5 
            bg-black font-montserrat transition-opacity duration-150 overflow-hidden border border-white hover:border-2'>
                <div className='px-1 2xl:p-5'>
                    <h4 className='text-lg md:text-2xl xl:text-3xl 2xl:text-5xl font-light selectionwhite'>University of Malta</h4>
                    <p className='font-bold text-sm md:text-lg xl:text-lg 2xl:text-3xl py-1 2xl:py-3 selectionwhite'>B.Sc. &#40;Hons&#41; Computing Science and Mathematics &#40;Double Major&#41;</p>
                    <p className='font-light text-sm md:text-base xl:text-md 2xl:text-lg py-1 selectionwhite'>October 2017 - June 2021</p>
                    <ul className='list-disc space-y-2 ml-5 2xl:py-3 text-xs md:text-base xl:text-md 2xl:text-xl text-left'>
                        <li className='selectionwhite'>GPA: 3.3/4.0</li>
                        <li className='selectionwhite'>Obtained an A grade in my dissertation titled <i>Automated Data Collection Using Spatial Relationship Detection in Videos</i>. 
                        I developed a system that could analyze videos and use machine learning to find the spatial relationships between identified objects in each of the video&apos;s frames.</li>
                    </ul>
                </div>
            </article>
            
        </motion.div>
    </div>
  )
}