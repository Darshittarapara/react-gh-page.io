import React, { Component } from 'react';
class WebHome extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='child_block'>
                <div className='blockName'>
                    <h1>What is Web development?</h1>
                    <p>
                        Web development refers to the building, creating, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.Modern web development also includes web applications. Web applications are software packages that run on a web server and are accessed through the internet. This is unlike a traditional application that runs on your computer, tablet, or phone.
                    </p>
                </div>
                <div className='blockName'>
                    <h1>We can divide Into Two Parts</h1>
                    <div>
                        <h2>Frontend developer</h2>
                        <h3>
                            The part of a website that user interacts directly is termed as front end.it is also referred  to as the client side' of the application.In Frontend you design the layout that how the website will be display on any mobile or any different screen
                        </h3>

                    </div>

                    <div>
                        <h2>Backend developer</h2>
                        <h3>
                            Backend is the server side of a website. It is the part of the website that users cannot see and interact. It is the portion of software that does not come in direct contact with the users. It is used to store and arrange data.
                        </h3>

                    </div>
                </div>
            </div>
        );
    }
}

export default WebHome;