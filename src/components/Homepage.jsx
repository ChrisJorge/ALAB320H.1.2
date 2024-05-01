import React from 'react'
import Heading from './Heading'
import NavBar from './NavBar'
import ContentSection from './ContentSection'
function Homepage({title, topNav, contentSection1}) {
  return (
    <div>
        <Heading content = {title}/>
        <NavBar content = {topNav}/>
        <ContentSection content = {contentSection1}/>

    </div>
  )
}

export default Homepage