import React, { useState } from 'react';
import { connect } from 'react-redux';
import { doFetchStories } from '../actions/story';
import Button from './Button';

const SearchStories = ({ onFetchStories }) => {
  const [query, setQuery] = useState('');
  console.log(query);

  const onSubmit = event => {
    if (query) {
      onFetchStories(query);
      setQuery('');
    }

    event.preventDefault();
  }

  const onChange = event => {
    setQuery(event.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        value={query}
        onChange={onChange}
      />
      <Button type='submit'>
        Search
      </Button>
    </form>
  )
};

const mapDispatchToProps = dispatch => ({
  onFetchStories: query => dispatch(doFetchStories(query)),
});

export default connect(null, mapDispatchToProps)(SearchStories);
