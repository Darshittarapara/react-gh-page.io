// 
import React, { Component } from 'react';
//
class Roadmapweb extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {

        return (
            <div className='Roadmap_of_web'>
                <div className='Top_block'>
                    <h2>Frontend developer</h2>
                    <div>
                        <img src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210309160419/frontend-design-roadmap.jpeg' alt='' width={600} height={400} />

                    </div>
                    <div >
                        <h2>Langagues you learn</h2>
                        <ul>
                            <li>
                                <span>HTML</span>

                            </li>
                            <li>
                                <span>CSS</span>

                            </li>
                            <li>
                                <span>JavaScript</span>

                            </li>
                            <li>
                                <span>Bootstrap</span>

                            </li>
                        </ul>
                    </div>
                </div>







            </div>
        );
    }
}

export default Roadmapweb;
