import React, { useEffect, useState } from 'react'
import {  MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'
import { Link } from 'react-router-dom';

import './View.css'


function View() {
  //get all the employee details from mongo db
const base_url='http://localhost:8000'

const [viewData,setViewData]=useState([])//to hold all employee details

const fetchData=async()=>{
  const result =await axios.get(`${base_url}/get-all-contacts`)//employee details
  console.log(result.data.contacts);
  setViewData(result.data.contacts)
  
}
console.log(viewData,);

const delcon=async(id)=>{
 const result=await axios.delete(`${base_url}/delete-an-contact/${id}`).then((result)=>{
  console.log(result)
  alert(result.data.message)
 })

 fetchData()
}

useEffect(()=>{
  fetchData()
},[])

  return (
    <div>
     <div className='container '>
      <h3 className='text-center text-primary m-5'>View Details</h3>
      <Link to={'/add'}>
      <button className='btn btn-primary text-light rounded-pill &#43' style={{float:'right'}}> New Contact  &#43;</button>
      </Link>
       <div className='tables  my-4 p-3'>
    
       <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
        <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
        <th scope='col'>User Name</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
       {
viewData.map((item)=>(
  <tr>
    <td>
      {item.id}
    </td>
  <td>
    <div className='d-flex align-items-center'>
      <img
        src={item.image}
        alt=''
        style={{ width: '45px', height: '45px' }}
        className='rounded-circle'
      />
      <div className='ms-3'>
        <p className='fw-bold mb-1'>{item.name}</p>
        
      </div>
    </div>
  </td>
  <td>
    <p className='fw-normal mb-1'>{item.email}</p>
  
  </td>
  <td>
    <p>{item.username}</p>
  </td>
  <td>
    <Link to={`/profile/${item.id}`}>
    <i className='fa-solid fa-eye text-primary'></i>

   
    </Link>
    <i onClick={()=>delcon(item.id)} className='fa-solid fa-trash text-danger m-5'></i>
  </td>
</tr>
))
       }
      
      </MDBTableBody>
    </MDBTable>
       
    <button className='text-center btn btn-primary ' style={{marginLeft:'550px',marginTop:'50px'}}>Back To Home</button>
       </div>
       
     </div>
    
    </div>
  )
}

export default View