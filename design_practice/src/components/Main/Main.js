import React from "react"
import Subscription from "./Subscription"

import movie from "../../assets/images/movie.png"

import "./Main.sass"

const Main = () => {
  return (
    <div className="main">
      <div className="main__section">
        <img className="main__image" alt="should show movie" src={movie} />
      </div>
      <div className="main__section">
        <Subscription />
      </div>
    </div>
  )
}

export default Main
