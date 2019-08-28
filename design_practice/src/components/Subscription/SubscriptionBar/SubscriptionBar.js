import React from "react"

import "./SubscriptionBar.sass"

const SubscriptionBar = () => {
  return (
    <section className="subscription-bar">
      <div>
        <div className="subscription-bar__description">
          Try <span className="bold-text">Droplr</span> for
          <span className="bold-text"> 30 days for FREE </span>
          and check possiblities of Droplr PRO
        </div>
      </div>
      <div className="subscription-bar__form-wrapper">
        <label className="form-label">Email address</label>
        <div className="subscription-bar__form">
          <input className="form-input" type="email" />
          <button className="button -accent" href="#start">
            Get started
          </button>
        </div>
        <a href="#policy">Privacy policy</a>
      </div>
    </section>
  )
}

export default SubscriptionBar
