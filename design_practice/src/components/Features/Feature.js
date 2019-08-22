import React from "react"

import "./Feature.sass"

const Feature = ({ title, subtitle, renderIcon }) => {
  return (
    <div className="feature">
      <div className="feature__tile">{renderIcon()}</div>
      <div>
        <div className="feature__title">{title}</div>
        <div className="feature__subtitle">{subtitle}</div>
      </div>
    </div>
  )
}

export default Feature
