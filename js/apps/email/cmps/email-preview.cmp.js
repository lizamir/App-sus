// import {bookDetailsService} from '../services/bookDetails-service.js'
// import {eventBus} from '../services/event-bus.service.js';

export default {
  props: ['email'],
  template: `
  
    <section  class="email-preview-container"  :class="isRead" >
      
      <img title="Mark As Starred" @click.stop="toggleStarred" v-if="email.starred" class="star-img" src="./images/star-shallow.png"> 
      <img title="Mark As UnStarred" @click.stop="toggleStarred"  v-else class="star-img" src="./images/star-regular.png"> 
        <p class="email-sender"> {{email.sender}}</p>
        <p class="email-pre-container"> <span class="email-subject"> {{email.subject}} </span> <span class="body-introduction">{{introduction}}</span></p>
        <p class="email-date"> {{convertDate}}</p>
        <div @click="markAsRead(email.id) " class="email-preview-container">  
        
        </div> 
    </section>
    `,
  methods: {
    toggleStarred() {
      this.$emit('starredToggle', this.email.id);

      
    },
    markAsRead(id) {
      this.$emit('markRead', id);
    },
  },

  computed: {
    isRead() {
      if (this.email.isRead) return 'isRead';
      else return 'Unread';
    },
    convertDate() {
      var date = this.email.sentAt;
      date = date.substring(0, 10).split('-');
      date = date[1] + '-' + date[2] + '-' + date[0];
      return date;
    },
    introduction() {
      const txt = this.email.body;
      return txt.substr(0, 25) + '...';
    },
  },
};
