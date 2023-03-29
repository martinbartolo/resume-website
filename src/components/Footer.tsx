import { motion } from 'framer-motion'
import React from 'react'
import { BsArrowUpCircleFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className='py-10 flex relative justify-center items-end mx-auto z-20'>
        <motion.div
            initial={{
              y: 30,
              opacity: 0
            }}
            whileInView={{
              y: 0,
              opacity: 100
            }}
            transition={{ duration: 0.2 }}
            whileHover={{
              scale: 1.15,
              transition: { duration: 0.5 },
            }}>
            <Link 
            to='hero'
            smooth={true}>
                <BsArrowUpCircleFill className='cursor-pointer w-[32px] h-[32px] 2xl:w-10 2xl:h-10'/>
            </Link>
        </motion.div>
    </footer>
  )
}