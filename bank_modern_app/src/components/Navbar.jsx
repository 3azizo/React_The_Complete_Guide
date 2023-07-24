import {useState} from 'react';
import {close,logo,menu} from "../assets";
import {navLinks} from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navList=navLinks.map((link,index)=>(
    <li key={link.id} className={`font-poppins font-normal cursor-pointer text-[16px] 
      ${index===navLinks.length-1?"mr-0":"mr-10"} text-white small_nav_link`}>
        <a href={`#${link.id}`}>{link.title}</a>
    </li>
  ))
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="hoobank" className='w-[124px] h-[32px]'/>
      <ul className='list-none hidden sm:flex  justify-end items-center flex-1'>
        {navList}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img 
          src={toggle?close:menu} alt="menu" className='w-[28px] h-[28px] object-contain'
          onClick={()=>setToggle((prev)=>!prev)} />
        {toggle&&<div className='flex p-6 bg-black-gradient 
          absolute top-20 right-0 mx-4 my-2 min-w-[140px] sidebar rounded-xl'>
          <ul className='list-none flex-col flex  justify-end items-center flex-1'>
            {navList}
          </ul>
        </div>}
      </div>
    </nav>
  )
}

export default Navbar