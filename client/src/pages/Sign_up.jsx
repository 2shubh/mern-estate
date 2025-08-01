import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {OAuth} from '../components/OAuth'

export const Sign_up = () => {
  
  const [formData,setFormData]=useState({});
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);
  const navigate=useNavigate();
 const handlechange=(e)=>{
  setFormData({
    ...formData,
    [e.target.id]:e.target.value,
  });
 };

  const handleSubmit= async (e)=>{
    e.preventDefault();
    try{

      setLoading(true);
      const res=await fetch('/api/auth/signup' ,  
        {
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
           body:JSON.stringify(formData),
     });
      const data=await res.json();
      console.log(data);
      if(data.success===false){
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/signin');
      console.log(data);
    }
    catch(err){
    setLoading(false);
    setError(err.message);
    }
  };


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font font-semibold my-7'>
        Sign Up
      </h1>
      <form  onSubmit={handleSubmit}  className='flex flex-col gap-4'>
        <input type='text' placeholder='username '
        className='border p-3 rounded-lg ' id='username' onChange={handlechange} />
           <input type='email' placeholder='email'
        className='border p-3 rounded-lg ' id='email' onChange={handlechange} />
           <input type='text' placeholder='password'
        className='border p-3 rounded-lg ' id='password' onChange={handlechange}/>

        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95
        disabled:opacity-80'>
          {loading ? 'loading...' : 'Sign up'}
          </button>
          <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to="/signin">
        <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
