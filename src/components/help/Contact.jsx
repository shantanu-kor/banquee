import React from 'react'

const Contact = ({img, contact, title}) => {
  return (
    <div className='flex mb-5'>
        <img src={img} className='mr-6' />
        <div className='flex flex-col'>
            <h3 className='font-medium'>{contact}</h3>
            <h4 className='text-sm'>{title}</h4>
        </div>
    </div>
  )
}

export default Contact;