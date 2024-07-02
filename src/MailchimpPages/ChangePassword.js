import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export const ChangePassword = () => {
    const [npword,setNpword] = useState()
    const {email} = useParams()
    const navigate = useNavigate()
    axios.defaults.withCredentials=true

    const handlePassword = (e)=>{
        e.preventDefault()
        axios.put("http://localhost:3005/npword", {npword,email})
        .then((res)=>{
            if(res.data.status=="ok"){
                alert("Password is successfully changed")
                navigate('/login')
                console.log(res);
            }else if(res.data.status=="pending"){
                alert("something went wrong !")
            }
        })
    }
    
  return (
    <>
     <div className='d-flex justify-content-center'>
         <form action="" className='col-md-5' onSubmit={handlePassword}>
            <h1>Set your new password</h1>
             <br />
             <label htmlFor="" className='container-fluid'>New password</label>
             <input type="text" value={npword} onChange={(e)=>setNpword(e.target.value)} className='container-fluid py-2 rounded-2'/>

             <br /> <br />
             <input type="submit" value='submit' className='bg-success rounded-2 text-white h5'/>
         </form>
    </div>
    </>
  )
}
