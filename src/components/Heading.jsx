import React from 'react'

function Heading({content}) {
  return (
    <div className='HeadingContainer'>
        <h1 className="MainTitle">{content[0]}</h1>
        <h2 className="secondaryTitle">{content[1]}</h2> 
    </div>
  )
}

export default Heading