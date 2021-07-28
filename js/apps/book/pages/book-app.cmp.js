import { bookService } from '../services/book.service.js';
import bookFilter from '../cmps/book-filter.cmp.js';
import bookList from '../cmps/book-list.cmp.js';
import { eventBus } from '../../../service/event-bus.service.js';

export default {
  template: `
  
    <section class="book-app"> 
    <book-filter @filtered="setFilter"></book-filter>
    <book-list v-if="!selectedBook" :books="booksToShow" @selected="selectBook"></book-list>
    </section>

    `,

  data() {
    return {
      books: bookService.query(),
      selectedBook: null,
      filterBy: null,
    };
  },

  methods: {
    loadBooks() {
      bookService.query().then((books) => (this.books = books));
    },
    selectBook(book) {
      this.selectedBook = book;
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    postBook(book) {
    },
  },
  computed: {
    booksToShow() {
      if (!this.filterBy) return this.books;
      var searchStr = this.filterBy.title;
      searchStr = searchStr.toLowerCase();
      const bookToShow = this.books.filter((book) => {
        return (
          !this.filterBy.toPrice ||
          (this.filterBy.fromPrice < book.listPrice.amount &&
            this.filterBy.toPrice > book.listPrice.amount &&
            book.title.toLowerCase().includes(searchStr))
        );
      });
      return bookToShow;
    },
  },
  created() {
    this.loadBooks();
    eventBus.$on('bookSent', this.postBook);
  },

  destroyed() {
    // eventBus.$off('bookSent', this.postBook);
  },

  components: {
    bookList,
    bookFilter,
  },
};
