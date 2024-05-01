import React from 'react'
import Heading from './Heading'
import NavBar from './NavBar'
function Homepage({title, topNav}) {
  return (
    <div>
        <Heading content = {title}/>
        <NavBar content = {topNav}/>

    </div>
  )
}

export default Homepage