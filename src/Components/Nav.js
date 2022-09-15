import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <nav>
            <Link to = "/"><button type = "button">Home</button></Link>
            <Link to = "/about-us"><button type = "button">About Us</button></Link>
            <Link to = "/blog"><button type = "button">Blog</button></Link>
            <Link to = "/products"><button type = "button">Products</button></Link>
            <Link to = "/careers"><button type = "button">Careers</button></Link>
        </nav>
</div>
  )
}

export default Nav