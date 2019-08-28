import React from "react"

import { ReactComponent as LeftArrow } from "../../assets/icons/left-arrow.svg"
import { ReactComponent as RightArrow } from "../../assets/icons/right-arrow.svg"
import Referral from "./Referral"

import "./Referrals.sass"

const Referrals = () => {
  return (
    <div className="gradient-background">
      <section className="referrals">
        <div className="referrals__header">
          Find out what others makes of us:
        </div>
        <div className="referrals__slideshow">
          <LeftArrow className="referrals__arrow" />
          <Referral />
          <RightArrow className="referrals__arrow" />
        </div>
        <div className="referrals__control">
          <span className="referrals__indicator--active" />
          <span className="referrals__indicator" />
          <span className="referrals__indicator" />
        </div>
      </section>
    </div>
  )
}

export default Referrals
