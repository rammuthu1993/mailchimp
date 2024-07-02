import React, { useRef, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { Sidemodal } from './Sidemodal';
import { IoMdCheckmark } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";


export const NavbarTwo = () => {
    const change = useRef()
    const close = useRef()
    const changetwo = useRef()
    const [disp,setDisp] = useState(false)
    const [disptwo,setDisptwo] = useState(false)
    
    const dis_change=()=>{
         close.current.style.display='block'
        // change.current.style.display='block'
        
         setTimeout(()=>change.current.style.transform='translateX(-100%)',50)
         close.current.style.zIndex ='1'
    }
     const dis_close=()=>{
        changetwo.current.style.display='none'
        setDisp(false)
        setDisptwo(false)
        close.current.style.display='none'
        change.current.style.transform='translateX(0px)'
        
        
         setTimeout(()=>{close.current.style.zIndex ='-1'},1000)
       
        //  change.current.style.display='none'
        //  close.current.style.display='none'
    } 
    const dis_changetwo=()=>{
        changetwo.current.style.display='block'
    }
  return (
    <>
    
    <div className='col-md-12 bg-white d-flex justify-content-between align-items-center py-5 px-1 navtwo_h'>
        

         <span className='col-md-2 p-3'><img style={{height:'40px'}} src={require('./imgs/intmail.png')} alt="initmail" /></span> 

        <div  className='col-md-3 p-1 d-flex justify-content-evenly align-items-center'>
        <div><Link className='text-decoration-none text-dark'>Pricing</Link></div>

<div><button className='p-2 h5 btn-style' >Login</button></div>

<div>
<button className=' dropdown border-0' onClick={dis_change}><RxHamburgerMenu className='h1'/></button>
</div> 


            </div>
{/*---------------modal--------------------------------------*/}
<div className='overlay' ref={close}>
<div className='navtwo_drop bg-white p-4' style={{display: disp ? '' :""}} ref={change}> 
                <ul className='list-unstyled'>
                <li><button className='float-end border-0' onClick={dis_close}><IoMdClose className='h1'/></button></li><br /> <br />
                </ul>
                <ul className='list-unstyled lh-base'>

                   <li className='h3' style={{cursor:'pointer'}} onClick={()=>setDisp(true)}>Solutions and Services<FaAngleRight className='float-end'/></li>  <br />
                   <li className='h3' onClick={()=>setDisptwo(true)} style={{cursor:'pointer'}}>Resources<FaAngleRight className='float-end'/></li> <br />
                   <li className='h3'>Switch to Mailchimp<FaAngleRight className='float-end'/></li> 
                   </ul>
                   <ul className='list-unstyled' style={{lineHeight:'50px'}}>
                   <li><FaSearch />&nbsp;&nbsp;Search</li>
                   <li className='d-flex vertical-align-center'><img className='img_h' src={require("./imgs/websites_domains_24.avif")} alt="" />&nbsp;&nbsp;
        <select style={{height:'30px'}}>
         <option value="EN"><span style={{borderRight:'1px solid grey'}}>EN</span>&nbsp;<span >English&nbsp;<IoMdCheckmark /></span></option>
         <option value="TA"><span style={{borderRight:'1px solid grey'}}>TA</span>&nbsp;<span>Tamil</span>&nbsp;<IoMdCheckmark /></option>
         <option value="PR"><span style={{borderRight:'1px solid black'}}>PR</span>&nbsp;<span>Portugues</span>&nbsp;<IoMdCheckmark /></option>
         </select></li>
                   <li><FaPhoneAlt />&nbsp;&nbsp;Contact Sales: +1 (800) 315-5939</li>
                   </ul>
                   <ul className='list-unstyled'>
                   <li><button className='col-md-12 p-2 px-5 h5 btn-style' >Login</button></li><br />
                   <li><button className='col-md-12 p-2 px-5 h5 btn-style bg-warning' >Sign up</button></li>
                </ul>
            </div> 
{/*---------------------------------second-modal----------------------------*/}
             <div className='bg-white second_modal' style={{right:disp ? '0px' : ""}} ref={changetwo}>
                    <ul className='list-unstyled'>
                        <li ><span onClick={()=>setDisp(false)}><FaChevronLeft/>Back</span><IoMdClose className='h1 float-end me-5' onClick={dis_close}/></li>
                    </ul>
                    <ul className='list-unstyled px-4' style={{lineHeight:'50px',fontSize:'20px'}}>
                        <li><b>Solutions and Services </b></li>
                        <li><Link to='/Emailmarketing' className='text-decoration-none text-dark'>Email marketing</Link></li>
                        <li>Websites</li>
                        <li>Social media marketing</li>
                        <li>Templates</li>
                        <li>Marketing automation</li>
                        <li>Reporting & analytics</li>
                        <li>Audience management</li>
                        <li>AI marketing tools</li>
                        <li>Content Creation Tools</li>
                        <li>See all features</li>
                        <li>See what’s new</li>

                        <li>For your industry</li>     
                         <li>Professional Services</li>
                        <li>Integrate your apps</li>
                    </ul>
                </div>       
               {/*------------------------third-modal------------------------*/}

              <div className='third-modal bg-white' style={{display:disptwo ? 'block' : '',right:disptwo ? '0px' : ""}} ref={changetwo}>
                
                <ul className='list-unstyled'>
                        <li ><span onClick={()=>setDisptwo(false)}><FaChevronLeft/>Back</span><IoMdClose className='h1 float-end me-5' onClick={dis_close}/></li>
                    </ul>
            
                     <ul className='list-unstyled px-4' style={{lineHeight:'50px',fontSize:'20px'}}>
                        <li><b>Resources </b></li>
                        <li>Learn with Mailchimp Mailchimp Presents For Developers</li>
                        <li>See all resources</li>

                        <li>Help Center</li>
                        <li>Case Studies</li>
                        <li>Events</li>
                        <li>Professional Services</li>
                     </ul>
              </div>

           </div>
{/*-------------------modal-end------------------------------*/} 

            </div>
        {/* */}

{/*             <div>
            <Sidemodal/>
            </div> */}




   
                             

       
    </>
  )
}
