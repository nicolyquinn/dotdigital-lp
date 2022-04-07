import React, { useState } from 'react'
import "./accordion.scss"
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const Accordion = () => {
    const[selected, setSelected] = useState(null)

    const toggle =(i) => {
        if(selected == i){
            return setSelected(null)
        }

        setSelected(i)
    }

  return (
    <div className="wrapper">
        <div className="accordion">
            
            {data.map((item, i) => (
                <div className={selected === i ? 'item show' : 'item'}>
                    <div className={selected === i ? 'title show' : 'title'} onClick={() => toggle(i)}>
                        <h2>{item.question}</h2>
                        <span>{selected === i ? <FaArrowUp /> : <FaArrowDown />}</span>
                    </div>
                    <div className={selected === i ? 'content show' : 'content'}>
                        <img className='img' src='/img/img01.jpg'/>
                        {item.answer}
                        </div>
                </div>
            ))}

        </div>
    </div>
  )
}

const data = [
    {
        question: 'Question 1',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis arcu, aliquet vel velit nec, consectetur ornare libero. Nunc luctus, arcu id tristique tincidunt, nulla sem dignissim lectus, eu tempus enim ligula eu eros. Maecenas commodo dolor at leo aliquet, non eleifend tellus porttitor. Nam id nulla scelerisque, vulputate massa non, mollis diam. Sed porta quam sit amet tellus tincidunt lobortis. Ut tincidunt nulla sit amet erat porta sollicitudin eu ut tellus.'
    },
    {
        question: 'Question 2',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis arcu, aliquet vel velit nec, consectetur ornare libero. Nunc luctus, arcu id tristique tincidunt, nulla sem dignissim lectus, eu tempus enim ligula eu eros. Maecenas commodo dolor at leo aliquet, non eleifend tellus porttitor. Nam id nulla scelerisque, vulputate massa non, mollis diam. Sed porta quam sit amet tellus tincidunt lobortis. Ut tincidunt nulla sit amet erat porta sollicitudin eu ut tellus.'
    },
    {
        question: 'Question 3',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis arcu, aliquet vel velit nec, consectetur ornare libero. Nunc luctus, arcu id tristique tincidunt, nulla sem dignissim lectus, eu tempus enim ligula eu eros. Maecenas commodo dolor at leo aliquet, non eleifend tellus porttitor. Nam id nulla scelerisque, vulputate massa non, mollis diam. Sed porta quam sit amet tellus tincidunt lobortis. Ut tincidunt nulla sit amet erat porta sollicitudin eu ut tellus.'
    },
    {
        question: 'Question 4',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis arcu, aliquet vel velit nec, consectetur ornare libero. Nunc luctus, arcu id tristique tincidunt, nulla sem dignissim lectus, eu tempus enim ligula eu eros. Maecenas commodo dolor at leo aliquet, non eleifend tellus porttitor. Nam id nulla scelerisque, vulputate massa non, mollis diam. Sed porta quam sit amet tellus tincidunt lobortis. Ut tincidunt nulla sit amet erat porta sollicitudin eu ut tellus.'
    },
]

export default Accordion