import React from 'react'
import { FaArrowRight } from "react-icons/fa";

export const Resources = () => {
  return (
    <>
    <div className='d-flex'>
    <div className='col-7 bg-white'>
     <div className='col-12'><span className='h1 '>Resources</span><span className='arr_graph float-end'>See all resources &nbsp;<FaArrowRight className='mt-2 rounded-circle bg-warning h4 p-1'/></span></div>
     <div className=' d-flex justify-content-space-between p-4'>
     <ul className='list-unstyled col-4' style={{lineHeight:'50px'}}>
        <li>LEARN WITH MAILCHIMP </li>
        <li>E-commerce</li>
        <li>Digital content</li>
        <li>Marketing automations</li>
        <li>Audience management</li>
        <li>Websites</li>
        <li>Email marketing</li>
        <li>Social media</li>
     </ul>
     <ul className='list-unstyled col-4' style={{lineHeight:'50px'}}>
        <li>MAILCHIMP PRESENTS</li>
        <li>Podcasts</li>
        <li>Series</li>
        <li>Films</li>
     </ul>
     <ul className='list-unstyled col-4' style={{lineHeight:'50px'}}>
        <li>FOR DEVELOPERS</li>
        <li>Marketing API</li>
        <li>Transactional API</li>
        <li>Release notes</li>
        <li>Transactional email</li>
     </ul>
     </div>
    </div>
    <div className='col-5 p-5 mt-4 bg-secondary text-white' >
        <ul className='list-unstyled'>
            <li className='lh-lg '><img className='img_h' src={require('./imgs/help.avif')} alt="" />&nbsp;Help center</li>
            <li className='lh-lg '><img className='img_h' src={require('./imgs/case.avif')} alt="" />&nbsp;Case Studies</li>
            <li className='lh-lg '><img className='img_h' src={require("./imgs/events.avif")} alt="" />&nbsp;Events</li>
        </ul> <br />
        <ul className='list-unstyled'>
            <li className='lh-lg '><b>PROFESSIONAL SERVICES</b></li>
            <li className='lh-lg '>Hire an Expert</li>
            <li className='lh-lg '>Personalized onboarding</li>
            <li className='lh-lg '>Customer success</li>
        </ul>
    </div>
    </div>
    </>
  )
}
