import React from 'react';
import '../App.css';


const Services = () => {

    return (
        <div>
           <div id="services" className="section">
                <h1>השירותים שלנו</h1>
                <div className="services-grid">
                <div className="services-column">
                    <h2>Service Category 1</h2>
                    <ul>
                    <li>Service 1</li>
                    <li>Service 2</li>
                    <li>Service 3</li>
                    </ul>
                </div>
                <div className="services-column">
                    <h2>Service Category 2</h2>
                    <ul>
                    <li>Service 4</li>
                    <li>Service 5</li>
                    <li>Service 6</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
      );
    };
    
    export default Services;