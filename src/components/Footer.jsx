import React from 'react'
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


function Footer() {
  return (
    <div className=' bg-[#202020] text-white'>
      <div className=' mt-10 p-10 py-[5rem] pb-44 '>
        <div className=' max-w-6xl m-auto  '>
          <div className=' flex gap-10 flex-col md:flex-row md:items-start flex-wrap justify-between w-full font-normal  text-base '>
            <div>
              <h4 className='text-lg font-semibold'>NEWSLETTER</h4>
              <p>Want to know what we are up to? signup for the <br/> news letter and jion our community</p>
              <div className=' mt-5'>
                    <input type='text' name='email' placeholder='Your Email Here' className='p-2 text-center px-8 rounded-sm focus:outline bg-slate-300 text-black '>
                    </input>
              </div>
              <button className='px-3 mt-3 py-2 bg-green-600 rounded-md'>Subcribe</button>
            </div>
            <div>
              <p>
                &copy;
                2024 Allformslimited
              </p>
              <p>All Rights Reserved</p>
            </div>
            <div className='flex items-center gap-5 '>
              <a href="https://twitter.com/that_selorm_guy" className='text-2xl'><i><FiTwitter /></i></a>
              <a href="https://t.co/3DE0jYOQIe" className='text-2xl'><i><FaInstagram /></i></a>
              <a href="mailto:" className='text-2xl'><i><CiMail /></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer