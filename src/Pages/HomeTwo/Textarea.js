import React, { useState } from 'react'
import Proptypes from 'prop-types'



const Textarea = (props) => {
    const handleonclick =() => {
        // console.log("uppercase was cliclked");
        let newtext = text.toUpperCase();
        settext(newtext);

    }
    const handleonchange =(event) =>{
        // console.log("onchange");
        settext(event.target.value);
    }
    const [text, settext] = useState('Enter text');
    return (
    <>
        <h2>{props.title}</h2>
        <div className="mb-3">
            <textarea id="textarea" style={{backgroundColor: "black"}} value= {text} onChange={handleonchange}  rows='10' cols='50'></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleonclick}>convert into uppercase</button>
    </>
  )
} 
 
Textarea.propTypes ={
    title: Proptypes.string.isRequired}

export default Textarea;
