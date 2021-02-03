import React, { useEffect } from 'react';
import Person from '../components/indexdata'
import classes from './about.module.css'

const About = () => {
  useEffect(() => {
    document.title = "About- Asma"
  }, []);

  return (
    <div className="container" >
      <div className="row ">
        <div className="col">
          <div className="row  pt-5 d-flex align-items-center about-area">
            <div className="col-md-6">
              <div
                data-sal="slide-right"
                data-sal-delay="400"
                data-sal-easing="ease"
                className={`${classes.portfolioImageContainer}  shadow`}>
                <img className="w-100 m-auto" src="https://i.pinimg.com/736x/36/11/d4/3611d49ef7346849d29747312131dfc6.jpg" alt="asma noor" />
              </div>
            </div>
            <div className="col-md-6">
              <div
                data-sal="slide-up"
                data-sal-delay="600"
                data-sal-easing="ease"
                className={`${classes.aboutArea} pt-5`}>
                <h1>Hi, I am <span >{Person.name}</span></h1>
                <p >{Person.description}</p>
                <div className={classes.detailsArea}>
                  <ul>
                    <li><strong>Full Name</strong> {Person.name}</li>
                    <li><strong>Age</strong> {Person.age} Years</li>
                    <li><strong>Nationality</strong> {Person.nationality}</li>
                    <li><strong>Languages</strong> {Person.languages}</li>
                    <li><strong>Address</strong> {Person.address}</li>
                    <li><strong>Freelance</strong> {Person.freelance}</li>
                    <li><strong>E-mail</strong> <a href="asmaashraf496@gmail.com">{Person.email}</a> </li>
                    <li><strong>Phone</strong> {Person.phone}</li>
                  </ul>
                  <button className="text-uppercase"> <a href="http://freepdfhosting.com/73a1f9ce2e.pdf" rel="noopener noreferrer" target="_blank"> Download cv</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
