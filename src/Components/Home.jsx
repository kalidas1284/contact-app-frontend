import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/esm/Col';



function Home() {
  return (
    <Col sm={12} >
      <div>
        <div className='container'>
        <h3 className='text-center text-primary m-4'>Welcome To Contact List</h3>
        <p className=' justify'>
        A contact page is a common web page on a website for visitors to contact the organization or individual providing the website. The page contains one or more of the following items.
        A strong Contact Us page should contain several elements, such as a phone number and links to social media channels2. Your contact page can perform its primary function of helping customers resolve their issues while also serving other purposes such as helping the media make press inquiries, helping potential sponsors reach out to the company, and helping potential employees ask questions about the company
        Contact us pages. Everyone has them, needs them, but are you really paying attention to the strategy behind them?
It’s true isn’t it? One of the most valuable pages on your website is usually an afterthought. It’s one of those things that has to be there, but often enough, you throw the necessary information on and leave it at that. What a waste!

The page name itself is a call-to-action; Treat it with some respect.

Contact us pages are often the go-to for a new visitor on a mission. It’s where they go when they have a question and truly want to speak to an individual at your organization.

They exist to serve the user with the purpose of providing them with information on how they can get in touch with you.

The goal of every contact us page is to convert by clearly and effectively presenting the method(s) of getting in touch with a company as quickly as possible. 
        </p>

        <div className='text-center'>
            <Link to={'/view'}>
            <button className='btn rounded-pill fw-bold btn-primary'>Get Started</button>
            </Link>
          
        </div>
        </div>



    </div>
    </Col>
  )
}

export default Home