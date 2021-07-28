import { keepService } from '../services/keep.service.js'
import keepList from '../cmps/keep-list.cmp.js'
import keepAddNote from "../cmps/keep-add-note.cmp.js"
import { eventBus } from '../../../service/event-bus.service.js';


export default {
    name: "keep-app",
    template: `
        <section v-if="keeps" class="keep-app ">
            <main>
                <keep-add-note class="add-notes" @keyup.enter.prevent="change"/>
                <keep-list :keeps="keepsToShow" @deleteNote="deleteNote" @changeColor="changeBgc"/>

            </main>
        </section>
`,

    data() {
        return {
            keeps: null,
        }
    },
    methods: {
        loadKeeps() {
            keepService.query()
                .then(keeps => this.keeps = keeps)
        },
        deleteNote(keepId) {
            keepService.deleteNote(keepId)
                .then(this.loadKeeps)
        },

        changeBgc(colorObj) {
            keepService.getById(colorObj.id)
                .then((keep) => {
                    keep.style.backgroundColor = colorObj.color
                    keepService.saveNote(keep)
                        .then(this.loadKeeps)
                })

        },
        addEmail(email) {
            keepService.makeToNote(email)
            this.loadKeeps();

        },
        change() {
            this.loadKeeps();
        }

    },

    computed: {
        keepsToShow() {
            return this.keeps;
        },

    },

    created() {
        eventBus.$on('saveNote', this.addEmail)

        this.loadKeeps();
    },

    components: {
        keepList,
        keepAddNote
    }
}