import React from 'react'
import NavBarItem from './NavBarItem'
function NavBar({content}) {
  return (
    <div className='Nav'>
        {content.map((section, i) =>
        {
            return <NavBarItem key = {i} content = {section}/>
        })}
    </div>
  )
}

export default NavBar