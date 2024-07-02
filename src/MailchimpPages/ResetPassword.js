import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

export const ResetPassword = () => {
    const [email,setEmail] = useState("")
    const [otp,setOtp] = useState("00")
    const [inpotp,setInpotp] = useState("")
    const [cond,setCond] = useState(false)
    const [send,setSend] = useState(false)
    const navigate = useNavigate()
    console.log(inpotp);
    const [ncond,setNcond] = useState(false)
    const [rpword,setRpword] = useState(true)

    useEffect(()=>{
        if(inpotp.length==4){
            if(otp==inpotp){
            setRpword(false)
            setNcond(true)
            navigate(`/cpword/${email}`)
            }
            else{
                alert("your OTP is wrong..!")
            }
        }
        
           
        
    },[inpotp])

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(email===""){
            alert("please fill email address.")
            return true
        }

        axios.post('http://localhost:3005/reset',{email})
        .then((res)=>{
            if(res.data.status=='rejected'){
                
                alert("E-mail is not registered")
                
            }
            else if(res.data.status=="ok"){
                setOtp(res.data.otp)
                
                setSend(true)
                setTimeout(()=>{setSend(false);setCond(true)},3000)
                
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    
  return (
    <> <br />
   <div className='d-flex justify-content-center px-5'>
        <form action="" className='col-md-5 ' onSubmit={handleSubmit}>
            <h1 className='libre'>Reset your password
            </h1>
            <p className='fs-5'>Fear not. We'll email you instructions to reset your password. If you don't have access to your email anymore, you can try <Link className='text-success'>account recovery.</Link></p>
            <br />
            <label htmlFor="" className='fs-5'>E-mail</label>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className='container-fluid rounded-2 py-2'/>
            <br /> <br />
            <div className='container-fluid'>
            <button type="submit" className='fs-5 px-2 bg-success text-white rounded-5'>Reset password</button> &nbsp;&nbsp;{send && <span className='position-absolute'>
        
        <span className='h5 text-success'>OTP is sending to your address. Please wait..!&nbsp;<span className='spinner-border text-success'></span></span> 
    </span>}{cond && <span className='float-end h6'>Enter your OTP:&nbsp;<input maxLength={4} type="text" value={inpotp} onChange={(e)=>setInpotp(e.target.value)} /></span>}</div>
        </form>
    </div>
    
    
  
    </>
  )
}
