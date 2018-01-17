import './search.css';

var search = instantsearch({
  appId: 'latency',
  apiKey: '6be0576ff61c053d5f9a3225e2a90f76',
  indexName: 'movies',
  searchParameters: {
    hitsPerPage: 9
  }
});

search.addWidget(
  instantsearch.widgets.hits({
    container: document.querySelector('#movies'),
    templates: {
      item: '{{{_highlightResult.title.value}}}'
    }
  })
);

search.addWidget(
  instantsearch.widgets.searchBox({
    container: document.querySelector('#searchBox'),
    placeholder: 'Search for movies',
    autofocus: false /* Only to avoid live preview taking focus */
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: document.querySelector('#genre'),
    attributeName: 'genre'
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: document.querySelector('#pagination')
  })
);

search.start();
