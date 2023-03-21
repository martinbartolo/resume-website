import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='bg-black text-white h-screen w-full'>
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

      { /* Skills */ }

      { /* Projects */ }

      { /* Contact Me */ }
    </div >
  )
}
