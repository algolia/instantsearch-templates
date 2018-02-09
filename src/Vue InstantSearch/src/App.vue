<template>
  <div class="container">
    <h1>
      Algolia
      <a href="https://community.algolia.com/vue-instantsearch/">
        Vue InstantSearch
      </a>
      template
    </h1>
    <p>
      Fully working Vue InstantSearch template for creating test cases,
      examples and demos.
    </p>
    <p>
      <b>Start editing the App.vue file</b> and see changes happening!
    </p>
    <p>
      Available on CodeSandbox at
      <a href="https://codesandbox.io/s/github/algolia/instantsearch-templates/tree/master/src/Vue%20InstantSearch">
        https://codesandbox.io/s/github/algolia/instantsearch-templates/tree/master/src/Vue%20InstantSearch
      </a>
    </p>
    <h2>Products</h2>
    <ais-index
      app-id="latency"
      api-key="6be0576ff61c053d5f9a3225e2a90f76"
      index-name="instant_search"
      :query-parameters="{
        hitsPerPage: 8
      }"
    >
      <ais-search-box></ais-search-box>
      <div class="twoColumns">
        <div>
          <ais-refinement-list attribute-name="brand"></ais-refinement-list>
        </div>
        <ais-results class="ais-Hits__root">
        <template slot-scope="{ result }">
          <div>
            <ais-highlight :result="result" attribute-name="name"></ais-highlight>
          </div>
        </template>
      </ais-results>
      </div>
      <div :style="{ textAlign: 'center' }">
        <ais-pagination></ais-pagination>
      </div>
    </ais-index>
  </div>
</template>

<style>
body { font-family: helvetica, arial, sans-serif; }

em { background: cyan; font-style: normal }

.container {
  max-width: 1140px;
  margin: 0 auto;
}

.twoColumns {
  display: grid;
  grid-template-columns: 20% 75%;
  grid-gap: 5%
}
.ais-Hits__root {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 5%;
  margin-bottom: 1em;
}
.ais-Hits__root div {
  background: #efefef;
  margin-bottom: .5em;
  padding: .5em;
  min-height: 100px;
}
.ais-SearchBox__root {
  margin-bottom: 2em;
}
.ais-Pagination__root {
  text-align:center;
  margin: 0 auto;
}
</style>
