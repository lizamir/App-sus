export default {
    props: ['info', 'edit'],
    template: `
        <section class = "note-txt">
            <template v-if="!edit">
            <h3>{{info.title}}</h3>
            <h4>{{info.txt}}</h4>
            </template>

            <template v-else class= "note-edit-container">
            <input ref="title" class="title" type="text" v-model="info.title" @keyup.enter="saveEdit">
            </template>
        </section>
        `,

    methods: {
        saveEdit() {
            this.$emit('editTxt', false, this.txt)
        }
    },
    mounted() {
        if (this.isEdit) this.$refs.title.focus()
    }
}