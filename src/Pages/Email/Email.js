import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
// import Form from '../Contact/Form';

const Email = () => {
    const form = useRef();
    const showAlert=() =>{
        window.alert("done");
    }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dli40wr', 'template_w6m1ktm', form.current, '6m9VmzwBFC9Ihzy3S')
      .then((result) => {
          console.log(result.text);
          
          
      }, (error) => {
          console.log(error.text);
      });
    }
    return (
       <>
       <form ref={form} onSubmit={sendEmail}>
       <div className="row">
                <div className="col-sm-12 mb-25">
                    <div className="contact__area-bottom-form-item">
                        <input type="text" name="user_name" placeholder="Your Name" required /> 
                    </div>
                </div>
            </div>
                <div className="col-sm-12 mb-25">
                    <div className="contact__area-bottom-form-item">
                        <input type="email" name="user_email" placeholder="Email Address"  required /> 
                    </div>
                </div>
                <div className="col-sm-12 mb-25">
                    <div className="contact__area-bottom-form-item">
                        <input type="text" name="demand" placeholder="Demand" required /> 
                    </div>
                </div>
                <div className="col-sm-12 mb-30">
                    <div className="contact__area-bottom-form-item">
                        <textarea name="message" rows="5" placeholder="Message"></textarea>
                    </div>
                </div>
                <div className="col-sm-12 mb-45">
                    <div className="contact__area-bottom-form-item">
                        <label><input className="mr-10" type="checkbox" />I agree with services tarms and condition</label>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="contact__area-bottom-form-item">
                        <button className="theme-btn-1" type="submit" value="Send">Submit Now<i className="far fa-long-arrow-right" onClick={showAlert}></i></button>
                    </div>
            </div>

       </form>
       </> 
    );

}

export default Email

{/* <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form> */}