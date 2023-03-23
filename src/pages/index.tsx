import Head from 'next/head'
import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'

export default function Home() {
  return (
    <div className='bg-black text-white scroll-smooth'>
      <Head>
        <title>Martin Bartolo</title>
      </Head>
      
      <Header />

      { /* Hero */ } 
      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      { /* About */ }
      <section id="about" className='snap-center'>
        <About />
      </section>

      { /* Experience */ }
      <section id="experience" className='snap-center'>
        <Experience />
      </section>

      { /* Education */ }

      { /* Skills */ }

      { /* Contact Me */ }
    </div >
  )
}
