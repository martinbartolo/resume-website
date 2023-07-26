import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

export default function About({}: Props) {
	return (
		<div className='flex gradient -skew-y-[5deg] py-20'>
			<div className='xl:scale-95 relative max-w-full h-fit space-y-10 skew-y-[5deg] px-10 mx-auto'>
				<motion.h1
					className='relative text-center font-poppins font-bold text-5xl md:text-7xl 2xl:text-8xl'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}>
					About Me
				</motion.h1>

				<motion.p
					className='font-poppins max-w-prose text-justify text-sm md:text-lg xl:text-xl 2xl:text-2xl overflow-visible'
					initial={{
						y: 100,
						opacity: 0,
					}}
					whileInView={{
						y: 0,
						opacity: 1,
					}}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}>
					I&apos;ve had the privilege of experiencing life in different parts of
					the world - from the island of Malta where I grew up, to the UK where
					I lived and studied for a year. Currently, I&apos;m settled in the
					stunning foothills of Boulder, Colorado, where the breathtaking
					scenery has become a significant source of inspiration in my life.
					Colorado&apos;s diverse landscapes provide me with ample opportunities
					to pursue my outdoor interests, including skiing, fishing, and hiking.
					<br />
					<br />
					Aside from exploring the great outdoors, music has always been my
					passion. I have a{' '}
					<a
						className='decoration-wavy underline text-blue-700 sm:text-white sm:hover:decoration-blue-700'
						href='https://www.youtube.com/@yesok'
						target='_blank'>
						YouTube channel
					</a>{' '}
					with over 4k subscribers and 1.25m views where I share my music
					production. The creative process of producing music is my happy place,
					and has enabled me to connect with people from all over the world.
				</motion.p>
			</div>
		</div>
	);
}
