export default {

    props: ['info', 'edit'],
    template: `
      <section class="note-video">
        <template v-if="!edit">   
              <iframe width="240" :src="formattedUrl" ></iframe>
              <div class="content">
                  <h3>{{info.title}}</h3>
              </div>
        </template>
          <template v-else class="note-edit flex column align-center">
               <input ref="title" class="title" type="text" v-model="info.title" @keyup.enter="saveEdit">
               <input type="text" @keyup.enter="saveEdit" v-model="url">
         </template>
      </section>
            `,
    data() {
        return {
            url: this.info.url || "",
        };
    },
    methods: {
        saveEdit() {
            this.$emit('editSrc', false, this.url)
        }
    },

    mounted() {
        if (this.edit) {
            this.$refs.title.focus()
        }

    },
    computed: {
        formattedUrl() {
            return this.url.replace('watch?v=', 'embed/')
        },
    },


};