import React from "react"
import Feature from "./Feature"

import { ReactComponent as TileIcon } from "../../../assets/icons/tiles.svg"
import { ReactComponent as RocketIcon } from "../../../assets/icons/rocket.svg"
import { ReactComponent as CloudIcon } from "../../../assets/icons/cloud.svg"
import { ReactComponent as CursorIcon } from "../../../assets/icons/cursor.svg"

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
          title="Improve communication"
          subtitle="Pictures speak louder than words. Use that! Snap Screenshots
          and mark them up. Do you need to clarify a more complex
          problem? Record a Screen. Get your point across in a few clicks."
        />
        <Feature
          renderIcon={() => <RocketIcon className="feature__icon -red" />}
          title="Be more productive"
          subtitle="Don't let the lack of information slow you down. Use Droplr
          Integrations and make the flow of information seamless.
          Communicate as you go and finish your projects faster"
        />
        <Feature
          renderIcon={() => <CloudIcon className="feature__icon -blue" />}
          title="Stay organized"
          subtitle="Store your files in a cloud and have them always easily
          accessible. Create category Boards to avoid clutter. Droplr
          clean, easy to-use interface makes managing files hassle-free."
        />
        <Feature
          renderIcon={() => <TileIcon className="feature__icon -yellow" />}
          title="Collaborate effectively"
          subtitle="Empower whole teams to collaborate. Use Droplr Dashboard
          as a collaboration platform. Let others access and modify the
          content of your Boards so that everyone is up-to-speed."
        />
      </div>
      <a href="#features">Browse all awesome Droplr features</a>
    </div>
  )
}

export default Features
