import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { HiDocument } from "react-icons/hi2";

export default function Header() {

    const [navBg, setNavBg] = React.useState(false);

    const changeNavBg = () => {
        window.scrollY > 0 ? setNavBg(true) : setNavBg(false);
    }

    React.useEffect(() => {
        changeNavBg()
        window.addEventListener("scroll", changeNavBg)
    })

    return (
        <div onScroll={changeNavBg}>
            <header className={navBg ? 'header bg-black' : 'header bg-transparent' }>
                <div className='flex flex-row items-center space-x-5 2xl:space-x-10 pr-3 2xl:pr-8 md:py-2 2xl:py-5 md:px-10'>
                    <motion.div
                        whileHover={{
                            scale: 1.15,
                            transition: { duration: 0.1 },
                        }}>
                        <SocialIcon className='scale-110 xl:scale-125 2xl:scale-150'
                        url="https://www.linkedin.com/in/martinbartolo"
                        fgColor="white"
                        bgColor="transparent"/>
                    </motion.div>

                    <motion.div
                        whileHover={{
                            scale: 1.15,
                            transition: { duration: 0.1 }
                        }}>
                        <SocialIcon className='scale-110 xl:scale-125 2xl:scale-150'
                        url="https://github.com/martin-bartolo"
                        fgColor="white"
                        bgColor="transparent"/>
                    </motion.div>
                    
                    <motion.div className='pl-3'
                        whileHover={{
                            scale: 1.15,
                            transition: { duration: 0.1 },
                        }}>
                        <a
                            className='font-montserrat font-medium text-base xl:text-lg text-white'
                            href='/MartinBartolo_Resume.pdf'
                            target="_blank">
                            <HiDocument className='w-[32px] h-[32px] 2xl:w-10 2xl:h-10'/>
                        </a>
                    </motion.div>
                </div>
            </header>
        </div>
    )
}