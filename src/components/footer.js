import React from 'react'
import { RiGithubLine,RiLinkedinLine,RiTwitterLine,RiWhatsappLine,RiEarthLine } from "react-icons/ri";
function Footer() {
  return (
    <div className="social">
        <ul>
            <li><a href="https://mukto.info" target="_blank"><RiEarthLine/></a></li>
            <li><a href="https://github.com/muktoapb" target="_blank"><RiGithubLine/></a></li>
            <li><a href="https://www.linkedin.com/in/muktoapb/" target="_blank"><RiLinkedinLine/></a></li>
            <li><a href="https://twitter.com/muktoapb" target="_blank"><RiTwitterLine/></a></li>
            <li><a href="https://wa.me/%2B8801776677727?text=Hi%2C%20I%20need%20your%20help!" target="_blank"><RiWhatsappLine/></a></li>
        </ul>
    </div>
  )
}

export default Footer