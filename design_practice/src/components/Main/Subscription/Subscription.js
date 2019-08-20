import React from "react"

import "./Subscription.sass"

const Subscription = () => {
  return (
    <div className="subscription">
      <div className="subscription__title">
        Communicate. Collaborate. Complete.
      </div>
      <div className="subscription__subtitle">
        The remote collaboration tool to help you communicate effectively & work
        productively
      </div>
      <div className="subscription__form">
        <label>Email address</label>
        <input type="text" />
        <div>
          <div>
            <div>
              Try droplr <span>PRO for free for 30 days</span>
            </div>
            <div>
              No credit card needed. <span>Privacy policy</span>
            </div>
          </div>
          <a href="#start">Get started</a>
        </div>
      </div>
    </div>
  )
}

export default Subscription
