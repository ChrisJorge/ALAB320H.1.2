import React from 'react'
import Heading from './Heading'
import NavBar from './NavBar'
import ContentSection from './ContentSection'
function Homepage({title, topNav, contentSection1, contentSection2, bottomNav}) {
  return (
    <div>
        <Heading content = {title}/>
        <NavBar content = {topNav}/>
        <ContentSection content = {contentSection1}/>
        <ContentSection content = {contentSection2}/>
        <NavBar content = {bottomNav}/>
        <p className="tag">@ 2013 Valet Industries, Inc</p>

    </div>
  )
}

export default Homepage