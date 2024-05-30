import React, { useState } from 'react';

import plus from '../../assets/help/plus.png';
import cross from '../../assets/help/cross.png';

const Question = ({question, answer}) => {
  const [showAns, setShowAns] = useState(false);
  
  const toggleHandler = () => {
    setShowAns(prevState => !prevState);
  }

  return (
    <div className='flex flex-col max-w-[550px] mb-8'>
        <div>
            <h3 className='flex justify-between gap-[166px] text-1xl font-medium'>{question} <button onClick={toggleHandler}>{showAns ? <img src={cross} /> : <img src={plus} /> }</button></h3>
            {showAns && <p>{answer}</p>}
        </div>
    </div>
  )
}

export default Question;