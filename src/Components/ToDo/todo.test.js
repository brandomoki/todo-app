import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ToDo from './index';
import SettingsProvider, { SettingsContext } from '../../Context/Settings/settingsContext';

describe('ToDo Component Tests', () => {
  test('render a header element as expected', () => {
    render(
      <SettingsProvider>
        <ToDo />
      </SettingsProvider>
    );

    let h1 = screen.getByTestId('todo-h1');

    expect(h1).toBeInTheDocument();

  })
})
