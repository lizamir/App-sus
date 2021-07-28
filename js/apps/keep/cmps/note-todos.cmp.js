export default {
    props: ['info', 'edit'],
    template: `
     <section class="note-todos" > 
        <template v-if="!edit">
            <h3>{{info.title}}</h3>
            <ul class="todos-ul">
            <li v-for="(todo, idx) in this.info.todos"  :class="{marked: todo.doneAt}":key="todo.id">
            <span class=""><input type="checkbox"></span>{{todo.txt}}
            </li>
            </ul>
            </template> 
            <template v-else class= "note-todos-edit">
            <input ref="title" class="title" type="text" v-model="info.title" @keyup.enter="saveEdit">
            <li v-for="(todo, idx) in this.info.todos" :class="{marked: todo.doneAt}"  :key="todo.id">
                <input type="text" v-model="todo.txt">
            </li>
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