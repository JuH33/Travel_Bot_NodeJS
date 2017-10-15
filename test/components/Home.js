import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import  Home  from "../../src/components/Home";

// unit tests for the Home component
describe('Home component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const wrapper = shallow(<Home />);
      assert.equal(1, wrapper.length)
    });
  });
});
