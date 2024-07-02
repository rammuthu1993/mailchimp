import React,{useRef} from 'react'
import { IoMdCheckmark } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

export const Sidemodal = () => {
    const change = useRef()
    const close = useRef()
    const dis_change=()=>{
        close.current.style.display='block'
        // change.current.style.display='block'
         change.current.style.transform='translateX(-100%)'
    }
     const dis_close=()=>{
        change.current.style.transform='translateX(0px)'
        //  change.current.style.display='none'
         close.current.style.display='none'
    } 
  return (
    <>
{/*---------------modal--------------------------------------*/}

<div className='overlay' ref={close}>
<div className='navtwo_drop bg-white p-4' ref={change}> 
                
                <ul className='list-unstyled'>

                   <li><button className='float-end border-0' onClick={dis_close}><IoMdClose className='h1'/></button></li><br /> <br />
                   <li className='h2 border-top'>Solutions and Services</li> <br />
                   <li className='h2'>Resources</li> <br />
                   <li className='h2'>Switch to Mailchimp</li> <br />
                   <li><FaSearch />&nbsp;&nbsp;Search</li> <br />
                   <li className='d-flex vertical-align-center'><img className='img_h' src={require("./imgs/websites_domains_24.avif")} alt="" />&nbsp;
        <select>
         <option value="EN"><span style={{borderRight:'1px solid grey'}}>EN</span>&nbsp;<span >English&nbsp;<IoMdCheckmark /></span></option>
         <option value="TA"><span style={{borderRight:'1px solid grey'}}>TA</span>&nbsp;<span>Tamil</span>&nbsp;<IoMdCheckmark /></option>
         <option value="PR"><span style={{borderRight:'1px solid black'}}>PR</span>&nbsp;<span>Portugues</span>&nbsp;<IoMdCheckmark /></option>
         </select></li> <br />
                   <li><FaPhoneAlt />&nbsp;&nbsp;Contact Sales: +1 (800) 315-5939</li> <br />
                   <li><button className='col-md-12 p-2 px-5 h5 btn-style' >Login</button></li><br />
                   <li><button className='col-md-12 p-2 px-5 h5 btn-style bg-warning' >Sign up</button></li><br />
                </ul>
                </div>        
           </div>
{/*-------------------modal-end------------------------------*/} 


    </>
  )
}
