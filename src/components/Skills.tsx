import React from 'react'
import Image from 'next/image'

type skill = {
    name: string;
    path: string;
}

type Props = {}

function Skill(props: skill) {
    const altText = `${props.name} logo`
    return(
        <div className='flex flex-col items-center justify-between space-y-2'>
            <Image 
            src={props.path}
            alt={altText}
            width={50}
            height={50}
            />

            <h3 className='font-montserrat text-center selectionwhite text-base 2xl:text-lg'>
                {props.name}
            </h3>
        </div> 
    )
}

export default function Skills({}: Props) {
  return (
    <div className='max-w-full h-fit relative px-10 mx-auto items-start justify-evenly'>
        <h1 className='relative top-20 md:top-24 text-center selectionwhite font-montserrat font-bold text-6xl md:text-7xl 2xl:text-8xl'>
            Skills.
        </h1>

        <div className='mx-auto gap-20 py-36 md:py-48 items-start justify-center flex-shrink space-y-16 xl:space-y-0 xl:grid xl:grid-cols-4 md:mx-20'>
            <div className='flex flex-col items-center justify-between space-y-10'>
                <h2 className='font-montserrat font-medium text-center selectionwhite xl:text-4xl'>
                    Front End
                </h2>

                <div className='flex flex-wrap justify-evenly gap-6 md:gap-10 lg:gap-14 xl:gap-10'>
                    <Skill name="React.js" path='/logos/reactjs.svg'/>
                    <Skill name="Next.js" path='/logos/nextjs.png'/>
                    <Skill name="HTML5" path='/logos/html5.svg'/>
                    <Skill name="CSS3" path='/logos/css3.svg'/>
                    <Skill name="Tailwind" path='/logos/tailwind.svg'/>
                    <Skill name="JavaScript" path='/logos/javascript.svg'/>
                    <Skill name="TypeScript" path='/logos/typescript.svg'/>
                </div>
            </div>

            <div className='flex flex-col items-center justify-between space-y-10'>
                <h2 className='font-montserrat font-medium text-center selectionwhite text-4xl'>
                    Back End
                </h2>

                <div className='flex flex-wrap justify-evenly gap-6 md:gap-10 lg:gap-14 xl:gap-10'>
                    <Skill name="Python" path='/logos/python.svg'/>
                    <Skill name="Java" path='/logos/java.svg'/>
                    <Skill name="Flask" path='/logos/flask.png'/>
                    <Skill name="MongoDB" path='/logos/mongodb.svg'/>
                    <Skill name="Postman" path='/logos/postman.svg'/>
                </div>
            </div>

            <div className='flex flex-col items-center justify-between space-y-10'>
                <h2 className='font-montserrat font-medium text-center selectionwhite text-4xl'>
                    Machine Learning
                </h2>

                <div className='flex flex-wrap justify-evenly gap-6 md:gap-10 lg:gap-14 xl:gap-10'>
                    <Skill name="Hugging Face" path='/logos/huggingface.svg'/>
                    <Skill name="Keras" path='/logos/keras.svg'/>
                    <Skill name="PyTorch" path='/logos/pytorch.svg'/>
                    <Skill name="TensorFlow" path='/logos/tensorflow.svg'/>
                </div>
            </div>

            <div className='flex flex-col items-center justify-between space-y-10'>
                <h2 className='font-montserrat font-medium text-center selectionwhite text-4xl'>
                    Other Tools
                </h2>

                <div className='flex flex-wrap justify-evenly gap-6 md:gap-10 lg:gap-14 xl:gap-10'>
                    <Skill name="C" path='/logos/c.svg'/>
                    <Skill name="C++" path='/logos/c++.svg'/>
                    <Skill name="Docker" path='/logos/docker.svg'/>
                    <Skill name="Git" path='/logos/git.svg'/>
                    <Skill name="Haskell" path='/logos/haskell.svg'/>
                    <Skill name="Heroku" path='/logos/heroku.svg'/>
                </div>
            </div>

        </div>

    </div>
  )
}