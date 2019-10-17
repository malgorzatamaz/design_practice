import React from "react"
import { shallow, mount } from "enzyme"

import DateProvider from "../DateProvider.js"
import Features from "../Features.js"

describe("Features renders", () => {
  const wrapper = shallow(<Features />).find(DateProvider)

  it("should render date of my birth", () => {
    const wrapperRender = wrapper.prop("render")
    const wrapperWithDate = mount(
      wrapperRender({ date: { day: 25, month: 11, year: 1994 } })
    )
    expect(wrapperWithDate.text()).toBe("25-11-1994")
  })

  it("should render current date", () => {
    const today = new Date()
    const date = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    }

    const wrapperRender = wrapper.prop("render")
    const wrapperWithDate = mount(
      wrapperRender({
        date
      })
    )
    expect(wrapperWithDate.text()).toBe(
      `${date.day}-${date.month}-${date.year}`
    )
  })
})
