import React from 'react'
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {}

export default function ContactMe({}: Props) {
  return (
    <div className='flex flex-col relative max-w-full h-screen bg-black px-10 mx-auto'>
        <div>
            <h4 className='selectionwhite text-4xl font-montserrat text-left'>
                Interested in working together?<br></br>
                <span className='selectionwhite font-bold'>Let&apos;s Talk</span>
            </h4>

            <div className='py-5 space-y-3'>
                <div className='flex items-center space-x-5'>
                    <PhoneIcon className='h-7 w-7'/>
                    <p className='selectionwhite text-2xl font-montserrat'>&#40;720&#41; 900-8410</p>
                </div>

                <div className='flex items-center space-x-5'>
                    <EnvelopeIcon className='h-7 w-7'/>
                    <p className='selectionwhite text-2xl font-montserrat'>martin9oh9@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}