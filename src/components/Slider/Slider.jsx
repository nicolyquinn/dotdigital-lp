import React from 'react'
import "./slider.scss"
import { FaArrowDown } from 'react-icons/fa';

const Slider = () => {
  return (
    <div className="slider">
        <div className="headerSlider">
        <icon></icon>
        <h1 className='title'>LOREM IPSUM</h1>
        <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <FaArrowDown className='icon'></FaArrowDown>
        </div>
        <div className="slides">
            <input type="radio" name='radio-btn' id='radio1'></input>
            <input type="radio" name='radio-btn' id='radio2'></input>
            <input type="radio" name='radio-btn' id='radio3'></input>
            <div className="slide first">
                <img src='/img/img01.jpg' />
            </div>
            <div className="slide">
                <img src='/img/img02.jpg' />
            </div>
            <div className="slide">
                <img src='/img/img03.jpg' />
            </div>
            <div className="navigation-auto">
                <div className="auto-btn1"></div>
                <div className="auto-btn2"></div>
                <div className="auto-btn3"></div>
            </div>
        </div>
        <div className="navigationManual">
            <label for="radio1" className='manualBtn' />
            <label for="radio2" className='manualBtn' />
            <label for="radio3" className='manualBtn' />
        </div>     
    </div>
  )
}

export default Slider