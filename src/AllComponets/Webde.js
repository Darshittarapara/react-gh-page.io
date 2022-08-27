import React, { Component } from 'react';
import '../App.css';
import WebHome from './WebHome';
import Roadmapweb from './Roadmapweb';
import Backend from './Backend'
const secondNum = 2
class Webdevelopment extends Component {
    constructor(props) {
        super(props);
        this.state = { componet: <WebHome />, changeNum: 1 };
    }
    render() {
        return (
            <div className='all_parent_block'>
                {this.state.componet}
                <button type='button' onClick={(e) => {
                    console.log(this.state.componet)
                    if (secondNum > this.state.changeNum) {
                        this.setState({
                            componet: <Roadmapweb />,
                            changeNum: 2
                        })
                        e.target.innerHTML = 'Back'


                    }
                    else {
                        this.setState({
                            componet: <WebHome />,
                            changeNum: 1
                        })
                        e.target.innerHTML = 'Know Frontend'

                    }
                }} style={{ margin: "10px" }}>Know Frontend</button>

                <button type='button' onClick={(e) => {
                    console.log(this.state.componet)
                    if (secondNum > this.state.changeNum) {
                        this.setState({
                            componet: <Backend />,
                            changeNum: 2
                        })
                        e.target.innerHTML = 'Back'


                    }
                    else {
                        this.setState({
                            componet: <WebHome />,
                            changeNum: 1
                        })
                        e.target.innerHTML = 'Know Bakcend'

                    }
                }}>
                    know  Backend
                </button>
            </div>


        );
    }
}

export default Webdevelopment; 