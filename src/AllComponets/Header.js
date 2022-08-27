import React, { Component } from 'react'
import logo from '../img/logo.jpg';
import '../App.css'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='Header'>
                <img src={logo} alt='' width={150} height={70} />
                <span className='span'>CarrerPath</span>
            </div>
        );
    }
}

export default Header;