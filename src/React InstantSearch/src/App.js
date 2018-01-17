import React, { Component } from 'react';
import {InstantSearch, Hits, SearchBox, RefinementList, Pagination, Highlight} from 'react-instantsearch/dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Algolia <a href="https://community.algolia.com/react-instantsearch/">React InstantSearch</a> template</h1>
        <p>Fully working React InstantSearch template for creating test cases, examples and demos.</p>
        <p><b>Start editing the App.js file</b> and see changes happening!</p>
        <p>Available on CodeSandbox at <a href="https://codesandbox.io/s/github/algolia/instantsearch-templates/tree/master/src/React%20InstantSearch">https://codesandbox.io/s/github/algolia/instantsearch-templates/tree/master/src/React%20InstantSearch</a></p>
        <h2>Products</h2>
        <InstantSearch
          appId="latency"
          apiKey="6be0576ff61c053d5f9a3225e2a90f76"
          indexName="insant_search"
          searchParameters={{
            hitsPerPage: 8
          }}
        >
          <SearchBox />
          <div className="twoColumns">
            <RefinementList attributeName="brand" />
            <Hits hitComponent={Hit} />
          </div>
          <div style={{textAlign: 'center'}}><Pagination /></div>
        </InstantSearch>
      </div>
    );
  }
}

function Hit(props) {
  return <div><Highlight attributeName="title" hit={props.hit} /></div>;
}

export default App;
