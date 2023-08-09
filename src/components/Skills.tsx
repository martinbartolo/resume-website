import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

type skill = {
	name: string;
	path: string;
};

type Props = {};

function Skill(props: skill) {
	const altText = `${props.name} logo`;
	return (
		<div className='scale-[0.85] 2xl:scale-100 flex flex-col items-center justify-evenly space-y-2'>
			<Image src={props.path} alt={altText} width={50} height={50} />

			<h3 className='w-20 flex font-poppins items-center justify-center text-center selectionwhite text-base md:text-lg'>
				{props.name}
			</h3>
		</div>
	);
}

export default function Skills({}: Props) {
	return (
		<div className='xl:scale-95 max-w-full h-fit relative px-10 mx-auto items-start justify-evenly'>
			<motion.h1
				className='relative top-20 md:top-24 text-center selectionwhite font-poppins font-bold text-6xl md:text-7xl 2xl:text-8xl'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}>
				Skills
			</motion.h1>

			<div className='mx-auto gap-20 pt-32 space-y-10 md:space-y-16 md:mx-20'>
				<div className='flex flex-col items-center justify-between space-y-5'>
					<motion.h2
						className='font-poppins font-light text-center selectionwhite text-4xl'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}>
						Back End
					</motion.h2>

					<motion.div
						className='flex flex-wrap justify-evenly gap-5 2xl:gap-10'
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
						<Skill name='Python' path='/logos/python.svg' />
						<Skill name='Java' path='/logos/java.svg' />
						<Skill name='Flask' path='/logos/flask.png' />
						<Skill name='MongoDB' path='/logos/mongodb.svg' />
						<Skill name='Postman' path='/logos/postman.svg' />
					</motion.div>
				</div>

				<div className='flex flex-col items-center justify-between space-y-5 '>
					<motion.h2
						className='font-poppins font-light text-center selectionwhite text-4xl'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}>
						Machine Learning
					</motion.h2>

					<motion.div
						className='flex flex-wrap justify-evenly gap-5 wxl:gap-10'
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
						<Skill name='Hugging Face' path='/logos/huggingface.svg' />
						<Skill name='Keras' path='/logos/keras.svg' />
						<Skill name='PyTorch' path='/logos/pytorch.svg' />
						<Skill name='TensorFlow' path='/logos/tensorflow.svg' />
					</motion.div>
				</div>

				<div className='flex flex-col items-center justify-between space-y-5 xl:space-y-10'>
					<motion.h2
						className='font-poppins font-light text-center selectionwhite text-4xl'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}>
						Other Tools
					</motion.h2>

					<motion.div
						className='flex flex-wrap justify-evenly gap-5 2xl:gap-10'
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
						<Skill name='Docker' path='/logos/docker.svg' />
						<Skill name='Git' path='/logos/git.svg' />
						<Skill name='C' path='/logos/c.svg' />
						<Skill name='C++' path='/logos/c++.svg' />
						<Skill name='Haskell' path='/logos/haskell.svg' />
					</motion.div>
				</div>

				<div className='flex flex-col items-center justify-between space-y-5 xl:space-y-10'>
					<motion.h2
						className='font-poppins font-light text-center selectionwhite text-4xl'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}>
						Front End
					</motion.h2>

					<motion.div
						className='flex flex-wrap justify-evenly gap-5 2xl:gap-10'
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
						<Skill name='React.js' path='/logos/reactjs.svg' />
						<Skill name='Next.js' path='/logos/nextjs.png' />
						<Skill name='HTML5' path='/logos/html5.svg' />
						<Skill name='CSS3' path='/logos/css3.svg' />
						<Skill name='Tailwind' path='/logos/tailwind.svg' />
						<Skill name='JavaScript' path='/logos/javascript.svg' />
						<Skill name='TypeScript' path='/logos/typescript.svg' />
					</motion.div>
				</div>
			</div>
		</div>
	);
}
