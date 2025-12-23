import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='max-w-[85rem] mx-auto'>
      {children}
    </div>
  )
}

export default Wrapper
