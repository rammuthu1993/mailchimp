import React,{useState,useRef, useEffect} from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import axios from 'axios';

export const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [showpword,setShowpword] = useState(false)
    const [vemail,setVemail] = useState(false)
    const [vname,setVname] = useState(false)
    const [vpword,setVpword] = useState(false)
    const [vemailem,setVemailem] = useState(false)
    const [vnameem,setVnameem] = useState(false)
    const [vpwordem,setVpwordem] = useState(false)
    const [error,setError] = useState("")
    const change = useRef()
    const changepword = useRef()
    const navigate = useNavigate()
    
    
    const handleSubmit=(e)=>{
        console.log(email);
       e.preventDefault()
       const mail = /^([a-z0-9_.]{4,})+\@([A-Za-z])+\.([A-Za-z])+$/
       const passcode = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{6,}$/

       if(email===""){
        setVemailem(true)
        setVemail(false)
        change.current.focus()
        return false
     }
     else if(!email.match(mail)){
        setVemail(true)
        setVemailem(false)
        change.current.focus()
     }
     else{setVemail(false)
        setVemailem(false)
     }
     if(password===""){
        setVpwordem(true)
        setVpword(false)
        changepword.current.focus()
        return false
     }
     else if(!password.match(passcode)){
        setVpword(true)
        setVpwordem(false)
         changepword.current.focus()
    }
    else{setVpword(false)
        setVpwordem(false)
    }
    axios.post('http://localhost:3005/login',{email,password})
    .then((res)=>{
        console.log(res);
        if(res.data.status=="ok"){
            navigate('/')
        }
        else if(res.data.status=="pending"){
            alert("Password is incorrect")
        }
        else if(res.data.status== "rejected"){
            alert("Email is not registered")
        }
    })
    .catch(err=> console.log(err))
}
   
    
  return (
    <>
    <div className='container-fluid mt-5'>
        <div className='row justify-content-center'>
        <form className='col-md-5 rounded-4 bg-white border border-1 p-5' action="" target='_blank' onSubmit={handleSubmit} name='myform'>
            <h1 className='libre'>Log in</h1>
              <p> Need a Mailchimp account?
               <Link to='/signup'>Create an account</Link></p>
            <div>
                <label className='fs-5' htmlFor="BusinessEmail">Email or username</label><br />
                <input ref={change} style={{outlineColor:vemail||vemailem ? 'red' : 'green'}} className=' container-fluid py-2 rounded-1'  type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>

               
            </div> <br />
            <div>
                <label className='fs-5 container-fluid ' htmlFor="password">Password <span className='text-success float-end' onClick={()=>setShowpword(!showpword)}>{showpword ? <BsEyeSlash/> :<BsEye />}&nbsp;Show</span></label><br />
                <input ref={changepword} style={{outlineColor:vpword||vpwordem ? 'red' : 'green'}} className=' container-fluid py-2 rounded-1'  type={showpword ? "text" : "password"} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <p>{error}</p>
            </div>
            <br />
            <div className='d-flex vertical-align-center'>
                <input type="checkbox" style={{zoom:'1.8',accentColor:'green'}} className='form-check-input' required/>&nbsp;&nbsp;<span className='h5 mt-2'>Keep me logged in</span>
            </div>
              <br />
              <input type="submit" value='Login' className='bg-success px-4 py-2 text-white rounded-5 h5 border-0'/>
              <br /> <br />
              <Link to='/reset' className='text-success fs-5'>Forgot password</Link>
              <Outlet/>
              
        </form>
        </div>
    </div>
    </>
  )
}
