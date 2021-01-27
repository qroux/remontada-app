import React from "react";
import renderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";
import { LoginScreen } from "../../../src/screens/LoginScreen";

let realUseContext;
let useContextMock;
// Setup mock
beforeEach(() => {
  realUseContext = React.useContext;
  useContextMock = React.useContext = jest.fn();
});
// Cleanup mock
afterEach(() => {
  React.useContext = realUseContext;
});

test("mock hook", () => {
  useContextMock.mockReturnValue("Test Value");
  const element = new ShallowRenderer().render(<MyComponent />);
  expect(element.props.children).toBe("Test Value");
});

describe("<LoginScreen />", () => {
  it("has 1 child", async () => {
    const tree = renderer.create(<LoginScreen />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
