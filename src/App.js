import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Header } from './Mailchimp/Header';
import { Navbar } from "./Mailchimp/Navbar";
import { Routes,Route } from "react-router-dom";
import './App.css'
import { Content } from "./Mailchimp/Content";
import { NavbarTwo } from "./Mailchimp/NavbarTwo";
import EmailMarketing from "./MailchimpPages/EmailMarketing";
import { SignUp } from "./MailchimpPages/SignUp";
import { Login } from "./MailchimpPages/Login";
import { ResetPassword } from "./MailchimpPages/ResetPassword";
import { ChangePassword } from "./MailchimpPages/ChangePassword";
import { useState } from "react";

function App() {
  
  return (
    <div >

        <div> 
      <Header/>
      </div>
      
      <div id='hamburger'>
      <Navbar/>
      </div>
      
      
      <div id="hamburgertwo">
      <NavbarTwo/>
      </div>
       {/* <SignUp/> */}
      {/* <div className="container-fluid">
        <EmailMarketing/>
      </div> */}
      
      {/*  <div className="container-fluid">
      <Content/>
      </div> */}
     <Routes>
     <Route path="/" element={<Content/>}/>   
     <Route path="/Emailmarketing" element={<EmailMarketing/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path='/reset' element={<ResetPassword/>}/>
     <Route path="/cpword/:email" element={<ChangePassword/>}/>
     <Route path="/signup" element={<SignUp/>}/>
      
    </Routes> 
    </div>
    
  );
}

export default App;
