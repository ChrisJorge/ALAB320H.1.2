import React from 'react'

function NavBarItem({content}) {
  return (
    <div>
        <a href=""><p className="navBarContent">{content}</p></a>
    </div>
  )
}

export default NavBarItem