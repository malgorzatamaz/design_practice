import React from "react"
import movie from "../../../assets/images/movie.jpg"

import "./MainSubscription.sass"

/**
 * Subscription info */
const MainSubscription = () => {
  return (
    <section className="subscription">
      <div className="subscription__section">
        <img
          className="subscription__image"
          alt="should show movie"
          src={movie}
        />
      </div>
      <div className="subscription__section">
        <div className="subscription__title">
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
              Try droplr <b>PRO for free for 30 days</b>
              <br />
              No credit card needed. <a href="#policy">Privacy policy</a>
            </div>
            <button className="button -primary">Get started</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainSubscription
