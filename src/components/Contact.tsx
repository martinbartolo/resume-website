import { send } from 'emailjs-com';
import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

export default function Contact({}: Props) {
	const [toSend, setToSend] = React.useState({
		from_name: '',
		reply_to: '',
		message: '',
	});

	const onSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();

		send('service_vjrj0lu', 'template_fp82evd', toSend, 'DVk09GD4w6gOAHZDh')
			.then(() => {
				document
					.querySelectorAll('textarea')
					.forEach((singleInput) => (singleInput.value = ''));
				document
					.querySelectorAll('input')
					.forEach((singleInput) => (singleInput.value = ''));
				alert('Message Sent.');
			})

			.catch((err) => {
				console.log('Message Failed to Send.', err);
				alert('Message Failed to Send.');
			});
	};

	const handleChange = (e: { target: { name: any; value: any } }) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};

	return (
		<div className='w-full h-fit space-y-32 2xl:pt-20 relative px-10 mx-auto flex flex-col items-center justify-evenly'>
			<motion.h1
				className='relative top-20 text-center selectionwhite font-poppins font-bold text-6xl md:text-7xl 2xl:text-8xl'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}>
				Contact
			</motion.h1>

			<motion.form
				className='relative flex flex-col space-y-2 w-full md:w-8/12'
				onSubmit={onSubmit}
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
				<input
					className='contactInput h-12'
					type='text'
					name='from_name'
					placeholder='Name'
					value={toSend.from_name}
					onChange={handleChange}
					required
				/>
				<input
					className='contactInput h-12'
					type='email'
					name='reply_to'
					placeholder='Email'
					value={toSend.reply_to}
					onChange={handleChange}
					required
				/>
				<textarea
					className='contactInput'
					name='message'
					placeholder='Message'
					value={toSend.message}
					onChange={handleChange}
					required></textarea>

				<motion.button
					type='submit'
					className='ml-auto font-medium font-poppins text-lg gradient w-28 p-2 rounded-sm border-2'
					whileHover={{
						scale: 1.05,
						transition: { duration: 0.1 },
					}}>
					{' '}
					Send{' '}
				</motion.button>
			</motion.form>
		</div>
	);
}
