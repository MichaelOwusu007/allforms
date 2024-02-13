import React from 'react'
import '../styles/Home.css'
import Navbar from '../components/Navbar'
import Homepagebanner from '../components/Homepagebanner'
import Footer from '../components/Footer'
import { FaTwitter } from 'react-icons/fa'

function HomePage() {
  return (
    <div className=''>
      <Navbar/>
      <Homepagebanner/>
      <div className='relative scroll-smooth select-none'>
      <div className='px-6 max-w-6xl lg:px-4 mx-auto'>
      <div className="homepage-title mt-[20px]  ">
          <h2 className=" text-center font-bold text-2xl sm:text-3xl md:text-4xl mt-[6rem]  md:mt-[8rem] mb-5 ">Latest Project </h2>
          <p className=" homepage  text-[18px]  md:text-lg lg:text-xl leading-8 mb-[4rem] lg:text-center "> <span className='font-semibold text-green-500 text-2xl'>Arnwrk</span> at Allformslimited we are currently immersed in a captivating project that celebrates artisans' craftmanshp. With a blend of traditional techniques and modern innovation. Each step of the process is infused with passion and dedication, resulting in meticulously crafted works of art.The freelancing site for all artisans,face to face service provider's home.</p>
        </div>
        <section className=' mb-[6rem] mb:mb-[8rem] '>
          <img className='object-cover w-full lg:max-w-5xl mx-auto' src="/LatestProject.png.png" alt="latest Project" />
        </section>
      </div>
      <div className='max-w-7xl mx-auto px-6 lg:px-4  '>
      <section className="mb-20">
                        <h2 className="title text-center px-2 mb-3 font-semibold relative text-4xl">Latest News</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
                        <div className=" shadow-2xl bg-[rgba(243,241,241,0.8)] flex flex-col gap-4 rounded-md p-4 py-6">

                            <div className='flex justify-between'>
                                <div>
                                    <img className='w-15 h-10' src="/logo.main.png" alt="" />
                                    <span className='flex items-center gap-2 mt-2'> <FaTwitter/>i am Micheal</span>
                                </div>
                                <div className=''>
                                    <p>13/12/2001</p>
                                </div>
                            </div>
                        
                        <div>
                                    <p className="md:text-lg">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae accusamus modi minima voluptatibus officia fugiat cum rem perspiciatis
                                    </p>
                                </div>
                            </div>
                            <div className=" shadow-2xl bg-[rgba(253,253,253,0.8)] flex-col flex gap-4 rounded-md p-4 py-6">
                            <div className='flex justify-between'>
                                <div>
                                    <img className='w-15 h-10' src="/logo.main.png" alt="" />
                                    <span className='flex items-center gap-2 mt-2'> <FaTwitter/>i am Micheal</span>
                                </div>
                                <div className=''>
                                    <p>13/12/2001</p>
                                </div>
                            </div>
                                <div>
                                   
                                    <p className="md:text-lg">
                                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis dolorem vel officiis eligendi consequuntur ex.
                                    </p>
                                </div>
                            </div>
                            <div className=" shadow-2xl  bg-[rgba(251,250,250,0.8)] flex flex-col gap-4 rounded-md p-4 py-6">
                            <div className='flex justify-between'>
                                <div>
                                    <img className='w-15 h-10' src="/logo.main.png" alt="" />
                                    <span className='flex items-center gap-2 mt-2'> <FaTwitter/>i am Micheal</span>
                                </div>
                                <div className=''>
                                    <p>13/12/2001</p>
                                </div>
                            </div>
                                <div>
                                    <h2 className="text-xl font-semibold">UI/UX Design</h2>
                                    <p className="md:text-lg">
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odit deserunt magnam ducimus, animi, quo
                                    </p>
                                </div>
                            </div>
                            <div className=" shadow-2xl bg-[rgba(243,241,241,0.8)] flex flex-col gap-4 rounded-md p-4 py-6">
                            <div className='flex justify-between'>
                                <div>
                                    <img className='w-15 h-10' src="/logo.main.png" alt="" />
                                    <span className='flex items-center gap-2 mt-2'> <FaTwitter/> i am Micheal</span>
                                </div>
                                <div className=''>
                                    <p>13/12/2001</p>
                                </div>
                            </div>
                        <div>
                         <h2 className="text-xl font-semibold">Web Development</h2>
                                    <p className="md:text-lg">
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id incidunt eaque debitis nisi eum laudantium impedit. 
                                    </p>
                                </div>
                            </div>
                            <div className=" shadow-2xl bg-[rgba(253,253,253,0.8)] flex flex-col gap-4 rounded-md p-4 py-6">
                            <div className='flex justify-between'>
                                <div>
                                    <img className='w-15 h-10' src="/logo.main.png" alt="" />
                                    <span className='flex items-center gap-2 mt-2'> <FaTwitter/>i am Micheal</span>
                                </div>
                                <div className=''>
                                    <p>13/12/2001</p>
                                </div>
                            </div>
                                <div>
                                    <h2 className="text-xl font-semibold">Problem Solving</h2>
                                    <p className="md:text-lg">
                                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam consectetur, odit corrupti fuga obcaecati, 
                                    </p>
                                </div>
                            </div>
                            <div className=" shadow-2xl  bg-[rgba(251,250,250,0.8)] flex flex-col gap-4 rounded-md p-4 py-6">
                            <div className='flex justify-between'>
                                <div>
                                    <img className='w-15 h-10' src="/logo.main.png" alt="" />
                                    <span className='flex items-center gap-2 mt-2'> <FaTwitter/>i am Micheal</span>
                                </div>
                                <div className=''>
                                    <p>13/12/2001</p>
                                </div>
                            </div>
                                <div>
                                    <h2 className="text-xl font-semibold">UI/UX Design</h2>
                                    <p className="md:text-lg">
                                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium ab sint laborum, cum doloribus
                                    </p>
                                </div>
                            </div>
                        </div>
                </section>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage