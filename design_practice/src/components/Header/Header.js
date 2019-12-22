import React, { useState } from "react"

import { ReactComponent as Logo } from "../../assets/icons/doplr.svg"
import { ReactComponent as Hamburger } from "../../assets/icons/burger.svg"

import LanguageContext from "../../utils/LanguageContext"

import "./Header.sass"

function Header(props) {
  const [menuOpened, setMenuOpened] = useState(0)

  //TODO does not work
  // const user = null

  // setTimeout(() => {
  //   user.setName()
  // }, 1000)

  return (
    <LanguageContext.Consumer>
      {language => (
        <header className="header">
          <Logo className="header__icon" />
          <div className="header__menu">
            <button
              className={`header__hamburger ${menuOpened ? "-opened" : ""}`}
              onClick={() => setMenuOpened(!menuOpened)}
            >
              <Hamburger />
            </button>
            <div className={`header__menu-list ${menuOpened ? "-opened" : ""}`}>
              <a href="#features" className="header__link">
                {language === "en" ? "Features" : "Funkcje"}
              </a>
              <a href="#apps" className="header__link">
                {language === "en" ? "Apps" : "Aplikacje"}
              </a>
              <a href="#pricing" className="header__link">
                {language === "en" ? "Pricing" : "Ceny"}
              </a>
              <a
                href="#knowledge"
                onClick={() => {
                  throw new Error("Page not found!")
                }}
                className="header__link"
              >
                {language === "en" ? "Knowledge Base" : "Baza wiedzy"}
              </a>
              <a href="#business" className="header__link">
                {language === "en" ? "Business" : "Biznes"}
              </a>
              <button href="#log_in" className="button">
                {language === "en" ? "LOG IN" : "ZALOGUJ SIĘ"}
              </button>
              <button className="button -accent">
                {language === "en" ? "SIGN UP" : "ZAREJESTRUJ SIĘ"}
              </button>
              <a href="#en" onClick={() => props.setLanguage("en")}>
                en
              </a>
              <a href="#pl" onClick={() => props.setLanguage("pl")}>
                pl
              </a>
            </div>
          </div>
        </header>
      )}
    </LanguageContext.Consumer>
  )
}

// Header.contextType = LanguageContext

export default Header
