import { doAddStories, doFetchStories, doFetchErrorStories } from './story';

describe('story action', () => {
  it('add stories', () => {
    const stories = ['a', 'b'];
    const expectedAction = {
      type: 'STORIES_ADD',
      stories,
    };

    const action = doAddStories(stories);

    expect(action).toEqual(expectedAction);
  });

  it('fetch stories', () => {
    const query = 'redux';
    const expectedAction = {
      type: 'STORIES_FETCH',
      query,
    };

    const action = doFetchStories(query);

    expect(action).toEqual(expectedAction);
  });

  it('error fetch stories', () => {
    const error = 'error';
    const expectedAction = {
      type: 'STORIES_FETCH_ERROR',
      error,
    };

    const action = doFetchErrorStories(error);

    expect(action).toEqual(expectedAction);
  });
});
