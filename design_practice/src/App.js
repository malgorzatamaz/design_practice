import React from "react"

import Features from "./components/Features"
import Header from "./components/Header"
import MainSubscription from "./components/Subscription/MainSubscription"
import SubscriptionBar from "./components/Subscription/SubscriptionBar"
import Referrals from "./components/Referrals"

const App = () => {
  return (
    <div className="app">
      <div className="gradient-background">
        <Header />
        <MainSubscription />
      </div>
      <Features />
      <SubscriptionBar />
      <Referrals />
    </div>
  )
}

export default App
