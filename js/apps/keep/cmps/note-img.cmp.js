export default {
    props: ['info', 'edit'],
    template: `
        <section class="note-img" > 
            <template v-if="!edit">
            <h3>{{info.title}}</h3>
            <img :src="info.url" alt=""> 
            </template> 
            
            <template v-else class= "note-img-edit">
            <input ref="title" class="title" type="text" v-model="info.title" @keyup.enter="saveEdit">
            <input  type="text" class="change-url" @keyup.enter="saveEdit" v-model="url">
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

    }
}