import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';


  import './Header.css'

  
function Header() {
  return (
    <div className='header'>
     

        <MDBNavbar >
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
          <i className='fa-solid fa-user text-primary m-2'></i>
           <h3 className='text-primary'>Contact List</h3> 
           <div className='head d-flex'>
            
           </div>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

{/*        
       <button className='mx-3 my-5 btn btn-white fw-bold rounded-pill'>Our Company </button>
       <button className='mx-3 my-5 btn btn-white fw-bold rounded-pill'>About Us</button>
       <button className='mx-3 my-5  btn btn-white fw-bold rounded-pill'>Contact Us</button>
       
       <div className='icon d-flex m-3 text-light'>
       <i className='mx-2 fa-brands fs-2 fa-facebook'></i>
       <i className='mx-2 fa-brands fs-2  fa-instagram'></i>
       <i className='mx-2 fa-brands  fs-2 fa-twitter'></i>
       <i className='mx-2 fa-brands fs-2 fa-github'></i>
       </div> */}
       

    </div>
  )
}

export default Header