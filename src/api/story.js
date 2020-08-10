const BASE_URL = 'http://hn.algolia.com/api/v1/search?query=';

const fetchStories = query =>
  fetch(BASE_URL + query)
    .then(response => response.json());

export { fetchStories };
