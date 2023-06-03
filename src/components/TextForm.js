import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        //    console.log('UpperCase was clicked'+ Text)
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        //    console.log('handleLoClick was clicked'+ Text)
        setText(newText)
        props.showAlert("Converted to Lowercase","success")

    }

    const handleToClear = () => {
        let newText = "";
        //    console.log('handleToClear was clicked'+ Text)
        setText(newText)
        props.showAlert("Text Cleared","success")
    }
    const handleOnChange = (event) => {
        // console.log('on change clicked')
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter Your Text");





    return (

        <>
            <div className="mb-3 " style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
                <div className='container my-3'  >

                    <h1 className="my-4">Enter the text to analyze below</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange}
                        id="exampleFormControlTextarea1" rows="8" ></textarea>

                </div>
                <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To UpperCase </button>
                <button className="btn btn-primary mx-2 my-1 " onClick={handleLoClick}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleToClear}>Clear text</button>


                <h2>Your Text Summery</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words And {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes To Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>


        </>

    );
}
