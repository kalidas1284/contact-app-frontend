import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Image from '../Assets/ba3d738757089a28da691cf46235428b.gif'


import './Add.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/esm/Col';


function Add(){

    

  const location=useNavigate()

  const [id,setId]=useState("")
  const [name,setName]=useState("")
 const [address,setAddress]=useState("")
  const [username,setUName]=useState("")
  const [street,setStreet]=useState("")
  const [zipcode,setZipcode]=useState("")
  const [number,setNumber]=useState("")
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")

  console.log(id,name,address,username,password,street,zipcode,number,password,email,phone);


  const base_url='http://localhost:8000/add-an-contact'
const addCon=async(e)=>{
  e.preventDefault()
  //add contact -API call
  

//API call to add contacts 
const body={id,name,address,username,password,email,phone,zipcode,number,street}
const result=await axios.post(base_url,body).then((result)=>{
    console.log(result);
    alert(result.data.message)
    location('/view')//redirected to main page
}).catch((error)=>{
    alert("please enter a unique id")
})




}
  return (

    
      
       <div style={{marginLeft:'100px'}} className='input d-flex  '>
           <div className='col-6 container   m-5'>
          <h2 className='text-center text-primary'>Add Contact Details</h2>
        <div >
        <form className=''>
          <label for="Id">Id</label>
       <input   onChange={(e)=>setId(e.target.value)}    aria-label="Default"
          aria-describedby="inputGroup-sizing-default" type="text" className='form-control w-60 mb-3'/>
    
    <label for="Name">Name</label>
     <input onChange={(e=>setName(e.target.value))} type="text" className='form-control w-60 mb-3' />
       
       
    <label for="Name">Address</label>
     <input onChange={(e=>setAddress(e.target.value))} type="text" className='form-control w-60 mb-3' />
      
      <label for="street">Street</label>
      <input onChange={(e=>setStreet(e.target.value))} type="text" className='form-control w-60 mb-3' />

      <label for="street">Zipcode</label>
      <input onChange={(e=>setZipcode(e.target.value))} type="text" className='form-control w-60 mb-3' />

      <label for="street">Number</label>
      <input onChange={(e=>setNumber(e.target.value))} type="text" className='form-control w-60 mb-3' />

      <label for="street">UserName</label>
      <input onChange={(e=>setUName(e.target.value))} type="text" className='form-control w-60 mb-3' />
     

      <label for="street">Email</label>
      <input onChange={(e=>setEmail(e.target.value))} type="text" className='form-control w-60 mb-3' />

      <label for="street">Phone</label>
      <input onChange={(e=>setPhone(e.target.value))} type="text" className='form-control w-60 mb-3' />
    
      <label for="street">Password</label>
      <input onChange={(e=>setPassword(e.target.value))} type="text" className='form-control w-60 mb-3' />
       
      <button onClick={(e)=>addCon(e)} className='btn btn-primary tex-light text-center rounded-pill' style={{marginLeft:'200px'}}>ADD</button>
         </form>
     
        </div>

        
        </div>

        <div className='col-6 ' style={{marginTop:'250px'}}>
        <img style={{width:'600px',marginRight:'200px'}} src={Image} alt="" />
        </div>
      
    </div>
    

   
  )
}



export default Add