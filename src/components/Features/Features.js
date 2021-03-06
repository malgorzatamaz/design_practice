import React from "react"

import { ReactComponent as CloudIcon } from "../../assets/icons/cloud.svg"
import { ReactComponent as CursorIcon } from "../../assets/icons/cursor.svg"
import { ReactComponent as RocketIcon } from "../../assets/icons/rocket.svg"
import { ReactComponent as TileIcon } from "../../assets/icons/tiles.svg"
import texts from "./feturesTexts"

import DateProvider from "./DateProvider"
import Pokemons from "./Pokemons"
import Feature from "./Feature"

import "./Features.sass"

/** List of all available features for Doplr subscribers */
const Features = () => {
  return (
    <section id="features" className="features">
      <div className="features__title">
        <strong>Droplr</strong>lets you
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
      <div>
        Testing render props:
        <DateProvider
          render={date => {
            return (
              <span>
                {date.day}-{date.month}-{date.year}
              </span>
            )
          }}
        />
      </div>
      <hr></hr>
      <div>
        Testing request: <Pokemons />
      </div>
      <a href="#features" className="features__link">
        Browse all awesome Droplr features
      </a>
    </section>
  )
}

export default Features
