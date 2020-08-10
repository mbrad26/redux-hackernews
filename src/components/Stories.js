import React from 'react';
import { connect } from 'react-redux';
import { doArchiveStory } from '../actions/archive';
import { getReadableStories } from '../selectors/story';
import Story from './Story';
import StoriesHeader from './StoriesHeader.js';
import './Stories.css';

const COLUMNS = {
  title: {
    label: 'Title',
    width: '40%',
  },
  author: {
    label: 'Author',
    width: '30%',
  },
  comments: {
    label: 'Comments',
    width: '10%',
  },
  points: {
    label: 'Points',
    width: '10%',
  },
  archive: {
    width: '10%',
  },
};

const mapStateToProps = state => ({
  stories: getReadableStories(state),
});

const mapDispatchToProps = dispatch => ({
  onArchive: id => dispatch(doArchiveStory(id)),
});

const Stories = ({ stories, onArchive }) =>
  <div className='stories'>
    <StoriesHeader columns={COLUMNS} />

    {(stories || []).map(story =>
        <Story
          key={story.objectID}
          story={story}
          columns={COLUMNS}
          onArchive={onArchive}
        />
      )
    }
  </div>

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
