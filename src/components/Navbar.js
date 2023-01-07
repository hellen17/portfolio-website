import {useState} from 'react'

export default function Navbar(){
    let Links =[
        {name:"Home",link:"/"},
        {name:"About me",link:"#about"},
        {name:"Projects",link:"#project"},
        {name:"Articles",link:"#articles"},
        {name:"Contact",link:"#contact"},
      ];
    let [open,setOpen]=useState(false);

    return (
      <div className='shadow-md w-full fixed top-0 left-0 z-50'>
        <div className='md:flex items-center justify-between py-4 md:px-10 px-7' style={{ backgroundColor: 'var(--secondary-color)' }}>
        <div className='font-bold text-2xl cursor-pointer flex items-center' style={{ color: 'var(--primary-color)' }}>
          Hellen Kokach
        </div>
        
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
  
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-10 ':'top-[-490px]'}`} style={{ backgroundColor: 'var(--secondary-color)' }}>
          {
            Links.map((link)=>(
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <a href={link.link} className='text-gray-100 hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
            ))
          }
        </ul>
        </div>
      </div>
    )
}