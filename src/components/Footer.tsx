import { motion } from 'framer-motion';
import React from 'react';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

type Props = {};

export default function Footer({}: Props) {
	return (
		<footer className='pt-10 pb-5 flex flex-col text-sm relative justify-center items-center gap-10 mx-auto z-20'>
			<motion.div
				initial={{
					y: 30,
					opacity: 0,
				}}
				whileInView={{
					y: 0,
					opacity: 100,
				}}
				transition={{ duration: 0.25 }}
				whileHover={{
					scale: 1.15,
					transition: { duration: 0.1 },
				}}>
				<Link to='hero' smooth={true}>
					<BsArrowUpCircleFill className='cursor-pointer w-[32px] h-[32px] 2xl:w-10 2xl:h-10' />
				</Link>
			</motion.div>
			<span className='text-xs md:text-sm'>
				Built with Next.js and Tailwind CSS, deployed with Vercel.
			</span>
		</footer>
	);
}
