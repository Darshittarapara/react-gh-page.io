//Web development
//android development
//cloud deveopment
//cybersecurity
//Networking
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Webdevelopment from './Webde';
import MobileDevlopment from './Mobiledev';

import '../App.css'
import Sofware from './Sofware';
import Sidebar from './sidebar';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='Navbar'>
                <div className='router'>
                    <Router>
                        <div className='router_link'>
                            <ul>
                                <li>
                                    <Link to='/' style={{ color: "white" }}>Home</Link>
                                </li>
                                <li>
                                    <Link to='/webdeveolpmnent' style={{ color: "white" }} >Web development</Link>
                                </li>
                                <li>
                                    <Link to='/mobiledevelopment' style={{ color: "white" }} >Mobile App Devlopment</Link>
                                </li>

                                <li>
                                    <Link to='/Sofware' style={{ color: "white" }}>Sofware Devlopment</Link>
                                </li>
                            </ul>
                        </div>
                        <div id='allcomponets'>
                            <div className='router_componets'>
                                <Routes>
                                    <Route path='/' element={<Home />} />
                                    <Route path='/webdeveolpmnent' element={<Webdevelopment />} />
                                    <Route path='/mobiledevelopment' element={<MobileDevlopment />} />

                                    <Route path='/Sofware' element={<Sofware />} />
                                </Routes>
                            </div>
                            <div className='sideComponets'>
                                <Sidebar />
                            </div>
                        </div>



                    </Router>

                </div>
            </div>
        );
    }
}

export default Navbar;