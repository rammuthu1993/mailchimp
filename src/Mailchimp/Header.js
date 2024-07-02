import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar } from './Navbar'
import { NavbarTwo } from './NavbarTwo'

export const Header = () => {
  return (
    <>
    
     
      <div>
      <Link><img style={{height:'50px'}} src={require('./imgs/intuit.png')} alt="" /></Link>&nbsp;<Link><img src={require('./imgs/qb.png')} style={{height:'20px'}} alt="" /></Link>&nbsp;<Link><img src={require('./imgs/mc.png')} style={{height:'20px'}} alt="" /></Link>
      </div>

    <div className='bg-dark text-center text-white p-2'>Save 50% for 12 months <br />
    - limited time offer. <span style={{textDecoration:'underline dotted white'}}>Get started today.</span></div>

    
    {/* <div id='hamburger'>
     <Navbar/>
     </div>
     <div id='hamburgertwo'>
     <NavbarTwo/>
     </div> */}
    
    </>
  )
}
