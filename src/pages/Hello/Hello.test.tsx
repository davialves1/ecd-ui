import React from 'react';
import { describe } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { i18n } from '../../i18n';
import Hello from './Hello';
import '@testing-library/jest-dom';

describe('Hello World test', () => {
  beforeEach(() => {
    i18n.init();
  });

  test('Component is rendered', async () => {
    const { container } = render(<Hello />);
    expect(container).toBeTruthy;
  });

  test('Title <h1> is rendered', () => {
    render(<Hello />);
    const h1 = screen.findByRole('h1');
    expect(h1).toBeTruthy;
  });
});
