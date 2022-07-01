import React from "react";
import { render, screen } from '@testing-library/react';
import App from "./App";

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

fit("<App />", async () => {
  render(
    <App name='React Test'/>
  )
  await sleep(122400);
  const text = screen.getByText('Learn React');
  expect(text).toBeTruthy();
});
