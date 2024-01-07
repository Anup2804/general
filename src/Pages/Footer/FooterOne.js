import React from 'react';
import { Link } from 'react-router-dom';
import Whatsapp from '../Whatsapp/Whatsapp';

const FooterOne = () => {
    return (
        <>
            <div className="footer__area section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-7">
                            <div className="footer__area-widget">
                                <div className="footer__area-widget-about lg-t-center">
                                    <div className="footer__area-widget-about-logo">
                                        <Link to="/"><img src="assets/img/newlogo.png" alt="" /></Link>
                                    </div>
                                    <div className="footer__area-widget-about-social">
                                        <ul>
                                            {/* <li><Link to=''><i className="fab fa-facebook-f"></i></Link> </li>
                                            <li><Link to=''><i className="fab fa-twitter"></i></Link> </li>
                                            <li><Link to=''><i className="fab fa-behance"></i></Link> </li>
                                            <li><Link to=''><i className="fab fa-linkedin-in"></i></Link> </li>
                                            <li><Link to=''><i className="fal fa-basketball-ball"></i></Link> </li>
                                            <li><Link to=''><i className="fab fa-pinterest-p"></i></Link> </li>
                                            <li><Link to=''><i className="fab fa-instagram"></i></Link> </li> */}
                                        </ul>
                                    </div>
                                    <div className="footer__area-widget-about-menu">
                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/">Services</Link></li>
                                            <li><Link to="/">News</Link></li>
                                            {/* <li><Link to="/portfolio">Instagram</Link></li> */}
                                            <li><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="footer__area-widget">
                                <div className="footer__area-widget-subscribe one">
                                    <h4>Contact us on email</h4>
                                    <form action="#">
                                        <input type="email" placeholder="Email Address" required />
                                        <button type="submit"><i className="fal fa-hand-pointer"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <Whatsapp/>
                    </div>
                </div>
            </div>
            {/* <Whatsapp/> */}
            <div className="copyright__area copyright__area-one">
                <div className="container">
                    <div className="row align-items-center copyright__area-border">
                        <div className="col-xl-12">
                            <div className="copyright__area-left copyright__area-one-left">
                                <p>Copyright © 2024<Link to="/">Mega Furniture</Link> Website by Branding Catalyst </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterOne;