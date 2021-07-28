import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'
import noteVideo from './note-video.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteNavEdit from './note-nav-edit.cmp.js'
import { keepService } from '../services/keep.service.js'

export default {
    template: `
    <section  class="note-edit flex align-center justify-center">
        <div class= "edit-container flex wrap">
        <input ref="inputNote" :placeholder="place[noteType]"  v-if="newNote" v-model="newNote.info.txt" @keyup.enter.prevent="addNewNote(newNote)" />
            <div class="btn-add">
                <i class="fas fa-font"  title="Text" @click.stop="setNoteType('noteTxt')"></i>
                <i class="fas fa-camera-retro" title="Image" @click.stop="setNoteType('noteImg')"></i>
                <i class="fab fa-youtube" @click.stop="setNoteType('noteVideo')"></i>
                <i class="fas fa-list-ul" @click.stop="setNoteType('noteTodos')"></i>
            </div>
        </div>
</section>
    `,
    data() {
        return {
            noteType: 'noteTxt',
            newNote: null,
            place: {
                noteTxt: 'write something...',
                noteImg: 'Upload an image url...',
                noteTodos: 'Write here a todo list...',
                noteVideo: 'upload a video url...',

            }
        }
    },
    methods: {

        setNoteType(type) {
            this.noteType = type;
            this.newNote = keepService.getEmptyNote(this.noteType)
        },
        addNewNote(newNote) {
            keepService.addNewNote(newNote);
            this.newNote = keepService.getEmptyNote(this.noteType);
        },

    },

    mounted() {
        this.$refs.inputNote.focus()
    },

    created() {
        this.newNote = keepService.getEmptyNote("noteTxt");
    },
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        noteVideo,
        noteNavEdit,
    }
}