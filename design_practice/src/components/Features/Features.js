import Feature from "./Feature"
import React from "react"

import { ReactComponent as CloudIcon } from "../../assets/icons/cloud.svg"
import { ReactComponent as CursorIcon } from "../../assets/icons/cursor.svg"
import { ReactComponent as RocketIcon } from "../../assets/icons/rocket.svg"
import { ReactComponent as TileIcon } from "../../assets/icons/tiles.svg"
import texts from "./feturesTexts"

import "./Features.sass"

const Features = () => {
  return (
    <div className="features">
      <div className="features__title">
        <span className="bold-text">Droplr</span> lets you
      </div>
      <div className="features__subtitle">
        Cut down on complexity and have the job done, simply
      </div>
      <div className="features__content">
        <Feature
          renderIcon={() => <CursorIcon className="feature__icon -green" />}
          title={texts.title1}
          subtitle={texts.description1}
        />
        <Feature
          renderIcon={() => <RocketIcon className="feature__icon -red" />}
          title={texts.title2}
          subtitle={texts.description2}
        />
        <Feature
          renderIcon={() => <CloudIcon className="feature__icon -blue" />}
          title={texts.title3}
          subtitle={texts.description3}
        />
        <Feature
          renderIcon={() => <TileIcon className="feature__icon -yellow" />}
          title={texts.title4}
          subtitle={texts.description4}
        />
      </div>
      <a href="#features">Browse all awesome Droplr features</a>
    </div>
  )
}

export default Features
