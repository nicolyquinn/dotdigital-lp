import React from 'react'
import "./simpletext.scss"

const SimpleText = () => {
  return (
    <div className="simpleContainer">
        <div className="left">
            <img src="/img/img02.jpg" className='img'/>
        </div>
        <div className='right'>
            <div className="simpleTitle">LOREM IPSUM</div>
            <div className="simpleDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis arcu, aliquet vel velit nec, consectetur ornare libero. Nunc luctus, arcu id tristique tincidunt, nulla sem dignissim lectus, eu tempus enim ligula eu eros. Maecenas commodo dolor at leo aliquet, non eleifend tellus porttitor. </div>
            <div className="simpleDesc2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis arcu, aliquet vel velit nec, consectetur ornare libero. Nunc luctus, arcu id tristique tincidunt, nulla sem dignissim lectus, eu tempus enim ligula eu eros. Maecenas commodo dolor at leo aliquet, non eleifend tellus porttitor. </div>
            <div className="simpleDesc3"><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis arcu, aliquet vel velit nec, consectetur ornare libero. Nunc luctus, arcu id tristique tincidunt, nulla sem dignissim lectus, eu tempus enim ligula eu eros. Maecenas commodo dolor at leo aliquet, non eleifend tellus porttitor.</i> </div>
            <div className="simpleDesc4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis arcu, aliquet vel velit nec, consectetur ornare libero. Nunc luctus, arcu id tristique tincidunt, nulla sem dignissim lectus, eu tempus enim ligula eu eros. Maecenas commodo dolor at leo aliquet, non eleifend tellus porttitor. </div>
        </div>
    </div>
  )
}

export default SimpleText