import { ReactComponent as Logo } from "../../assets/icons/doplr.svg"
import React from "react"

import "./Header.sass"

const Header = () => {
  return (
    <div className="header">
      <Logo className="header__icon" />
      <a href="#features" className="header__link">
        Features
      </a>
      <a href="#apps" className="header__link">
        Apps
      </a>
      <a href="#pricing" className="header__link">
        Pricing
      </a>
      <a href="#knowledge" className="header__link">
        Knowledge Base
      </a>
      <a href="#business" className="header__link">
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
