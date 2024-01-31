import React, { useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Col from 'react-bootstrap/esm/Col';

function ViewProfile() {

  const base_url='http://localhost:8000'

  const [view,setView]=useState([])

  const {id}=useParams()
  console.log(id);

  const getContact=async(id)=>{
   const result=await axios.get(`${base_url}/get-an-contacts/${id}`)
   console.log(result.data.contacts);
   setView(result.data.contacts)
  }
  console.log(view);
  useEffect(()=>{
    getContact(id)
  },[])

  return (
    <div>
       <h2 className='text-center text-primary m-3'>View Profile</h2>

<div className='img d-flex column'>
  <img  style={{width:'400px',height:'400px',marginLeft:'50px'}} src={view.image} alt="" />

  <div  style={{marginLeft:'350px', width:'600px',textAlign:'justify',marginTop:'50px'}}>
<p>{view.desc}</p>
</div>

</div>
<hr></hr>
  




<div className='container p-5  justify-content-between ' style={{marginLeft:'450px'}} >    
<Col sm={12} md={6} lg={4} xl={3}>
      <div className='card shadow m-4 p-4 ' style={{width:'400px'}} >
        <i className='fa-solid fa-user fs-2 text-center'></i>
       <h5>Id: {view.id}</h5>
       <h5>Name: {view.name}</h5>
       <h5>Address: {view.address}</h5>
       <h5>{view.street}</h5>
       <h5>{view.zipcode}</h5>
       <h5>{view.number}</h5>
       <h5>Email: {view.email}</h5>
       <h5>Phone: {view.phone}</h5>
      </div>
 
      </Col>
</div>




  <div className='text-center m-4'>
    <Link to={`/edit/${view.id}`}>
    <MDBBtn >Edit Profile</MDBBtn>
    </Link>

    </div>   
  
<div className='text-center m-4'>
<MDBBtn href='/'>Back To Home</MDBBtn>
</div>
    
    </div>
    
 
  )
}

export default ViewProfile