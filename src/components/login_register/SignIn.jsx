import React from 'react'
import { useState } from 'react'


export default function SignIn({newUser}) {
    const [loginUser,setLoginUser]=useState({
        username:'',
        password:''
    });

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Login form is submittted")
        
    }

  return (
    <>
        <div className="container mt-5 pt-5">
            <div className='row'>
                <div className='col-12 col-sm-12 col-md-6 m-auto'>
                    <div className='card border-0 shadow'>
                        <div className='card-body'>
                        <div> 
                            <h2 className='text-center my-3 py-3 w-50 mx-auto'>Login</h2>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <input className='form-control my-4 py-2' 
                                type='text' 
                                id='un' 
                                placeholder='Username' 
                                value={loginUser.username} 
                                onChange={(e)=>setLoginUser({...loginUser,username:e.target.value})} 
                                required/>  
                                <input className='form-control my-4 py-2'
                                 type='password' id='pw'  
                                 placeholder='Password'
                                 value={loginUser.password} 
                                 onChange={(e)=>setLoginUser({...loginUser,password:e.target.value})} 
                                 required/> 

                                <div className='text-center mt-3 gap-5'>
                                    <button className='btn btn-primary my-3 py-2' type='submit'>Login</button>
                                    <button className='btn btn-secondary my-3 py-2' type='reset' onClick={()=>setLoginUser({
                                         username:'',
                                         password:''})}>Reset</button>
                                    <p>Don't have an account? <button className='btn btn-outline-dark' onClick={()=>newUser(false)}>Sign Up</button></p>
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
