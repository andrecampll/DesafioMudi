/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable import/first */
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import App from './App';

const wait = (amount = 0): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, amount));
};

const actWait = async (amount = 0): Promise<void> => {
  await act(async () => {
    await wait(amount);
  });
};

describe('Dashboard', () => {
  it('should be able to navigate to the detail page', async () => {
    const { getByText } = render(<App />);

    await actWait(500);

    fireEvent.click(getByText('Agenda - Anderson Silva'));

    await actWait();

    expect(window.location.pathname).toEqual('/detail');
  });
});
