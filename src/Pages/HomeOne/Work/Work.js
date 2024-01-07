import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Work = () => {
    return (
        <div className="work__area section-padding">
            <div className="container">
                <div className="row mb-60">
                    <div className="col-xl-12">
                        <div className="work__area-title lg-t-center"> 
                            <span className="subtitle one">Our power</span>
                            <h2>Quality of MEGA FURNITURE</h2> 
                        </div>
                    </div>
                </div>
                <div className="row mb-110">
                    <div className="col-xl-4 col-lg-4 col-md-6 pr-110 lg-mb-30">
                        <div className="work__area-item"> <span>01</span>
                            <div className="work__area-item-icon"> <img src="assets/img/icon/work-1.png" alt="" /> </div>
                            <div className="work__area-item-content">
                                <h4>Dreamiture</h4>
                                <p>Customize furniture are avaiable for our happy customers.</p>
                            </div>
                            <div className="work__area-item-shape"> <img src="assets/img/icon/shape-1.png" alt="" /> </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 pl-55 pr-55 md-mb-30">
                        <div className="work__area-item"> <span>02</span>
                            <div className="work__area-item-icon"> <img src="assets/img/icon/work-2.png" alt="" /> </div>
                            <div className="work__area-item-content">
                                <h4>Home Design </h4>
                                <p>Best home design are suggested by expert interior designer.</p>
                            </div>
                            <div className="work__area-item-shape"> <img src="assets/img/icon/shape-2.png" alt="" /> </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 pl-110">
                        <div className="work__area-item"> <span>03</span>
                            <div className="work__area-item-icon"> <img src="assets/img/icon/work-3.png" alt="" /> </div>
                            <div className="work__area-item-content">
                                <h4>Premium</h4>
                                <p>Premium wood quality for our premium customers.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="faq">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0" className="faq-item">
                                    <Accordion.Header className="faq-item-card-header"><h5>What is our vision ?</h5></Accordion.Header>
                                    <Accordion.Body className='faq-item-card-header-content'><p>Fulfiling the dreams for thousands of customers around india.We are not making the house we are making homes .Dont fill your home with wood decorate with us .</p></Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className="faq-item">
                                    <Accordion.Header className="faq-item-card-header"><h5>How we work ?</h5></Accordion.Header>
                                    <Accordion.Body className='faq-item-card-header-content'><p>Its very simple you desire we make it the reality for you.Your happiness is our dream. </p></Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className="faq-item">
                                    <Accordion.Header className="faq-item-card-header"><h5>Where we are?</h5></Accordion.Header>
                                    <Accordion.Body className='faq-item-card-header-content'><p>Our showroom are all over india with customize workshop attached.We treat our family(customers) with best hospitality and service.</p></Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;