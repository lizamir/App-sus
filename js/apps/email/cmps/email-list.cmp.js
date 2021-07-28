import emailPreview from '../cmps/email-preview.cmp.js';
import { emailService } from '../services/email.service.js';

export default {
  props: ['emails'],
  template: ` 
      <ul class="scroll-container">
      <li v-for="email in emails" :key="email.id" class="email-preview-container">
         <email-preview @click.native="renderPreview(email.id)"  @markRead="mark"  @starredToggle="toggleStar"  :email="email"/> 
         <div class="read-delete-btn-container"> 
        <div title="Mark As UnRead"  @click="MarkUnRead(email.id)" class="unread-btn"> 📩 </div>
        <div title="Delete"  @click="showDeleteModal(email.id)" class="delete-btn"> ✖ </div>
      </div>
      </li>
    </ul>
    `,
  methods: {
    toggleStar(emailId) {
      this.$emit('starredToggle', emailId);
    },
    showDeleteModal(emailId) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$emit('deleteEmail', emailId);
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        }
      });
    },
    mark(id) {
      this.$emit('markRead', id);
    },
    MarkUnRead(id) {
      this.$emit('UnRead', id);
    },

    renderPreview(emailId) {
      this.$router.push(`/email/${emailId}`);
    },
  },

  components: {
    emailPreview,
  },
};
