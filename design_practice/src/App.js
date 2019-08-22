import React from "react"

import Features from "./components/Features"
import Header from "./components/Header"
import MainSubscription from "./components/Subscription/MainSubscription"
import SubscriptionBar from "./components/Subscription/SubscriptionBar"
import Referrals from "./components/Referrals"

const App = () => {
  return (
    <React.Fragment>
      <div className="gradient-background">
        <Header />
        <MainSubscription />
      </div>
      <Features />
      <SubscriptionBar />
      <Referrals />
    </React.Fragment>
  )
}

export default App
