import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <section className="bg-light" id='about'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">About Us</h2>
              <p className="left">The Hub is a computer science organization at the University of Wisconsin Madison. Our primary goal is to bring computer science students together. We believe that your experience at UW Madison improves when you have friends in your major. Finding project partners is easier, finding study partners is easier, and enjoying social life beyond the classroom is easier. Our secondary goal is to connect computer scientists with other relevant majors such as Math, Engineering, Business,  and Communication Arts. We believe that your knowledge in applications of computer science improves when you have friends with relatable majors. We hope you find this server beneficial to your student life.</p>
              <p className="center">On Wisconsin</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}