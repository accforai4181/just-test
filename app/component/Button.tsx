import React from 'react'

const Button = (name) => {
  return (
    <div>
        <button className='px-4 py-1 bg-orange-700 rounded-3xl'>{name.data}</button>
    </div>
  )
}

export default Button