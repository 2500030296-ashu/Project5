import React, { Component } from 'react'; 
import CourseCard from './CourseCArd';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: [
        { name: "Data Structure and Algorithms", duration: "40hrs", price: "RS100", img: "/1.jpg" },
        { name: "Java Programming", duration: "30hrs", price: "RS80", img: "/2.jpg" },
        { name: "React JS", duration: "40hrs", price: "RS120", img: "/3.jpg" },
        { name: "Machine Learning", duration: "35hrs", price: "RS200", img: "/4.webp" },
      ]
    };
  }

  render() {
   
    const { courses } = this.state;

    return (
      <div className='app'>
        <div className='header'>Course Catalog - 2500030296 - Ashutosh Malviya</div>
        
        <div className='Section'>
          {courses.map((course, index) => (
            
            <CourseCard key={index} data={course} />
          ))}
        </div>

        <div className='footer'>
          © Copyright @ 2026. All rights reserved. - Ashutosh Malviya 
        </div>
      </div>
    );
  }
}