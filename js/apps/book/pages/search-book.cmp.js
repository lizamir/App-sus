import {serviceSearch} from '../services/search-book.service.js'
import { bookService } from '../services/book.service.js';
import {eventBus} from '../../../service/event-bus.service.js';

export default {
    template:`
    <section class="search-book book-app">
        <h1 class="search-title">search-book</h1>
        <input class="search-input" @change="setSearch" v-model="searchInput" type="text" placeholder="Search...">  
        <ul class="suggest-list">
        <li v-for="(book ,idx) in books" :key="idx" class="book-suggest">
        <div @click="addToList(book)" class="add-book-btn"  > {{book.title}}</div>
        
        </li>
        </ul>

      
              
    </section>
    `,

    data(){
        return {
            searchInput: '',
            books:null
        }
    },
    methods:{
        setSearch(){
         serviceSearch.getBooks(this.searchInput)
            .then(booksReceived =>
             this.books = booksReceived)
         
        },
        addToList(book){
            bookService.save(book)
            .then(() =>{
                const msg = {
                    txt:'Book added Succesfully',
                    type: 'success'
                }
                eventBus.$emit('show-msg' ,msg)
                this.$router.push(`/book/${book.id}`)
                
            }).catch((err)=>{
                const msg = {
                    txt:'Try again later',
                    type: 'error'
                }
                eventBus.$emit('show-msg' ,msg)
            })
           
        }
    },

}
