import React from "react"

import Features from "./Features"
import MainSubscription from "./Subscription/MainSubscription"
import SubscriptionBar from "./Subscription/SubscriptionBar"

const Main = () => {
  return (
    <React.Fragment>
      <MainSubscription />
      <Features />
      <SubscriptionBar />
    </React.Fragment>
  )
}

export default Main
