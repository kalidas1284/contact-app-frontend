import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import img from '../Assets/image_processing20191206-27141-1umtru2.gif'


function Edit() {

  const location=useNavigate()

//get particular id from url
  const {id}=useParams()
  console.log(id);

  const base_url='http://localhost:8000'

  //Api call to update an employee

  //to hold updated values
  const [cid,setId]=useState("")
  const [cname,setName]=useState("")
 const [caddress,setAddress]=useState("")
  const [cusername,setUName]=useState("")
  const [cstreet,setStreet]=useState("")
  const [czipcode,setZipcode]=useState("")
  const [cnumber,setNumber]=useState("")
  const [cemail,setEmail]=useState("")
  const [cphone,setPhone]=useState("")
  const [cpassword,setPassword]=useState("")


  const getContact=async(id)=>{
    const result=await axios.get(`${base_url}/get-an-contacts/${id}`)
    console.log(result.data.contacts);
    setId(result.data.contacts.id)
    setName(result.data.contacts.name)
    setAddress(result.data.contacts.address)
    setStreet(result.data.contacts.street)
    setZipcode(result.data.contacts.zipcode)
    setNumber(result.data.contacts.number)
    setEmail(result.data.contacts.email)
    setPhone(result.data.contacts.phone)
    setUName(result.data.contacts.username)
    setPassword(result.data.contacts.password)
   }
   
   useEffect(()=>{
     getContact(id)
   },[])


  const editContact=async(e)=>{
    e.preventDefault()
    const body={
      id:cid,
      name:cname,
      address:caddress,
      street:cstreet,
      zipcode:czipcode,
      username:cusername,
      number:cnumber,
      phone:cphone,
      email:cemail,
      password:cpassword
    }
    const result =await axios.post(`${base_url}/update-an-contacts/${id}`,body)
console.log(result);
alert(result.data.message)
location(`/profile/${id}`)
  }




  return (
    <div className='container d-flex column '>
      
      <div style={{marginTop:'100px'}} className='col-6 '>
      <h3 className='text-center text-primary'>Edit Profile</h3>
      <label for="Id">Id</label>
       <input   onChange={(e)=>setId(e.target.value)}  value={cid}   aria-label="Default"
          aria-describedby="inputGroup-sizing-default"  type="text" className='form-control w-60 mb-3'/>
    
    <label for="Name">Name</label>
     <input onChange={(e=>setName(e.target.value))} value={cname} type="text" className='form-control w-60 mb-3' />
       
       
    <label for="Name">Address</label>
     <input onChange={(e=>setAddress(e.target.value))} value={caddress} type="text" className='form-control w-60mb-3' />
      
      <label for="street">Street</label>
      <input onChange={(e=>setStreet(e.target.value))} value={cstreet} type="text" className='form-control w-60 mb-3' />

      <label for="street">Zipcode</label>
      <input onChange={(e=>setZipcode(e.target.value))} value={czipcode} type="text" className='form-control w-60 mb-3' />

      <label for="street">Number</label>
      <input onChange={(e=>setNumber(e.target.value))} value={cnumber} type="text" className='form-control w-60 mb-3' />

      <label for="street">UserName</label>
      <input onChange={(e=>setUName(e.target.value))} value={cusername} type="text" className='form-control w-60 mb-3' />
     

      <label for="street">Email</label>
      <input onChange={(e=>setEmail(e.target.value))} value={cemail} type="text" className='form-control w-60 mb-3' />

      <label for="street">Phone</label>
      <input onChange={(e=>setPhone(e.target.value))} value={cphone} type="text" className='form-control w-60 mb-3' />

      <label for="street">Password</label>
      <input onChange={(e=>setPassword(e.target.value))} value={cpassword} type="text" className='form-control w-60 mb-3' />

      <button onClick={(e)=>editContact(e)} className='btn btn-primary rounded-pill  ' style={{marginLeft:'200px',marginBottom:'30px'}}>Edit</button>
    
    </div>

    <div className='col-6 ' style={{marginTop:'250px'}}>
        <img style={{width:'600px',marginRight:'200px'}} src={img} alt="" />
        </div>
    </div>
  )
}

export default Edit