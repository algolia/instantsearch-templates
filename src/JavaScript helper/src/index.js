import './index.css';

import algoliasearch from 'algoliasearch';
import algoliasearchHelper from 'algoliasearch-helper';
const client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
const helper = algoliasearchHelper(client, 'instant_search');
helper.on('result', res => {
  // eslint-disable-next-line no-console
  console.log(res);
});
helper.setQueryParameter('query', 'music');
helper.search();
