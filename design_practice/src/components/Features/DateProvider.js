import React from "react"

const DateProvider = props => {
  const dateNow = Date.now()
  const date = {}
  date.month = dateNow.getMonth() + 1
  date.day = dateNow.getDate()
  date.year = dateNow.getFullYear()

  return <React.Fragment>{props.render(date)}</React.Fragment>
}

export default DateProvider
