import React, { Component } from 'react';
import {Route , Link } from 'react-router-dom';
import FrontDev from './FrontDev';
import BackDev from './BackDev';

class AboutUs extends Component {

  

    render() {
        return (
            <div>
                <h1>About Us:</h1>
                <ul>
                    <li><Link to="/aboutUs/FrontDev">Frontend dev</Link></li>
                    <li><Link to="/aboutUs/BackDev">Backend dev</Link></li>
                </ul>
                
                <div>

            <Route path="/aboutUs/FrontDev" component={FrontDev}/>
            <Route path="/aboutUs/BackDev" component={BackDev}/>
                </div>


            </div>
        );
    }
}

export default AboutUs;