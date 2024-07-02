import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import "../i18n.js";

export const Content = () => {
  const { t } = useTranslation()
  axios.defaults.withCredentials=true
  const navigate = useNavigate()
  useEffect(()=>{
    axios.get("http://localhost:3005/")
    .then(res=>{
      console.log(res)
      if(res.data!=="ok"){
        navigate("/login")
      }
    })
    .catch(err=> console.log(err))
  },[])

  return (
    <>
   <div className='container-fluid'>
     <br />
        <div className='row d-flex justify-content-center content'>
            <div className='col-md-5 p-4' style={{fontSize:'24px'}}>
             <div>{t("choose")}</div> 
{/*          <p>
            WEBSITE BUILDER </p>

          <h1 className='libre'>Create a website for free</h1>
          <p>
          Design and simplicity are at the core of our website builder. Easily create, customize, and promote a stunning website that's search engine ready all on your own with the power of Mailchimp’s platform.
                </p> */}
                <br /> <br />

                <button className='btn-style bg-warning py-2 px-5'>start building for free</button>
                </div>
            <div className='col-md-5 p-4'>
                <img src={require("./imgs/flex.avif")} alt="flexbox" className='img-fluid'/>
            </div>
        </div>

    
            {/*---------------------------------------------------*/}
            <br /> <br /> <br />
        <div className='container text-center '>
       <h1 className='libre'> Brilliant web design, simplified</h1>
        <p style={{fontSize:'24px'}}> Our website builder helps bring your unique vision to life—no design or <br /> code experience required. Create a customizable, mobile-optimized <br /> website within the hour. All you need to start is a domain name and <br /> a vision for your website.  If you're building a small business website, online store, or <br /> otherwise, Mailchimp can simplify the process.</p>
        </div>
        <br /> <br /> <br />
      {/*-----------------------------------*/}
      
        <div className='row d-flex justify-content-around align-items-center content p-3'>
            <div className='col-md-5 p-2'>
                <img src={require('./imgs/classes.avif')} alt="classes" className='img-fluid' />
            </div>
            <div className='col-md-5 p-2' >
       <h1 className='libre'>Curate your look and feel</h1> 
          <p style={{fontSize:'24px'}}>It's easy to build a beautiful site by applying one of our pre-designed color palettes and themes in just a few clicks. Ease-of-use is at the forefront of our website builder. You can even tailor your color palette to your brand for a professional-looking website template.</p> 
   <br />
          <button className='btn-style p-3'>Start styling</button>
          </div>
        </div>
  
   <br /> <br /><br />
      {/*--------------------------------------------------------*/}

      
        <div className='row justify-content-around align-items-center p-3'>
              <div className='col-md-5'>
                <img src={require("./imgs/workout.avif")} alt="workout" className='img-fluid'/>
              </div>
              <div className='col-md-5 p-2' >
              <h1 className='libre'>Customize your new website  <br />layout</h1>  
<p style={{fontSize:'24px'}}>Mailchimp's website builder has pre-built, professional layouts for every section, so you can quickly change the structure of your site as much as you like without any coding knowledge.</p>

   <br />
   <button className='btn-style p-3'>Start buildig your own website</button>
              </div>
        </div>
    
    <br /> <br /> <br />
      {/*-----------------------------------------*/}
      
        <div className='row justify-content-around align-items-center p-3'>
            <div className='col-md-5'><img src={require("./imgs/videoframe_3953.png")} className='img-fluid' alt="" /></div>
            <div className='col-md-5 p-2'>
                <h1 className='libre'>See your edits in real time</h1>
                <p style={{fontSize:'24px'}}>
            Edit, add a section, resize images, and undo it all right from the page—so you don’t have to leave the editor to make changes. We've made building your own website as easy as possible so that you can integrate your business successfully.</p>
            <br />
            <button className='btn-style p-2'>Start Refining</button>
            </div>
        </div>
    
      <br /><br /><br />
     {/*------------------------------------------------*/} 
     
      <div className='row text-center content px-2 py-4'>
        <h1 className='libre'>Promote your site and build an audience with <br /> our all-in-one platform</h1>
        <p style={{fontSize:'24px'}} >Promote your site and build an audience with our all-in-one platform
      We help you establish your brand, look like a pro, and rise the ranks ofsearch engines using our easy-to-use website builder. Customize your website on a no-code platform so that you don't need to hire anyone else to help.</p></div>

      <br /><br /><br />
      {/*------------------------------------------------------------*/}

      <div className='row text-center p-3'>
        <h1 className='libre'>Reach more people with your Mailchimp <br />website</h1>
        <p style={{fontSize:'24px'}}>
        Grow and engage a bigger, higher quality customer base with intelligent <br />tools that speak to an interested audience when they’re most willing to <br />listen.</p>

      </div>
      <br /><br /><br />
      {/*--------------------------------------------------------------*/}

      
        <div className="row">
        <div className='col-md-4 text-center'>
            <h3><Link  className='decor' style={{hover:'text-decoration-underline'}}>Built-in Forms</Link></h3>
        <p>Capture the attention of your website visitors with a custom pop-up form.
         <br />
         <Link>Learn more</Link></p></div>
        <div className='col-md-4 text-center text-decoration-none'>
            <h3><Link  className='decor' style={{hover:'text-decoration-underline'}}>Behavioral Targetting</Link></h3>
        <p>
          Send personalized emails to visitors based on how they interact with your site.
          <br />
          <Link>Learn more</Link></p>
        </div>
        <div className='col-md-4 text-center text-decoration-none'>
        <h3><Link  className='decor' >Reports And Analytics</Link></h3>
          Use free reports to track the performance of your pages and refine as you go.
        <br />
          <Link>Learn more</Link>
        </div>
        </div>
      
      <br /><br /><br />
      {/*--------------------------------------------------------*/}
      <div className='col-md-12 d-flex justify-content-center'>
        <div className='text-center'>
            <img src={require('./imgs/hand.avif')} alt="hand" className='img-fluid w-75'/>
            <h1 className='libre'>With Mailchimp, you can create and publish a <br />stunning website in under an hour.</h1>
            </div>
            
      </div>
      <br /><br /><br />
 {/*--------------------------------------------------------------*/}
     <div className='col-md-12 d-flex justify-content-center'>

     <img src={require('./imgs/Websites-Editor-Social-Proof.avif')} alt="" className='img-fluid' />   
     </div>
     <br /><br /><br />
{/*--------------------------------------------------------------*/}

<div>
    <p className='text-center h2 p-2'>“As a brand new startup, we used Mailchimp's website <br />builder to get our story and business online quickly and <br />easily. This intuitive builder makes trying out new ideas <br />and adding updates straightforward and <br />uncomplicated.” <br />

      <span className='h5'>Dr. Julie Durnan, Founder of The Ginger Agency</span> 
</p>
</div>
<br /><br /><br />
{/*----------------------------------------------------------------*/}

    <div className='row justify-content-around align-items-center p-4'>
<div className='col-md-5'><img src={require("./imgs/ILLO_Hero_Transactional-Sending_Receiving-1520.avif")} alt="" className='img-fluid'/></div>
<div className='col-md-5 p-2' style={{fontSize:'24px'}}>
    <h1 className='libre'>Decide if Mailchimp is right for you</h1>
    <p>
    Check out how our website builder tools stack up <br />against the competition.</p>
</div>
</div>

<br /><br /><br />
{/*----------------------------------------------------*/}
<div className='container '>
    <div className='row justify-content-between p-1'>
    <div className='col-md-5'>
        <h1 className='libre'>Explore all the ways you <br />can build a more effective <br />website</h1>
    </div>
    <div className='col-md-5'>
        <ul className='list-unstyled lh-lg' style={{fontSize:'22px'
        }}>
            <li className='py-1 border-bottom border-dark'><div className='rounded-4 p-2 expl_ani'>How to Make a Website: A Guide for Building Your Website&nbsp;<FaArrowRight style={{fontSize:'25px'}} className=' mt-3 rounded-circle bg-warning h4 p-1 float-end '/></div>
            </li>
            <li className='py-1 border-bottom border-dark'><div className='rounded-4 p-2 expl_ani'>Website Design Tips for Non-Designers&nbsp;<FaArrowRight style={{fontSize:'25px'}} className=' mt-3 rounded-circle bg-warning h4 p-1 float-end '/></div></li>
            <li className='py-1 border-bottom border-dark '><div className='rounded-4 p-2 expl_ani'> Checklist for Better Website SEO&nbsp;<FaArrowRight style={{fontSize:'25px'}} className=' mt-3 rounded-circle bg-warning h4 p-1 float-end '/></div></li>
            <li className='py-1 border-bottom border-dark'><div className='rounded-4 p-2 expl_ani'>How to Create a Homepage That Drives Clicks&nbsp;<FaArrowRight style={{fontSize:'25px'}} className=' mt-3 rounded-circle bg-warning h4 p-1 float-end '/></div></li>
        </ul>
    </div>
    </div>
</div>
  <br /><br /><br />
{/*------------------------------------------------------------*/}

    <div className='row justify-content-around p-3'>
     <div className='col-md-3'>
       <h1 className='libre py-3'>FAQs</h1> 
     </div>
   <div className='col-md-7'>
   <table className='lh-lg col-md-12'>
    <tr><td className='border-bottom border-dark fontmodal'>Can you build a website on Mailchimp?</td><td><GoPlus className='bg-warning h1 rounded-circle p-1'/></td></tr>
    <tr><td className='border-bottom border-dark fontmodal'>Which website builder is best for Mailchimp?</td><td><GoPlus className='bg-warning h1 rounded-circle p-1'/></td></tr>
    <tr><td className='border-bottom border-dark fontmodal'>What is a website builder?</td><td><GoPlus className='bg-warning h1 rounded-circle p-1'/></td></tr>
    <tr><td className='border-bottom border-dark fontmodal'>How to integrate Mailchimp with a website?</td><td><GoPlus className='bg-warning h1 rounded-circle p-1'/></td></tr>
    <tr><td className='border-bottom border-dark fontmodal'>How to build a business website?</td><td><GoPlus className='bg-warning h1 rounded-circle p-1'/></td></tr>
    <tr><td className='border-bottom border-dark fontmodal'>How long does it take to build a website?</td><td><GoPlus className='bg-warning h1 rounded-circle p-1'/></td></tr>
    <tr><td className='border-bottom border-dark fontmodal'>How can I build my own website?</td><td><GoPlus className='bg-warning h1 rounded-circle p-1'/></td></tr>
   </table>
   </div>
   </div>


<br /><b><br /></b>
{/*--------------------------------------------------------------*/}
<div className='text-center bg-warning py-5'>
    <h1 className='libre'>Ready to start building your new site?</h1>
    <p>Launch your website right away.</p> 
    <br /><br />
    <button className='btn-style py-3 px-5 bg-warning'>start building for free</button>
</div>
</div>
    </>
  )
}






