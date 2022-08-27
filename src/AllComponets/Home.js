import React, { Component } from 'react';
import IntroComponets from './IntroComponets';
import Jobcomponer from './Jobcomponer';
import '../App.css'
const secondNum = 2
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { componet: <IntroComponets />, changeNum: 1 };
    }


    render() {
        return (
            <div>
                {this.state.componet}
                <div className='button'>
                    <button type='button' onClick={(e) => {
                        console.log(this.state.componet)
                        if (secondNum > this.state.changeNum) {
                            this.setState({
                                componet: <Jobcomponer />,
                                changeNum: 2
                            })
                            e.target.innerHTML = 'Back'

                        }
                        else {
                            this.setState({
                                componet: <IntroComponets />,
                                changeNum: 1
                            })
                            e.target.innerHTML = 'Know more'

                        }
                    }}>Know more</button>
                </div>
            </div>


        );
    }
}

export default Home;