import React from 'react'

const Whatsapp = () => {
    // const phoneNumber = '9321503981'; // Replace with the desired phone number
    // const message = 'Hello to our mega furniture!'; // Replace with your desired message

    //  const handleClick = () => {
    //  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    //     window.open(whatsappURL, '_blank');
    // };
    return (
        <div className='whatsapp_float'>
            
            {/* <link to="https://wa.me/919321503981"><img src="../assets/img/whatsapp.png" alt="WhatsApp" className='whatsapp_float_btn' onClick={handleClick} /><link></link> */}
            <a href="https://wa.me/919321503981" target="_blank" rel="noreferrer" className="whatsapp_float">
            <img src="../assets/img/whatsapp.png" alt="WhatsApp Icon" className='whatsapp_float_btn'/>
        </a>
            
        </div>
    );
};

export default Whatsapp