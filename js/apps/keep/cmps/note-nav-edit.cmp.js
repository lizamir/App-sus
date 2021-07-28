export default {
    template: `
    <section class="note-nav-edit"> 
        <i class="fas fa-palette" @click="toggleBgc">

        <div v-show="color" id="colorList">
            <button @click="setBgC('#28527a')" class="bgc bgc-1" ></button>
            <button @click="setBgC('#8ac4d0')" class="bgc bgc-2" ></button>
            <button @click="setBgC('#d0e8f2')" class="bgc bgc-3" ></button>
            <button @click="setBgC('#f4d160')" class="bgc bgc-4" ></button>
            <button @click="setBgC('#fbeeac')" class="bgc bgc-5" ></button>
        </div>
        </i>
        
        <i class="fas fa-thumbtack" @click="pinned"></i>

        <i class="fas fa-edit" title="edit" @click="doneEdit"></i>
        
        <i class="fas fa-trash-alt" title="delete" @click="deleteNoteById"></i>
        
        
    
    </section>
    `,
    data() {
        return {
            color: false,
        };
    },
    methods: {

        toggleBgc() {
            this.color = !this.color;
        },

        doneEdit() {
            this.$emit('edit')
        },

        deleteNoteById() {
            this.$emit('deleteNote');
        },
        setBgC(color) {
            this.$emit('setBgC', color)
        },
        pinned() {
            this.$emit('doPinned')
        }

    },
};