import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function AboutPage() {
  return (
    <div className='relative overflow-hidden scroll-smooth select-none'>
      <Navbar/>
       <section className=' bg-[#A1E48C] py-[25vh] px-4 lg:px-6 mx-auto'>
        <section className='overflow-hidden lg-h-[100vh] flex flex-col justify-center items-center '>
          <h2 className='font-bold text-2xl sm:text-4xl md:text-4xl lg:text-6xl text-center'>Tech <span className='text-green-600'>Solutions</span> For Africa's Progress
          </h2>      
          <p className='text-xl md:text-2xl my-5 text-center max-w-5xl'>AllForms is a texhnology company dedicated to addressing challenges faced by Africans through innovative software solutions.Ourmission is to be at the forefront of technological advancements that propel Africa's progress. we strive to empower communities, drive ecomic development, and contribute to the continent's global compeetitiveness. </p>
          </section>
      </section>
      <div className=' mx-auto bg-[#4D7E3E] mb-0'>
      <section className="overflow-hidden pt-20">
                <div className='overflow-hidden flex flex-col items center justify-center'>
                <h2 className='font-bold text-2xl sm:text-4xl md:text-4xl lg:text-6xl text-center'>Our Perfect Team
          </h2>      
          <p className='text-xl md:text-2xl my-5 text-center max-w-5xl m-auto'>AllForms is a texhnology company dedicated to addressing challenges faced by Africans through innovative software solutions.Ourmission is to be at the forefront of technological advancements that propel Africa's progress. we strive to empower communities, drive ecomic development, and contribute to the continent's global compeetitiveness. </p>
                      </div>
                        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 max-w-7xl mx-auto gap-10 my-24   ">
                        <div className='  md:w-[350px] rounded-xl mx-auto my-20 bg-white relative w-[300px] sm:w-[350px] h-[370px] sm:h-[420px] flex items-center justify-center'>
                            <div className='absolute top-[-20%] sm:w-[300px] w-[250px] inset-0 m-auto '>
                            <img src="/CEO.JPG" alt="" className=' rounded-xl' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsam velit nulla animi</p>
                            </div>
                          </div>
                          <div className='  md:w-[350px] rounded-xl mx-auto my-20 bg-white relative w-[300px] sm:w-[350px] h-[370px] sm:h-[420px] flex items-center justify-center'>
                            <div className='absolute top-[-20%] sm:w-[300px] w-[250px] inset-0 m-auto '>
                            <img src="/iroko_coo.jpg" alt="" className=' rounded-xl w-[350px] h-[340px] sm:w-[] sm:h-[400px] ' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsam velit nulla animi</p>
                            </div>
                          </div>
                          <div className='  md:w-[350px] rounded-xl mx-auto my-20 bg-white relative w-[300px] sm:w-[350px] h-[370px] sm:h-[420px] flex items-center justify-center'>
                            <div className='absolute top-[-20%] sm:w-[300px] w-[250px] inset-0 m-auto '>
                            <img src="/misoma.png" alt="" className=' rounded-xl' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsam velit nulla animi</p>
                            </div>
                          </div>
                          <div className='  md:w-[350px] rounded-xl mx-auto my-20 bg-white relative w-[300px] sm:w-[350px] h-[370px] sm:h-[420px] flex items-center justify-center'>
                            <div className='absolute top-[-20%] sm:w-[310px] w-[250px] inset-0 m-auto '>
                            <img src="/ridwan.jpg" alt="" className=' rounded-xl  w-[350px] h-[340px] sm:w-[px] sm:h-[400px]' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsam velit nulla animi</p>
                            </div>
                          </div>
                          <div className='  md:w-[350px] rounded-xl mx-auto my-20 bg-white relative w-[300px] sm:w-[350px] h-[370px] sm:h-[420px] flex items-center justify-center'>
                            <div className='absolute top-[-20%] sm:w-[300px] w-[250px] inset-0 m-auto '>
                            <img src="/prudence.jpg" alt="" className=' rounded-xl  ' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsam velit nulla animi</p>
                            </div>
                          </div>
                          <div className='  md:w-[350px] rounded-xl mx-auto my-20 bg-white relative w-[300px] sm:w-[350px] h-[370px] sm:h-[420px] flex items-center justify-center'>
                            <div className='absolute top-[-20%] sm:w-[300px] w-[250px] inset-0 m-auto '>
                            <img src="/me.jpg" alt="" className=' rounded-xl' />
                            <h4 className='text-xl font-semibold'>Frontend Developer</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsam velit nulla animi</p>
                            </div>
                          </div>
                        </div>
                </section>
                <Footer/>
      </div>
      
    </div>
  )
}

export default AboutPage