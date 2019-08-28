import React from "react"

import guy from "../../assets/images/guy.jpg"
import { ReactComponent as LeftQuote } from "../../assets/icons/left-quote.svg"
import { ReactComponent as RightQuote } from "../../assets/icons/right-quote.svg"

import "./Referral.sass"

const Referral = () => {
  return (
    <div className="referral">
      <div className="referral__content">
        <LeftQuote className="referral__left-quote" />
        <p className="referral__title">Great for sharing screenshots</p>
        <div className="referral__description">
          Droplr is the simplest, most reliable, universal way to share a file
          with anyone anywhere. I can't imagine a quicker way to exchange a
          screenshot than Droplr.
        </div>
        <div className="referral__author">Des Traynor</div>
        <div className="referral__author-info">Co-Founder @ Intercom</div>
        <RightQuote className="referral__right-quote" />
      </div>
      <img className="referral__avatar" alt="referral avatar" src={guy} />
    </div>
  )
}

export default Referral
