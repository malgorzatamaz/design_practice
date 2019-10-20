import React from "react"

import Features from "./components/Features"
import Header from "./components/Header"
import MainSubscription from "./components/Subscription/MainSubscription"
import SubscriptionBar from "./components/Subscription/SubscriptionBar"
import Referrals from "./components/Referrals"
import Gradient from "./components/Gradient"

const App = () => {
  return (
    <React.Fragment>
      <Gradient>
        <Header />
        <MainSubscription />
      </Gradient>
      <Features />
      <SubscriptionBar />
      <Referrals />
    </React.Fragment>
  )
}

export default App
