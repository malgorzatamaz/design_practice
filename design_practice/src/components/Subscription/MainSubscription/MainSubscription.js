import React from "react"
import movie from "../../../assets/images/movie.jpg"

import "./MainSubscription.sass"

const MainSubscription = () => {
  return (
    <div className="subscription">
      <div className="subscription__section">
        <img
          className="subscription__image"
          alt="should show movie"
          src={movie}
        />
      </div>
      <div className="subscription__section">
        <div className="subscription__title bold-text">
          Communicate.
          <br />
          Collaborate. Complete.
        </div>
        <div className="subscription__subtitle">
          The remote collaboration tool to help you communicate effectively &
          work productively
        </div>
        <div>
          <label className="form-label">Email address</label>
          <input className="form-input" type="email" />
          <div className="subscription__actions">
            <div>
              <div>
                Try droplr
                <span className="bold-text"> PRO for free for 30 days</span>
              </div>
              <div>
                No credit card needed. <a href="#policy">Privacy policy</a>
              </div>
            </div>
            <button className="button -primary" href="#start">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSubscription
