import React from 'react'
import Accordion from '../components/Accordion/Accordion'
import Forms from '../components/Forms/Forms'
import SimpleText from '../components/SimpleText/SimpleText'
import Slider from '../components/Slider/Slider'
import TextSlider from '../components/TextSlider/TextSlider'
import "./singlepage.scss"

const Singlepage = () => {
  return (
    <div className='firstSection'>
       <Slider />
       <TextSlider />
       <SimpleText />
       <Accordion />
       <Forms />
       <div className="footer">
         <h1>LOREM IPSUM</h1>
       </div>
    </div>
  )
}

export default Singlepage