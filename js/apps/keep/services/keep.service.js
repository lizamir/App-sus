import { utilService } from '../../../service/util.service.js'
import { storageService } from '../../../service/async-storage.service.js'


const KEEPS_KEY = 'keeps'
const gKeeps = [{

        id: utilService.makeId(),
        type: "noteTxt",
        isPinned: true,
        info: {
            txt: "Notes Me!"
        },
        style: {
            backgroundColor: "#28527a"
        }
    },
    {
        id: utilService.makeId(),
        type: "noteImg",
        info: {
            url: "./img/dog.jpg",
            title: " my image"
        },
        style: {
            backgroundColor: "#f4d160"
        }
    },
    {
        id: utilService.makeId(),
        type: "noteTodos",
        info: {
            title: 'ToDo:',
            label: "How was it:",
            todos: [
                { txt: "shopping", doneAt: null },
                { txt: "go to run", doneAt: null },
                { txt: "pay to the  gardener", doneAt: 187111111 }
            ]
        },
        style: {
            backgroundColor: "#fff9b0"
        }
    },
    {
        id: utilService.makeId(),
        type: "noteImg",
        info: {
            url: "./img/coffe.jpg",
            title: " don't forget to drink coffee"
        },
        style: {
            backgroundColor: "#ff9a9a"
        }
    },
    {
        id: utilService.makeId(),
        type: "noteTodos",
        info: {
            title: 'before Summer',
            label: "How was it:",
            todos: [
                { txt: "sport", doneAt: null },
                { txt: "Toning", doneAt: null },
                { txt: "eat right", doneAt: 187111111 }
            ]
        },
        style: {
            backgroundColor: "#b4dbed"
        }
    },

    {

        id: utilService.makeId(),
        type: "noteTxt",
        isPinned: true,
        info: {
            txt: "call mom!"
        },
        style: {
            backgroundColor: "#28527a"
        }
    },

    {
        id: utilService.makeId(),
        type: "noteVideo",
        info: {
            url: "https://www.youtube.com/watch?v=L0MK7qz13bU",
            title: " Let it go"
        },
        style: {
            backgroundColor: "#ff9a9a"
        }
    },


]


export const keepService = {
    query,
    deleteNote,
    saveNote,
    getById,
    getEmptyNote,
    addNewNote,
    updateNoteProp,
    makeToNote

}


function makeToNote(email) {
    const note = {
        id: utilService.makeId(),
        type: "noteTxt",
        isPinned: true,
        info: {
            txt: `Email from: ${email.sender} `
        },
        style: {
            backgroundColor: "#28527a"
        },
        emailId: email.id
    }

    gKeeps.unshift(note);
    utilService.saveToStorage(KEEPS_KEY, gKeeps);


}


function query() {
    return storageService.query(KEEPS_KEY)
        .then(keeps => {
            if (!keeps.length) {
                keeps = gKeeps;
                utilService.saveToStorage(KEEPS_KEY, gKeeps);
            }

            return keeps;
        });
}

function deleteNote(keepId) {
    return storageService.remove(KEEPS_KEY, keepId);
}

function saveNote(keep) {
    if (keep.id) {
        return storageService.put(KEEPS_KEY, keep);
    } else {
        return storageService.post(KEEPS_KEY, keep);
    }
}

function getById(id) {
    return storageService.get(KEEPS_KEY, id);
}

function getEmptyNote(type) {
    const newNote = {
        type: type,
        style: {
            backgroundColor: "#f2d5f3"
        },
        id: utilService.makeId(),
    };
    switch (type) {
        case 'noteTxt':
            newNote.info = { txt: '' };
            break;
        case 'noteTodos':
            newNote.info = { info: '', title: '' };
            break;
        case 'noteImg':
            newNote.info = { url: '', title: '' };
            break;

        case 'noteVideo':
            newNote.info = { url: '', title: '' };
            break;
    }

    return newNote;
}

function addNewNote(newNote) {

    switch (newNote.type) {
        case 'noteImg':
            newNote.info.url = newNote.info.txt;
            newNote.info.title = 'title';
            break;
        case 'noteTxt':
            newNote.info.txt = newNote.info.txt;
            break;

        case 'noteTodos':
            newNote.info.url = newNote.info.txt;
            newNote.info.title = 'title';
            break;
    }
    gKeeps.unshift(newNote);
    utilService.saveToStorage(KEEPS_KEY, gKeeps);
}

function updateNoteProp(keepId, prop, val) {
    let keepToEdit;
    getById(keepId).then((keep) => {
        keepToEdit = keep;
        keepToEdit[prop] = val;
        utilService.saveToStorage(KEEPS_KEY, gKeeps);
    });
}