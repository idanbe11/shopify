import React from 'react';
import '../App.css';
import banner from'../assets/images/banner.png';


const Home = () => {

    return (
        <div id="home" className="section">
            <div className='heroSection'>
            <img src={banner} alt="banner"/>
            </div>
        </div>
      );
    };
    
    export default Home;