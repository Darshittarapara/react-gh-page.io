import React, { Component } from 'react';
import '../App.css'
class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='sideparent common'>

                <div className='project_contain'>
                    <div className='common_pro'>
                        <h2 >Source</h2>
                        <div>
                            <ul>
                                <li>
                                    <span>Web development </span>
                                    <a href='https://red-store-tau.vercel.app/' >Link</a>

                                </li>
                                <li>
                                    <span>Software development</span>
                                    <a href='https://travel-website-jade.vercel.app/' >Link</a>
                                </li>
                                <li>
                                    <span>App development</span>
                                    <a href=' https://burgur-house.vercel.app/' >Link</a>
                                </li>
                            </ul>

                        </div>


                    </div>

                    <div className='common_pro'>
                        <h2>Online plateform</h2>
                        <div>
                            <ul>
                                <li>
                                    <span>Udemy</span>

                                </li>
                                <li>
                                    <span>SkillShare</span>

                                </li>
                                <li>
                                    <span>Codecademy</span>

                                </li>
                            </ul>

                        </div>



                    </div>

                    
                    <div className='common_pro'>
                        <h2>package</h2>
                        <div>
                            <ul>
                                <li>
                                    <span>web developer</span>

                                </li>
                                <li>
                                    <span>Software developer</span>

                                </li>
                                <li>
                                    <span>App developer</span>

                                </li>
                            </ul>

                        </div>



                    </div>
                </div>

            </div>
        );
    }
}

export default Sidebar;