import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { STORY_ARCHIVE } from './constants/actionTypes';
import { getReadableStories } from './selectors/story';
import store from './store';
import './index.css';

console.log(store.getState());

const render = () => {
  ReactDOM.render(
      <App
        stories={getReadableStories(store.getState())}
        onArchive={id => store.dispatch({ type: STORY_ARCHIVE, id })}
      />,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();
