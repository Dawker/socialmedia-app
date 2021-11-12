import React from 'react';
import ReactDom from 'react-dom';
import { render, cleanup } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import renderer from 'react-test-renderer'

import { Button } from '../../index';

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  container.remove();
  container = null;
  cleanup()
});

// tests
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<Button />, div);
  ReactDom.unmountComponentAtNode(div);
})

it("renders button correctly", () => {
  const button = render(<Button text="click me now"></Button>)
  const buttonInstance = button.root
  expect(button.findBy({ className: "sub" }).children).toEqual(['Sub']);


})

// it("renders button correctly", () => {
//   const { getByTestId } = render(<Button text="click"></Button>)
//   expect(getByTestId("button")).toHaveTextContent("click")
// })

// it("matches snapshots", () => {
//   const tree = renderer.create(<Button text="click me now"></Button>).toJSON();
//   expect(tree).toMatchSnapshot();
// })

// it("matches snapshots 1", () => {
//   const tree = renderer.create(<Button text="click me bro"></Button>).toJSON();
//   expect(tree).toMatchSnapshot();
// })