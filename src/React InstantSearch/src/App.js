import React, { Component } from 'react';
import {
  InstantSearch,
  Configure,
  Hits,
  SearchBox,
  RefinementList,
  Pagination,
  Highlight,
} from 'react-instantsearch/dom';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <details open>
          <h1>
            Algolia{' '}
            <a href="https://community.algolia.com/react-instantsearch/">
              React InstantSearch
            </a>{' '}
            template
          </h1>
          <p>
            Fully working React InstantSearch template for creating test cases,
            examples and demos.
          </p>
          <p>
            <b>Start editing the App.js file</b> and see changes happening!
          </p>
          <p>
            Available on CodeSandbox at{' '}
            <a href="https://codesandbox.io/s/github/algolia/instantsearch-templates/tree/master/src/React%20InstantSearch">
              https://codesandbox.io/s/github/algolia/instantsearch-templates/tree/master/src/React%20InstantSearch
            </a>
          </p>
        </details>
        <h2>Products</h2>
        <InstantSearch
          appId="latency"
          apiKey="6be0576ff61c053d5f9a3225e2a90f76"
          indexName="instant_search"
        >
          <Configure hitsPerPage={8} />
          <SearchBox />
          <div className="twoColumns">
            <RefinementList attribute="brand" />
            <Hits hitComponent={Hit} />
          </div>
          <div style={{ textAlign: 'center' }}>
            <Pagination />
          </div>
        </InstantSearch>
      </div>
    );
  }
}

function Hit(props) {
  return (
    <div>
      <Highlight attribute="name" hit={props.hit} />
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