{/* <ul className='  list-unstyled' style={{lineHeight:'50px'}}>
    <li className='fontmodal d-flex justify-content-between align-items-center border-bottom border-dark'><span>Can you build a website on Mailchimp?</span><FaPlus className='rounded-circle text-center bg-warning h1 '/></li>
    <li className='fontmodal d-flex justify-content-between align-items-center border-bottom border-dark '><span>Which website builder is best for Mailchimp?</span><FaPlus className='rounded-circle text-center bg-warning h1 '/></li>
    <li className='fontmodal d-flex justify-content-between align-items-center border-bottom border-dark '>What is a website builder?&nbsp;<FaPlus className='rounded-circle text-center bg-warning h1 '/></li>
    <li className='fontmodal d-flex justify-content-between align-items-center border-bottom border-dark '>How to integrate Mailchimp with a website?&nbsp;<FaPlus className='rounded-circle text-center bg-warning h1 '/></li>
    <li className='fontmodal d-flex justify-content-between align-items-center border-bottom border-dark '>How to build a business website?&nbsp;<FaPlus className='rounded-circle text-center bg-warning h1 '/></li>
    <li className='fontmodal d-flex justify-content-between align-items-center border-bottom border-dark '>How long does it take to build a website?&nbsp;<FaPlus className='rounded-circle text-center bg-warning h1 '/></li>
    <li className='fontmodal d-flex justify-content-between align-items-center border-bottom border-dark '>How can I build my own website?&nbsp;<FaPlus className='rounded-circle text-center bg-warning h1 '/></li>
</ul>








 */}