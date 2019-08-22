import React from "react"

import { ReactComponent as LeftArrow } from "../../assets/icons/left-arrow.svg"
import { ReactComponent as LeftQuote } from "../../assets/icons/left-quote.svg"
import { ReactComponent as RightArrow } from "../../assets/icons/right-arrow.svg"
import { ReactComponent as RightQuote } from "../../assets/icons/right-quote.svg"
import Companies from "./Companies"
import guy from "../../assets/images/guy.jpg"

import "./Referrals.sass"

const Referrals = () => {
  return (
    <div className="referral gradient-background">
      <div className="referral__header">Find out what others makes of us:</div>
      <div className="referral__slideshow">
        <LeftArrow className="referral__arrow" />
        <div>
          <div className="referral__container">
            <LeftQuote className="referral__left-quote" />
            <p className="referral__title">Great for sharing screenshots</p>
            <div className="referral__description">
              Droplr is the simplest, most reliable, universal way to share a
              file with anyone anywhere. I can't imagine a quicker way to
              exchange a screenshot than Droplr.
            </div>
            <div className="referral__author">Des Traynor</div>
            <div className="referral__author-info">Co-Founder @ Intercom</div>
            <RightQuote className="referral__right-quote" />
          </div>
          <div className="referral__control">
            <span className="referral__indicator--active" />
            <span className="referral__indicator" />
            <span className="referral__indicator" />
          </div>
        </div>
        <img className="referral__avatar" alt="referral avatar" src={guy} />
        <RightArrow className="referral__arrow" />
      </div>
      <Companies />
    </div>
  )
}

export default Referrals
