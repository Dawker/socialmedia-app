import React from 'react';
import ReactDom from 'react-dom';
import { render, cleanup, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import renderer from 'react-test-renderer'

import { Button } from '../../index';

// let container = null;

// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   cleanup() 
//   container.remove();
//   container = null;
// });

// tests


it("renders the name of the button from props", () => {
  render(<Button name="Login" />);

  const button = screen.getByTestId('button')

  expect(button).toHaveTextContent('Login')
})

it("if prop value is not provided it renders a default text of Button ", () => {
  render(<Button name="" />);

  const button = screen.getByTestId('button')

  expect(button).toHaveTextContent('Button')
})

