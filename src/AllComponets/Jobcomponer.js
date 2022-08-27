import React, { Component } from 'react';
import '../App.css'
class Jobcomponer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='home_block'>

                <div className='parent_home_block'>
                    <div className='block_contain'>
                        <h2>Strands Attached to IT Courses</h2>
                        <p>
                            The purpose of Information Technology courses is to equip students with theoretical knowledge as well as the skill sets that meet the requirements of the IT companies. Whether it is the designing, development or testing of software, all the things are a part of the IT courses. The students planning to pursue B-Tech in IT must realize the fact that this course includes the core concepts of database management systems, Java programming, information security, analysis of the algorithm, computer networking, ERP, E-commerce, cloud computing, software engineering and many other things related to operating systems.
                        </p>
                    </div>
                    <div className='block_contain'>
                        <h2>
                            Job Outcomes for the Students of Information Technology
                        </h2>
                        <p>
                            Propelled by the challenges of employment, it becomes inevitable for the students to opt for a stream which unfolds myriad career opportunities. Information Technology is one such field in the engineering that paves way for a shining future. IT additionally helps in expanding one’s ability and identity. Anyone having qualities like good communication skills, curiosity to come up with new ideas and passion to improve their knowledge in the IT industry can expect the best things in their career. The most alluring part of this field is that there is no shortage of job options at both entry-level and expert level, as the IT sector is expanding by a quantum fold. After completing their B-Tech in IT, students can seek jobs at almost all the major Multinational Corporations (MNCs) like IBM, Microsoft, Cisco, etc. Here, some of the job profiles served by candidates after attaining a degree in the IT industry have been highlighted:
                        </p>
                        <div className='list'>
                            <ul>
                                <li>Web developer</li>
                                <li> Software engineer</li>
                                <li>Digital Marketing</li>
                                <li>MobileApp Devlopment</li>

                                <li>Information security analyst</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Jobcomponer;