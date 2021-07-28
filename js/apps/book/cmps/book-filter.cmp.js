export default {
    template: `
    <section class="search-filter-container" > 
      <section class="book-filter">
          <input type="text" @input="setFilter" placeholder="Search by title...." v-model="filterBy.title">
          <input type="number" @input="setFilter" placeholder="Min Price" v-model.number="filterBy.fromPrice">
          <input type="number" @input="setFilter" placeholder="Max Price" v-model.number="filterBy.toPrice">
        </section>
        <div title="Go to search page" class="to-search-btn" @click="toSearchPage"> Click here for searching a specific book on web</div>
        </section>
      `,
    data() {
      return {
        filterBy: {
          title: '',
          fromPrice: 0,
          toPrice: Infinity,
        },
      };
    },
    methods: {
      setFilter() {
        this.$emit('filtered', { ...this.filterBy });
      },
      toSearchPage(){
        this.$router.push(`/searchBook/`);

      }
    },
  };
  