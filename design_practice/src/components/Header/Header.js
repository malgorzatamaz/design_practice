import React, { useState } from "react"

import { ReactComponent as Logo } from "../../assets/icons/doplr.svg"
import { ReactComponent as Hamburger } from "../../assets/icons/burger.svg"

import "./Header.sass"

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(0)

  return (
    <header className="header">
      <Logo className="header__icon" />
      <div className="header__menu">
        <button
          className={`header__hamburger ${menuOpened ? "-opened" : ""}`}
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <Hamburger />
        </button>
        <nav className={`header__menu-list ${menuOpened ? "-opened" : ""}`}>
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
          <button className="button">LOG IN</button>
          <button className="button -accent">SIGN UP</button>
        </nav>
      </div>
    </header>
  )
}

export default Header
