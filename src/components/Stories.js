import React from 'react';
import Story from './Story';
import './Stories.css';

const Stories = ({ stories }) =>
  <div className='stories'>
    {(stories || []).map(story =>
        <Story
          key={story.objectID}
          story={story}
        />
      )
    }
  </div>

export default Stories;
