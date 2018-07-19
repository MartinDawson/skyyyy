import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('should render without crashing', () => {
  const div = document.createElement('div');

  const props = {
    getChatLog: jest.fn(),
    getUsers: jest.fn(),
    mappedMessages: [],
  }

  ReactDOM.render(
    <App.WrappedComponent {...props} />, div
  );
});
