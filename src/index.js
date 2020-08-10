import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { doArchiveStory } from './actions/archive';
import { getReadableStories } from './selectors/story';
import store from './store';
import './index.css';

console.log(store.getState());

const render = () => {
  ReactDOM.render(
      <App
        stories={getReadableStories(store.getState())}
        onArchive={id => store.dispatch(doArchiveStory(id))}
      />,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();
