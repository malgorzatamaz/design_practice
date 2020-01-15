/**
 * @file Project description which renders below the individual filename and therefore isn't a real overview blurb.
 *
 * @version 0.1
 * @author Greg Pettit
 * @copyright 2015
 *
 */

import React, { useState } from "react"

import ErrorBoundary from "./components/ErrorBoundary"
import Features from "./components/Features"
import Header from "./components/Header"
import MainSubscription from "./components/Subscription/MainSubscription"
import SubscriptionBar from "./components/Subscription/SubscriptionBar"
import Referrals from "./components/Referrals"
import Gradient from "./components/Gradient"

import LanguageContext from "./utils/LanguageContext"

/**
 *Main component
 */
const App = () => {
  const [language, setLanguage] = useState("en")

  return (
    <LanguageContext.Provider value={language}>
      <Gradient>
        <ErrorBoundary>
          <Header setLanguage={setLanguage} />
        </ErrorBoundary>
        <MainSubscription />
      </Gradient>
      <Features />
      <SubscriptionBar />
      <Referrals />
    </LanguageContext.Provider>
  )
}

export default App
