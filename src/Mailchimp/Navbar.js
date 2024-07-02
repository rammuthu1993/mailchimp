import React, { Component, useRef, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { Resources } from './Resources';
import { FaSearch } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import axios from 'axios';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
    const display = useRef()
    const [cond,setCond] = useState(false)
    const [cond1,setCond1] = useState(false)
    const navigate = useNavigate()
    const languages = [{value:"en",text:"English"},{value:"ta",text:"Tamil"}]
    const [lang,setLang] = useState("")
    const {t} = useTranslation()

    
    const handleChange = (e) => {
      setLang(e.target.value);
      let loc = "http://localhost:3000/";
      window.location.href = loc + "?lng=" + e.target.value
      /* window.location.assign(
          loc + "?lng=" + e.target.value
      ); */
     
  };
    /* const logout=()=>{
      axios.get("http://localhost:3005/delete")
      .then((res)=>{
         
      })
    } */
   
         console.log(cond);
  return (
    <>
    {/* <div>{t("choose")}</div> */}
    <div className='bg-white d-flex justify-content-between'>
    <div className='navbar col-6'>

        <div ><img style={{height:'50px'}} src={require('./imgs/intmail.png')} alt="initmail" /></div>  
        
        <div className='dropdown' onClick={()=>setCond(!cond)}><span>
        Solutions and Services &nbsp;<IoIosArrowDown style={{transform: cond ? 'rotate(180deg)' : 'rotate(0deg)'}}/></span>
        <div ref={display} className='drop-content mt-3' style={{display: cond ? 'block' : 'none'}}>
          
           {/*------------------content---------------------*/}
           <div className='col-12 d-flex'>
          <div className='col-7 p-3'  style={{height:'520px',overflowY:'scroll'}}>

            <div className='d-flex align-items-center'><span className='h1'>Solutions and Services</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='float-end d-flex vertical-align-center'>See what’s new&nbsp;<FaArrowRight className='rounded-circle bg-warning h4 p-1'/> </span></div>

            
                 <br />
                <div className='cont_grid'>

                <div className='d-flex'> <img className='img_h' src={require('./imgs/email_marketing_24.avif')} alt="email_marketing" /> &nbsp;
                <span className='h6 p-1'><Link to='/Emailmarketing' className='text-decoration-none text-dark'><b> Email marketing</b> <br />
                 Send personalized emails that convert</Link></span> </div>

                <div className='d-flex'><img className='img_h' src={require("./imgs/websites_domains_24.avif")} alt="" />&nbsp;<span className='h6 p-1'><b>Websites</b> <br />
                    Create your branded web presence</span></div>

               <div className='d-flex'><img className='img_h' src={require("./imgs/social_media_marketing_24.avif")} alt="" />&nbsp;<span className='h6 p-1'> <b>Social media marketing</b> <br />
                    Amplify the conversation across multiple channels</span></div>

                 <div className='d-flex'><img className='img_h' src={require("./imgs/templates_24.avif")} alt="" />&nbsp;<span className='h6 p-1'><b>Templates</b> <br />
                    Customize pre-designed layouts</span></div>

                 <div className='d-flex'><img className='img_h' src={require("./imgs/marketing_automations_24.avif")} alt="" />&nbsp;<span className='h6 p-1'><b>Marketing automation</b> <br />
                      Deliver the right message at the right time</span></div>

               <div className='d-flex'><img className='img_h' src={require("./imgs/reporting_analyitics_24.avif")} alt="" />&nbsp;<span className='h6 p-1'> <b>

Reporting & analytics</b> <br />
Track sales & campaign performance
</span></div>

                 <div className='d-flex'><img className='img_h' src={require("./imgs/audience_management_24.avif")} alt="" />&nbsp;<span className='h6 p-1'><b>

Audience management</b> <br />
Target and segment customers</span></div>

                <div className='d-flex'><img className='img_h' src={require("./imgs/content_creation_24.avif")} alt="" />&nbsp;<span className='h6 p-1'> <b>
Content Creation Tools</b> <br />
Build content that captivates and converts</span></div>

               <div className='d-flex'><img className='img_h' src={require("./imgs/Brain.avif")} alt="" />&nbsp;<span className='h6 p-1'> <b>
AI marketing tools</b> <br />
Say hello to your AI growth assistant</span></div>

                 <div className='d-flex'><img className='img_h' src={require("./imgs/marketing-crm__2_.avif")} alt="" />&nbsp;<span className='h6 p-1'> <b>
See all features </b> <br />
See all our product offerings in one place</span></div> 

            </div>
             {/*---------------------------------------*/}
              
             <div className='col-12'>
                  <span>INTEGRATE YOUR APPS</span><span className='float-end'>See 300+ integrations</span>
                </div>
                <br />

                <div className='app_grid'>

                  <div><Link><img className='img-fluid' src={require("./imgs/shopify.avif")} alt="" /></Link><p>Shopify</p></div>
                  <div><Link><img className='img-fluid' src={require("./imgs/Wix_logo_-_On_Black.avif")} alt="" /></Link><p>Wix</p></div>
                  <div><Link><img className='img-fluid' src={require("./imgs/canva_.avif")} alt="" /></Link><p>Canva</p></div>
                  <div><Link><img className='img-fluid' src={require("./imgs/salesforce.avif")} alt="" /></Link><p>Salesforce</p></div>
                  <div><Link><img className='img-fluid' src={require("./imgs/woo.avif")} alt="" /></Link><p>Woo</p></div>

                </div>

              {/*---------------------------------------*/}

          </div> 
          <ul className='col-5 text-center' style={{lineHeight:'60px',height:'520px',listStyleType:'none',overflowY:'scroll'}}>
         <li><b>FOR YOUR INDUSTRY</b> </li>
          <li>E-commerce and retail</li>
          <li>Service-based Business</li>
         <li>Mobile and web apps</li> 
          <li>Start-ups</li>
          <li>Agencies and freelancers</li>
          <li>Developers</li>
          <li>PROFESSIONAL SERVICES</li>
          <li>Hire an Expert</li>
          <li>Personalized onboarding</li>
          <li>Customer success</li>
          </ul>
        </div>
    
        </div>
    
        </div>
        <div className='dropdown' onClick={()=>setCond1(!cond1)}><span>Resources &nbsp;<IoIosArrowDown style={{transform: cond1 ? 'rotate(180deg)' : 'rotate(0deg)'}}  /></span>
        <div className='drop_resources mt-3 p-2' style={{display:cond1 ? 'block' : 'none'}}><Resources /></div>
        </div>
        <div>Switch to Mailchimp</div>
        <div>Pricing</div>

         </div>

         <div className='col-5 d-flex justify-content-around align-items-center'>
          <div><FaSearch /></div>
         <div className='d-flex vertical-align-center'><img className='img_h' src={require("./imgs/websites_domains_24.avif")} alt="" />&nbsp;
          <select value={lang} onChange={handleChange}>
          {languages.map(lng=>
          (
          <option value={lng.value} key={lng.value}>{lng.text}</option>
          ))}
          </select> </div>
          <div><span>Sales: +1 (800) 315-5939</span></div>
          <div><button className='p-2 h5 btn-style' onClick={()=>navigate('/login')}>Logout</button></div>
          <div><button onClick={()=>navigate('/signup')} className='p-2 h5 btn-style bg-warning' >Sign up</button></div>
          </div>
        </div> 
    </>
  )
}




