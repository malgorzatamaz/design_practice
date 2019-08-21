import React from "react"

import "./SubscriptionBar.sass"

const SubscriptionBar = () => {
  return (
    <div className="subscription-bar">
      <div>
        <div>
          Try <span className="bold-text">Droplr</span> for
          <span className="bold-text"> 30 days for FREE </span>
          and check possiblities of Droplr PRO
        </div>
      </div>
      <div className="subscription-bar__form-wrapper">
        <div className="subscription-bar__form">
          <label>Email address</label>
          <input type="email" id="exampleFormControlInput1" />
          <a href="#policy">Privacy policy</a>
        </div>
        <button className="button -accent" href="#start">
          Get started
        </button>
      </div>
    </div>
  )
}

export default SubscriptionBar
