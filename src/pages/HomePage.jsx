import React from 'react'
import '../styles/Home.css'
import Navbar from '../components/Navbar'
import Homepagebanner from '../components/Homepagebanner'

function HomePage() {
  return (
    <div className=''>
      <Navbar/>
      <Homepagebanner/>
      <div className='relative scroll-smooth select-none'>
      <div className='max-w-7xl px-6 lg:px-4 mx-auto'>
      <div className="homepage-title mt-[20px] ">
          <h2 className=" young-serif-font text-center text-3xl sm:text-4xl md:text-7xl mt-[6rem]  md:mt-[8rem] mb-5 ">Latest Project </h2>
          <p className=" homepage  text-[18px]  md:text-lg lg:text-xl leading-8 mb-[4rem] "> <span className='font-semibold text-green-500 text-2xl'>Arnwrk</span> at Allformslimited we are currently immersed in a captivating project that celebrates artisans' craftmanshp. With a blend of traditional techniques and modern innovation. Each step of the process is infused with passion and dedication, resulting in meticulously crafted works of art.The freelancing site for all artisans,face to face service provider's home.</p>
        </div>
        <section className=' mb-[6rem] mb:mb-[8rem] '>
          <img src="/HeaderImage.png" alt="latest Project" />
        </section>
      </div>
      </div>
    </div>
  )
}

export default HomePage