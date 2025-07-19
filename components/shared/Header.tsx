import React from 'react'

function Header({title,subtitle}: {title:string, subtitle?:string}) {
  return (
   <>
   <h2 className='text-[30px] font-bold md:text-[36px] leading-[110%]  m-6 font-weight-200'>{title}</h2>
   {subtitle && <p className=" font-normal text-[16px] leading-[140%]  mt-4 m-6">{subtitle}</p>}
   </>

  )
}

export default Header