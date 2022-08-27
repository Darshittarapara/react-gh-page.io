import React, { Component } from 'react';
import '../App.css'
class MobileDevlopment extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='child_block'>
                <div className='blockName'>
                    <h1>What is App development?</h1>
                    <p>
                        Mobile application development is the process to making software for smartphones and digital assistants, most commonly for Android and iOS. The software can be preinstalled on the device, downloaded from a mobile app store or accessed through a mobile web browser. The programming and markup languages used for this kind of software development include Java, Swift, C# and HTML5.
                    </p>
                </div>
                <div className='blockName'>
                    <h1>We can divide Into Two Parts</h1>
                    <div>
                        <h2>Android developer</h2>
                        <h3>
                            Android is the name of the mobile operating system owned by Google. Android typically comes installed on a variety of smartphones and tablets from many manufacturers such as Samsung, Sony, and Motorola (as well as on Google's own Nexus smartphone), giving users access to Google services such as Search, YouTube, Maps, Gmail, etc.

                        </h3>
                        <h4>languages</h4>
                        <ul>
                            <li>Java</li>
                            <li>Kotline</li>
                        </ul>
                    </div>

                    <div>
                        <h2>IOS system</h2>
                        <h3>
                            iOS is a shortened way of saying ‘iPhone OS’, or ‘iPhone Operating System’, and is the mobile operating system that runs on Apple’s mobile devices such as iPhones and iPads.
                            They know iOS, which means they have a good grasp on build views; can handle user interaction; can display data; show alerts; handle navigation; display images, labels and text views; and integrate with REST APIs and parse JSON.
                        </h3>
                        <h4>languages</h4>
                        <ul>
                            <li>Swift</li>

                        </ul>

                    </div>
                </div>
            </div>
        );
    }
}

export default MobileDevlopment;