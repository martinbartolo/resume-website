import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-scroll';

type Props = {};

export default function Hero({}: Props) {
	return (
		<div className='big-image'>
			<div className='overlay'>
				<div className='h-screen scale-[0.8] xl:scale-100 2xl:scale-110 flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
					<div>
						<motion.h1
							className='text-center text-5xl md:text-7xl max-w-prose pb-10 font-playfair drop-shadow-[3px_3px_0_rgba(0,0,0,1)]'
							initial={{
								x: -100,
								opacity: 0,
							}}
							whileInView={{
								x: 0,
								opacity: 1,
							}}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}>
							Hey, I&apos;m Martin.
						</motion.h1>

						<motion.h2
							className='text-center md:text-justify text-xl md:text-xl px-5 max-w-prose pb-8 font-montserrat'
							initial={{
								x: -100,
								opacity: 0,
							}}
							whileInView={{
								x: 0,
								opacity: 1,
							}}
							viewport={{ once: true }}
							transition={{ duration: 1 }}>
							I am a recent M.S Computer Science graduate from the University of
							Colorado Boulder. I am passionate about using cutting-edge
							technology to design and develop reliable, elegant software
							solutions. I am currently searching for exciting and challenging
							full-stack development opportunities but I am also open to similar
							roles in the software engineering field.
						</motion.h2>

						<motion.div
							className='flex  justify-center'
							initial={{
								x: -100,
								opacity: 0,
							}}
							whileInView={{
								x: 0,
								opacity: 1,
							}}
							viewport={{ once: true }}
							transition={{ duration: 1.25 }}>
							<Link to='skills' smooth={true}>
								<motion.button
									className='heroButton'
									whileHover={{
										scale: 1.1,
										transition: { duration: 0.1 },
									}}>
									Skills
								</motion.button>
							</Link>

							<Link to='experience' smooth={true}>
								<motion.button
									className='heroButton'
									whileHover={{
										scale: 1.1,
										transition: { duration: 0.1 },
									}}>
									Experience
								</motion.button>
							</Link>

							<Link to='about' smooth={true}>
								<motion.button
									className='heroButton'
									whileHover={{
										scale: 1.1,
										transition: { duration: 0.1 },
									}}>
									About
								</motion.button>
							</Link>

							<Link to='contact' smooth={true}>
								<motion.button
									className='heroButton'
									whileHover={{
										scale: 1.1,
										transition: { duration: 0.1 },
									}}>
									Contact
								</motion.button>
							</Link>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}
