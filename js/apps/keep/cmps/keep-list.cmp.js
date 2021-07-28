import keepPreview from './keep-preview.cmp.js'

export default {
    props: ['keeps'],
    template: `
    <section class = "keep-list flex justify-center flex-wrap align-center">
        <div v-for="keep in keeps" :key="keep.id" class="keep-list-container" >
            <keep-preview :keep="keep" @deleteNote="deleteNote" @changeBgc="newBgc" />
        </div>
    </section>
    `,
    methods: {


        deleteNote(keepId) {
            this.$emit('deleteNote', keepId)
        },
        newBgc(colorObj) {
            this.$emit('changeColor', colorObj)
        },
      
    },

    
    components: {
        keepPreview
    }
}