import React, { useState } from "react"

import Features from "./components/Features"
import Header from "./components/Header"
import MainSubscription from "./components/Subscription/MainSubscription"
import SubscriptionBar from "./components/Subscription/SubscriptionBar"
import Referrals from "./components/Referrals"

import LanguageContext from "./utils/LanguageContext"

const App = () => {
  const [language, setLanguage] = useState("en")

  return (
    <LanguageContext.Provider value={language}>
      <div className="app">
        <div className="gradient-background">
          <Header setLanguage={setLanguage} />
          <MainSubscription />
        </div>
        <Features />
        <SubscriptionBar />
        <Referrals />
      </div>
    </LanguageContext.Provider>
  )
}

export default App
