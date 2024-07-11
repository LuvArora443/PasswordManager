import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white '>
      <div className="mycontainer flex justify-between items-center px-12 py-1">

        <div className="logo font-bold text-2xl">
          <span className='text-green-600'>&lt;</span>
          Pass
          <span className='text-green-600'>OP/&gt;</span>
          </div>
        {/* <ul>
            <li className='flex gap-12'>
                <a className='hover:font-bold'  href='/'>Home</a>
                <a className='hover:font-bold'  href='/contact'>Contact</a>
                <a className='hover:font-bold'  href='/about'>About</a>

            </li>
        </ul> */}
        <button className='flex bg-green-700 text-white  mx-2 justify-between rounded-full items-center'>
          <img className='invert w-10 p-1' src="/icons/github.svg" alt="" />
          <span className='font-bold px-2'>GitHub</span>
        </button>
      </div>
    </nav> 
  )
}

export default Navbar