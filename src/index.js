import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import store from './store';
import './index.css';

console.log(store.getState());

ReactDOM.render(
    <App stories={store.getState().storyState} onArchive={() => {}}/>,
  document.getElementById('root')
);
