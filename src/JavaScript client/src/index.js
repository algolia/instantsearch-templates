import './index.css';

import algoliasearch from 'algoliasearch';
const client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
const index = client.initIndex('instant_search');
index.search('music').then(res => {
  console.log(res);
});
