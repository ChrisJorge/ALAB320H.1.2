import React from 'react'

function ContentSection({content}) {
  return (
    <div className='Section'>
        <p className="date">{content[0]}</p>
        <h1 className="SectionHead">{content[1]}</h1>
        <img src= {content[2]} alt="" className='picture'/>
        <div className="text">
            {content[3]}  
            <p className="mainText">{content[4]}</p>
        </div>
        <div className="continue">
            <h3>Continues...</h3>
        </div>
        <div className="hr">
            <hr/>
        </div>
    </div>
  )
}

export default ContentSection