import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import TaskScreen from '../src/screens/TaskScreen';
import { store } from '../src/store';

describe('TaskScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <TaskScreen />
      </Provider>
    );
    expect(getByText('Agregar nueva tarea')).toBeTruthy();
  });
});
