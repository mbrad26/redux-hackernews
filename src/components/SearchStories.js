import React, { useState } from 'react';
import { connect } from 'react-redux';
import { doFetchStories } from '../actions/story';
import Button from './Button';

// import { Component } from 'react';
//
// class SearchStories extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       query: '',
//     };
//   }
//
//  onSubmit = event => {
//     const { query } = this.state;
//     if (query) {
//       this.props.onFetchStories(query)
//       this.setState({ query: '' });
//     }
//     event.preventDefault();
//   }
//
//  onChange = event => {
//     const { value } = event.target;
//     this.setState({ query: value });
//   }
//
// render() {
//     return (
//       <form onSubmit={this.onSubmit}>
//         <input
//           type="text"
//           value={this.state.query}
//           onChange={this.onChange}
//         />
//         <Button type="submit">
//           Search
//         </Button>
//       </form>
//     );
//   }
// }


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
