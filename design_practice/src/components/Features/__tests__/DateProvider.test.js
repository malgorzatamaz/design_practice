import React from "react"
import { shallow, mount } from "enzyme"

import DateProvider from "../DateProvider.js"
import Features from "../Features.js"

describe("Features renders", () => {
  const wrapper = shallow(<Features />)

  it("should render date of my birth", () => {
    const wrapperRender = wrapper.find(DateProvider).renderProp("render")({
      day: 25,
      month: 11,
      year: 1994
    })

    expect(wrapperRender.text()).toMatchSnapshot()
  })

  it("should render current date", () => {
    const today = new Date()
    const date = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    }

    const wrapperRender = wrapper.find(DateProvider).renderProp("render")(date)

    expect(
      wrapper
        .find(DateProvider)
        .dive()
        .text()
    ).toBe(`${date.day}-${date.month}-${date.year}`)
  })
})
