import { ReactComponent as Logo } from "../../assets/icons/doplr.svg"
import React from "react"

import "./Header.sass"

const Header = () => {
  return (
    <div className="footer">
      <Logo className="footer__icon" />
      <a href="#features" className="footer__link">
        Features
      </a>
      <a href="#apps" className="footer__link">
        Apps
      </a>
      <a href="#pricing" className="footer__link">
        Pricing
      </a>
      <a href="#knowledge" className="footer__link">
        Knowledge Base
      </a>
      <a href="#business" className="footer__link">
        Business
      </a>
      <button href="#log_in" className="button">
        LOG IN
      </button>
      <button className="button -accent">SIGN UP</button>
    </div>
  )
}

export default Header
