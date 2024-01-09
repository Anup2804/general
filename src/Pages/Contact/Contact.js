import React from 'react';
import { Link } from 'react-router-dom';
import FooterThree from '../Footer/FooterThree';
import Header from '../Header/HeaderOne';
import { pageTitle } from '../PageTitle';
import Form from './Form';

const Contact = () => {
    pageTitle('Contact Us');
    return (
        <>
        <Header></Header>
    <div className="contact__area section-padding" style={{backgroundImage:`url('../assets/img/contact.png')`}}>
            <div className="container">
                <div className="row mb-60">
                    <div className="col-xl-5 col-lg-6">
                        <div className="contact__area-title">
                            <span className="subtitle">Contact Us</span>
                            <h2>Need Yor any help Contact with Us</h2> 
                        </div>
                        <div className="contact__area-info">
                            <div className="contact__area-info-item">
                                <div className="contact__area-info-item-icon">
                                    <i className="far fa-phone-alt"></i>
                                    <span>Phone :</span>
                                </div>
                                <div className="contact__area-info-item-content">
                                    <a href="tel:+123(458)896895">+91 9321503981</a>
                                </div>
                            </div>
                            <div className="contact__area-info-item">
                                <div className="contact__area-info-item-icon">
                                    <i className="fal fa-envelope"></i>
                                    <span>Email :</span>
                                </div>
                                <div className="contact__area-info-item-content">
                                    <a href="mailto:anupc4039@gamil.com">anupc4039@gamil.com</a>
                                </div>
                            </div>
                            <div className="contact__area-info-item">
                                <div className="contact__area-info-item-icon">
                                    <i className="far fa-map-marker-alt"></i>
                                    <span>Location :</span>
                                </div>
                                <div className="contact__area-info-item-content">
                                    <Link to="#">66W3+Q4G Buxton, UK</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="contact__area-bottom">
                            <div className="contact__area-bottom-form page">
                                <Form></Form>
                            </div>
                            <div className="contact__area-bottom-map">
                                <iframe  title="My map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120689.063198228!2d72.74549979447441!3d19.040279407015852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce11a41f57e3%3A0xd9fc359f5175bb78!2sBranding%20Catalyst!5e0!3m2!1sen!2sin!4v1704806564863!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" referrerpolicy="no-referrer-when-downgrade" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterThree></FooterThree>
        </>
    );
};

export default Contact;