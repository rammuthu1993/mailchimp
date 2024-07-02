import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import axios from 'axios'

export const SignUp = () => {
    const [email,setEmail] = useState("")
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [showpword,setShowpword] = useState(false)
    const [vemail,setVemail] = useState(false)
    const [vname,setVname] = useState(false)
    const [vpword,setVpword] = useState(false)
    const [vemailem,setVemailem] = useState(false)
    const [vnameem,setVnameem] = useState(false)
    const [vpwordem,setVpwordem] = useState(false)
    const [check,setCheck] = useState(false)
    const [valid,setValid] = useState(false)
    const change = useRef()
    const changename = useRef()
    const changepword = useRef()
    const navigate = useNavigate()

    
    const handleSubmit = (e)=>{
     e.preventDefault()
     const mail = /^([a-z0-9_.]{4,})+\@([A-Za-z])+\.([A-Za-z])+$/
     const user = /^[A-Za-z.]+$/
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
     if(name===""){
        changename.current.focus()
        setVnameem(true)
        setVname(false)
        return false
     }
     else if(!name.match(user)){
        setVname(true)
        setVnameem(false)
        changename.current.focus()
     }
     else{setVname(false)
        setVnameem(false)
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
    if(!check){
        alert("Please accept terms checkbox...")
        return false
    }
    axios.post('http://localhost:3005/user',{email,name,password})
    .then((res)=> {console.log(res)
        if(res.data.status==404){
        setValid(true)
        }
        else{
        navigate('/login')
        }
    })
    .catch((err)=>{console.log(err)
    }
)
   
}
    

  return (
    <>
    <div className='container-fluid mt-5'>
        <div className='row justify-content-center'>
        <form className='col-md-5 rounded-4 bg-white border border-1 p-5' action="" target='_blank' onSubmit={handleSubmit} name='myform'>
            <h1 className='libre'>Sign up for Mailchimp
            </h1>
            <p>Create a free account or <Link className='text-success h5'>log in</Link></p>
            <div>
                <label className='fs-5' htmlFor="BusinessEmail">Business email</label><br />
                <input ref={change} style={{outlineColor:vemail||vemailem ? 'red' : 'green'}} className=' container-fluid py-2 rounded-1'  type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                {vemail && <p className='fs-6' style={{color:'red'}}>Please fill valid format...</p>}
                {vemailem && <p className='fs-6' style={{color:'red'}}>Please fill this field...</p>}
                {valid &&  <p className='fs-6' style={{color:'red'}}>This Email is Already have been used</p>}
            </div> <br />

            <div>
                <label className='fs-5' htmlFor="Username">Username</label><br />
                <input ref={changename} style={{outlineColor:vname||vnameem ? 'red' : 'green'}} className='form-check container-fluid py-2 rounded-1'  type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                {vname && <p className='fs-6' style={{color:'red'}}>Numbers and Special characters not allowed...</p>}
                {vnameem && <p className='fs-6' style={{color:'red'}}>Please fill this field...</p>}
            </div> <br />
            <div>
                <label className='fs-5 container-fluid ' htmlFor="password">Password <span className='text-success float-end' onClick={()=>setShowpword(!showpword)}>{showpword ? <BsEyeSlash/> :<BsEye />}&nbsp;Show</span></label><br />
                <input ref={changepword} style={{outlineColor:vpword||vpwordem ? 'red' : 'green'}} className=' container-fluid py-2 rounded-1'  type={showpword ? "text" : "password"} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                {vpword && <p className='fs-6' style={{color:'red'}}> Password must contain Atleast one capital & one special character,Minimum 6 characters...</p>}
                {vpwordem && <p className='fs-6' style={{color:'red'}}> Please fill this field...</p>}
            </div> <br />
            <div className='d-flex justify-content-around align-items-start'> <input type="checkbox" name='mycheckbox' checked={check} onChange={(e)=>setCheck(!check)} style={{zoom:'2',accentColor:'green'}} className='form-check-input p-2 border border-2'/>&nbsp;&nbsp; <p > I dont want to receive emails about Mailchimp and related Intuit product and feature updates, marketing best practices, and promotions from Mailchimp. By not checking the box, I agree to be opted in by default.</p></div>
            <p>By creating an account, you agree to our <Link>Terms</Link> and have read and acknowledge the <Link>Global Privacy Statement.</Link></p>
              <br />
              <input type="submit" value='Sign up' className='bg-success px-4 py-2 text-white rounded-5 h5 border-0'/>
        </form>
        </div>
    </div>
    </>
  )
}
