import React, { Component } from 'react';
import '../App.css'
class Sofware extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='child_block'>
                <div className='blockName'>
                    <h1>What is Sofware development?</h1>
                    <p>
                        Software development refers to a set of computer science activities dedicated to the process of creating, designing, deploying and supporting software.
                        Software itself is the set of instructions or programs that tell a computer what to do. It is independent of hardware and makes computers programmable. There are three basic types:
                    </p>
                </div>
                <div className='blockName'>
                    <h1>Type of Software</h1>
                    <div>
                        <h2>System software</h2>
                        <h3>
                            to provide core functions such as operating systems, disk management, utilities, hardware management and other operational necessities.



                        </h3>

                    </div>

                    <div>
                        <h2>Programming software </h2>
                        <h3>
                            to give programmers tools such as text editors, compilers, linkers, debuggers and other tools to create code
                        </h3>

                    </div>
                    <div>
                        <h2>Application software</h2>
                        <h3>
                            to help users perform tasks. Office productivity suites, data management software, media players and security programs are examples. Applications also refers to web and mobile applications like those used to shop on Amazon.com, socialize with Facebook or post pictures to Instagram.1
                        </h3>
                        <h4>
                            languages
                        </h4>
                        <ul>
                            <li>Java</li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

export default Sofware;