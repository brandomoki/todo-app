import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import SettingsProvider, { SettingsContext } from './settingsContext';

describe('Mode Context', () => {
  test('provides initial state from context', () => {
    render(
      <SettingsProvider>
      <SettingsContext.Consumer>
        {
          ({ showCompleted, pageItems, sort }) => (
            <ul>
              <li data-testid="show-completed">{showCompleted.toString()}</li>
              <li data-testid="page-items">{pageItems}</li>
              <li data-testid="sort">{sort}</li>
            </ul>
          )
        }
      </SettingsContext.Consumer>
    </SettingsProvider>
    );

    let completedLi = screen.getByTestId('show-completed');
    let pageItemLi = screen.getByTestId('page-items');
    let sortLi = screen.getByTestId('sort');

    expect(completedLi).toHaveTextContent('false');
    expect(pageItemLi).toHaveTextContent('3');
    expect(sortLi).toHaveTextContent('difficulty');
  })
})