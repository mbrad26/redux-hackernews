import storyReducer from './story';

describe('story reducer', () => {
  it('adds stories to the story state', () => {
    const stories = [ 'a', 'b', 'c'];
    const action = {
      type: 'STORIES_ADD',
      stories,
    };

    const previousState = { stories: [], error: null };
    const expectedState = { stories: stories, error: null };

    const newState = storyReducer(previousState, action);

    expect(newState).toEqual(expectedState);
  });

  it('adds stories to the story state', () => {
    const error = 'error';
    const action = {
      type: 'STORIES_FETCH_ERROR',
      error,
    };

    const previousState = { stories: [], error: null };
    const expectedState = { stories: [], error: error };

    const newState = storyReducer(previousState, action);

    expect(newState).toEqual(expectedState);
  });

  it('returns state by default', () => {
    const stories = [ 'a', 'b', 'c'];
    const action = {
      type: 'UNKNOWN_ACTION',
      stories,
    };

    const previousState = { stories: [], error: null };
    const expectedState = { stories: stories, error: null };

    const newState = storyReducer(previousState, action);

    expect(newState).not.toEqual(expectedState);
    expect(newState).toEqual(previousState);
  });
});
