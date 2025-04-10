import React from 'react'
import { useState } from "react"


export default function SignUp({existingUser}) {
    const[registerUser,setRegisterUser]= useState({
        fullname:'',
        mobileno:'',
        emailid:'',
        password:'',
    }); 

    const [isSubmitted, setIsSubmitted]=useState(false);

    const handleregisterForm = e =>{
        e.preventDefault();
        alert("Registration Form is Submitted")
    };

  return (
    <>
    <div className="container mt-5 pt-5" >
            <div className='row'>
                <div className='col-12 col-sm-12 col-md-6 m-auto'>
                    <div className='card bg-info border-0 shadow' >
                        <div className='card-body'>
                        <div> 
                            <h2 className='text-center my-3 py-3 w-50 mx-auto'>Register</h2>
                        </div>
                        <div>
                            <form onSubmit={handleregisterForm}>
                                <input className='form-control my-4 py-2' 
                                type='text' 
                                id='un' 
                                placeholder='Full Name' 
                                value={registerUser.fullname} 
                                onChange={(e)=>setRegisterUser({...registerUser,fullname:e.target.value})} 
                                required/>  

                                <input className='form-control my-4 py-2' 
                               type="tel"
                               pattern="[0-9]{10}" 
                                id='num' 
                                placeholder='Phone Number' 
                                value={registerUser.mobileno} 
                                onChange={(e)=>setRegisterUser({...registerUser,mobileno:e.target.value})} 
                                required/>  

                                <input className='form-control my-4 py-2' 
                                type='email' 
                                id='mail' 
                                placeholder='Email ID' 
                                value={registerUser.emailid} 
                                onChange={(e)=>setRegisterUser({...registerUser,emailid:e.target.value})} 
                                required/> 

                                <input className='form-control my-4 py-2'
                                 type='password' id='pw'  
                                 placeholder='Password'
                                 value={registerUser.password} 
                                 onChange={(e)=>setRegisterUser({...registerUser,password:e.target.value})} 
                                 required/> 

                                <div className='text-center mt-3 gap-5'>
                                    <button className='btn btn-primary my-3 py-2' type='submit'>Register</button>
                                    <button className='btn btn-secondary my-3 py-2' type='reset' onClick={()=>setRegisterUser({
                                         fullname:'',
                                         mobileno:'',
                                         emailid:'',
                                         password:''})}>Reset</button>
                                    <p>Already have an account? <button className='btn btn-outline-dark' onClick={()=>existingUser(true)}>Sign In</button></p>
                                </div> 
                            </form>
                        </div>

                        </div>

                    </div>

                </div>

            </div>
          </div >
           
          </>
  )
}
