import React from "react";
import { shallow, mount } from "enzyme";

import Header from "./components/Header";

const { axe, toHaveNoViolations } = require("jest-axe");

expect.extend(toHaveNoViolations);

describe("Header tests", () => {
  test("render", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should demonstrate this matcher`s usage", async () => {
    const render = () => '<img src="#"/>';

    // pass anything that outputs html to axe
    const html = render();

    expect(await axe(html)).toHaveNoViolations();
  });

  test("accesibility", async () => {
    const wrapper = mount(<Header />);
    expect(await axe(wrapper.getDOMNode())).toHaveNoViolations();
  });
});
