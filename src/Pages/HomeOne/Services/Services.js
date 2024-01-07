import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const servicesData = [
      {
        id: 1,
        title: 'Home Services',
        batch: '01',
        description:'Installation ,home repair and many more',
        imgOne: 'assets/img/icon/dream.png',
        imgTwo: 'assets/img/icon/dream.png',
        href: '/services-details',
      },
      {
        id: 2,
        title: 'Designing home',
        batch: '02',
        description: 'Designer expert of more than 5years of exprience.',
        imgOne: 'assets/img/icon/service.png',
        imgTwo: 'assets/img/icon/service.png',
        href: '/services-details',
      },
      {
        id: 3,
        title: '10 days Return',
        batch: '03',
        description: 'Policy for our all premium customer.',
        imgOne: 'assets/img/icon/services-3.png',
        imgTwo: 'assets/img/icon/services-33.png',
        href: '/services-details',
      },
      {
        id: 4,
        title: 'Custom Funiture',
        batch: '04',
        description: 'Bulid your dream furniture with us.',
        imgOne: 'assets/img/icon/custom.png',
        imgTwo: 'assets/img/icon/custom.png',
        href: '/services-details',
      },
    ];
    return (
        <div className="services__area section-padding" style={{backgroundImage: `url('../assets/img/service1.png')`}}>
            <div className="container">
                <div className="row mb-30">
                    <div className="col-xl-12">
                        <div className="services__area-title lg-t-center"> 
                            <span className="subtitle one">Our Services</span>
                            <h2>Our Services</h2> 
                        </div>
                    </div>
                </div>
                <div className="row">
                    {servicesData.map((item, id)=>(
                        <div className="col-xl-6 col-lg-6 col-md-6" key={id}>
                            <div className="services__area-item"> 
                                <span>{item.batch}</span>
                                <div className="services__area-item-icon">
                                    <img src={item.imgTwo} alt="" />
                                    <div className="services__area-item-icon-one">
                                        <img src={item.imgOne} alt="" />
                                    </div>
                                </div>
                                <div className="services__area-item-content">
                                    <h4><Link to="">{item.title}</Link></h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;