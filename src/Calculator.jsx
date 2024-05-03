import React, { useState } from 'react';

function Calculator() {
 const [display, setDisplay] = useState('');
 const [currentInput, setCurrentInput] = useState('');

 const handleInput = (e) => {
    const value = e.target.value;
    // Check if the input is "80085"
    if (value === '80085') {
      alert('Grow up Man!!');
      // Clear the input after showing the alert
      setDisplay('');
      setCurrentInput('');
      return;
    }
    // Update the display with the new input
    setDisplay(value);
    setCurrentInput(value);
 };


 const handleButtonClick = (e) => {
    const value = e.target.value;
    if (value === '=') {
      calculate();
    } else if (value === 'C') {
      setDisplay('');
      setCurrentInput('');
    } else if (value === 'Del') {
      // Remove the last character from the currentInput
      setCurrentInput(currentInput.slice(0, -1));
      setDisplay(currentInput.slice(0, -1));
    } else {
      setDisplay(display + value);
      setCurrentInput(currentInput + value);
    }
 };


 const calculate = () => {
    try {
      const result = eval(currentInput);
      setDisplay(result);
      setCurrentInput('');
    } catch (error) {
      setDisplay('Error');
      setCurrentInput('');
    }
 };


 return (
    // <div>
    //   <input
    //     type="text"
    //     value={display}
    //     onChange={handleInput}
    //   />
    //   <div>
    //     <button value="1" onClick={handleButtonClick}>1</button>
    //     <button value="2" onClick={handleButtonClick}>2</button>
    //     <button value="3" onClick={handleButtonClick}>3</button>
    //     <button value="+" onClick={handleButtonClick}>+</button>
    //   </div>
    //   <div>
    //     <button value="4" onClick={handleButtonClick}>4</button>
    //     <button value="5" onClick={handleButtonClick}>5</button>
    //     <button value="6" onClick={handleButtonClick}>6</button>
    //     <button value="-" onClick={handleButtonClick}>-</button>
    //   </div>
    //   <div>
    //     <button value="7" onClick={handleButtonClick}>7</button>
    //     <button value="8" onClick={handleButtonClick}>8</button>
    //     <button value="9" onClick={handleButtonClick}>9</button>
    //     <button value="*" onClick={handleButtonClick}>*</button>
    //   </div>
    //   <div>
    //     <button value="0" onClick={handleButtonClick}>0</button>
    //     <button value="." onClick={handleButtonClick}>.</button>
    //     <button value="/" onClick={handleButtonClick}>/</button>
    //     <button value="=" onClick={handleButtonClick}>=</button>
    //   </div>
    //   <div>
    //     <button value="C" onClick={handleButtonClick}>C</button>
    //     <button value="Del" onClick={handleButtonClick}>Del</button>
    //   </div>
    // </div>

    <div className='container text-center'>
        <b><p data-aos="flip-up" data-aos-duration="1000" data-aos-easing="ease-in-out" className='mb-3 sc' style={{fontSize:"50px"}}>Simple Calculator</p></b>
        <div data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out" className="row justify-content-center">
            <div className="col-md-4 justify-content-center">
                <input className='rounded-top-4 fs-3 px-3 py-2 border' type="text" inputMode='numeric' value={display} onChange={handleInput} />
            </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1600" data-aos-easing="ease-in-out" className="row justify-content-center">
            <div className="col-md-4 justify-content-center">
                <button className='btn fs-1 px-4 py-1 rounded-circle bg-white shadow-sm m-2' value="1" onClick={handleButtonClick}>1</button>
                <button className='btn fs-1 px-4 py-1 rounded-circle bg-white shadow-sm m-2' value="2" onClick={handleButtonClick}>2</button>
                <button className='btn fs-1 px-4 py-1 rounded-circle bg-white shadow-sm m-2' value="3" onClick={handleButtonClick}>3</button>
                <button className='btn fs-1 px-4 py-1 rounded-circle bg-white shadow-sm m-2' value="+" onClick={handleButtonClick}>+</button>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1700" data-aos-easing="ease-in-out" className="row justify-content-center">
            <div className="col-md-4 justify-content-center">
                <button className='btn fs-1 px-4 py-1 rounded-circle bg-white shadow-sm m-2' value="4" onClick={handleButtonClick}>4</button>
                <button className='btn fs-1 px-4 py-1 rounded-circle bg-white shadow-sm m-2' value="5" onClick={handleButtonClick}>5</button>
                <button className='btn fs-1 px-4 py-1 rounded-circle bg-white shadow-sm m-2' value="6" onClick={handleButtonClick}>6</button>
                <button className='btn fs-1 px-4 py-1 rounded-circle bg-white shadow-sm m-2' value="-" onClick={handleButtonClick}>-</button>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1800" data-aos-easing="ease-in-out" className="row justify-content-center">
            <div className="col-md-4 justify-content-center">
                <button className='btn fs-1 px-4 py-1 rounded-circle bg-white shadow-sm m-2' value="7" onClick={handleButtonClick}>7</button>
                <button className='btn fs-1 px-4 py-1 rounded-circle bg-white shadow-sm m-2' value="8" onClick={handleButtonClick}>8</button>
                <button className='btn fs-1 px-4 py-1 rounded-circle bg-white shadow-sm m-2' value="9" onClick={handleButtonClick}>9</button>
                <button className='btn fs-1 px-4 py-1 rounded-circle bg-white shadow-sm m-2' value="*" onClick={handleButtonClick}>*</button>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1900" data-aos-easing="ease-in-out" className="row justify-content-center">
            <div className="col-md-4 justify-content-center">
                <button className='btn fs-1 px-4 py-1 rounded-circle bg-white shadow-sm m-2' value="0" onClick={handleButtonClick}>0</button>
                <button className='btn fs-1 px-4 py-1 rounded-circle bg-white shadow-sm m-2' value="." onClick={handleButtonClick}>.</button>
                <button className='btn fs-1 px-4 py-1 rounded-circle bg-white shadow-sm m-2' value="/" onClick={handleButtonClick}>/</button>
                <button className='btn fs-1 px-4 py-1 rounded-circle bg-white shadow-sm m-2' value="=" onClick={handleButtonClick}>=</button>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out" className="row justify-content-center">
            <div className="col-md-4 justify-content-center">
                <button className='btn fs-1 px-4 py-1 rounded-circle bg-white shadow-sm m-2' value="C" onClick={handleButtonClick}>C</button>
                <button className='btn fs-1 px-4 py-1 rounded-circle bg-warning shadow-sm m-2' value="Del" onClick={handleButtonClick}>Del</button>
            </div>
        </div>
    </div>
 );
}

export default Calculator;
