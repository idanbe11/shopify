import React from 'react';
import '../App.css';
import team from '../assets/images/image.jpg';


const Team = () => {

    return (
        <div>
            <div id="team" className="section">
                <h1>Team Section</h1>
                    <div className="team-grid">
                        <div className="team-item">
                        <img src={team} alt="Team member 1" />
                        <h2>Team Member 1</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae urna eu nisl sodales accumsan.</p>
                        </div>
                        <div className="team-item">
                        <img src={team} alt="Team member 2" />
                        <h2>Team Member 2</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae urna eu nisl sodales accumsan.</p>
                        </div>
                        <div className="team-item">
                        <img src={team} alt="Team member 3" />
                        <h2>Team Member 3</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae urna eu nisl sodales accumsan.</p>
                        </div>
                    </div>
            </div>
        </div>
      );
    };
    
    export default Team;