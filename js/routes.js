import homePage from './pages/home-page.cmp.js';
import keepApp from './apps/keep/pages/keep-app.cmp.js';
import emailApp from './apps/email/pages/email-app.cmp.js';
import emailDetails from './apps/email/pages/email-details.cmp.js';
import emailCompose from './apps/email/pages/email-compose.cmp.js';
import bookApp from './apps/book/pages/book-app.cmp.js';
import bookDetails from './apps/book/pages/book-details.cmp.js'
import searchBook from './apps/book/pages/search-book.cmp.js'



const routes = [
  {
    path: '/',
    component: homePage,
  },
  {
    path: '/book',
    component: bookApp,
  },
  {
    path: '/keep',
    component: keepApp,
  },
  {
    path: '/email',
    component: emailApp,
  },
  {
    path: '/email/compose',
    component: emailCompose,
  },
  {
    path: '/email/:id',
    component: emailDetails,
  },
  {
    path:'/book',
    component:bookApp
},
{
    path:'/book/:bookId',
    component:bookDetails
},
{
    path:'/searchBook',
    component:searchBook
}

];

export const myRouter = new VueRouter({ routes });
