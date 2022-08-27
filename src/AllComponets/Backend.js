import React, { Component } from 'react';
class Backend extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='Top_block'>
                <h2>Backend developer</h2>
                <div>
                    <img src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210309162115/Backend-design-roadmap.jpeg' alt='' width={600} height={400} />

                </div>
                <div >
                    <h2>Langagues you learn</h2>
                    <ul>
                        <li>
                            <span>PHP</span>

                        </li>
                        <li>
                            <span>JAVA</span>

                        </li>
                        <li>
                            <span>PYTHON</span>

                        </li>
                        <li>
                            <span>Node js</span>

                        </li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default Backend;