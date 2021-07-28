import { emailService } from '../services/email.service.js';
// import {eventBus} from '../services/event-bus.service.js';
Vue.use(VueRouter);
export default {
  name: 'emailCompose',
  template: `<section class="main-app container ">
	<form class="compose-form">
			<input v-model="to" class="input-addressee field" type="text" placeholder="Addressee" required>
			<input v-model="subject"  class="input-subject field" type="text" placeholder="Subject">
			<textarea v-model="content"  class="input-content field" placeholder="Type here" required></textarea>
      <div class="compose-btn-container"> 
        <button @click.prevnet="sendEmail" class="send-btn">Send </button>
        <button @click.prevnet="goBack" class="discard-btn">Discard </button>
      </div>
	</form>
    </section>
    `,

  data() {
    return {
      to: '',
      subject: '',
      content: '',
    };
  },
  methods: {
    sendEmail() {
      emailService
        .createSentEmail(this.to, this.subject, this.content)
        .then((email) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Message Sent',
            showConfirmButton: false,
            timer: 1200,
          });
          this.seeMsg(email.id);
        })
        .catch((err) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'opss, something went wrong, try again later',
            showConfirmButton: false,
            timer: 1200,
          });
          console.log(err);
        });
    },
    seeMsg(id) {
      this.$router.push(`/email/${id}`);
    },
    goBack() {
      this.$router.push(`/email/`);
    },
  },
  watch: {},
};
