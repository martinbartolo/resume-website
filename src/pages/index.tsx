import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='bg-black text-white h-screen w-full'>
      <Head>
        <title>Martins Website</title>
      </Head>
      
      <Header />

      { /* Hero */ }
      <section id="hero">
        <Hero />
        <Hero />
        <Hero />
        <Hero />
      </section>

      { /* About */ }

      { /* Experience */ }

      { /* Skills */ }

      { /* Projects */ }

      { /* Contact Me */ }
    </div >
  )
}
