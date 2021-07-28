import navBar from '../cmps/app-header.cmp.js';


export default {
    template: `
    <section class="home main-app">
        <div class="container-app flex space-between justify-center">
        <h1 class=" header-app main-app flex justify-center align-center" > Better than paper...</h1>
        <img src="./images/notes.png"></img>
        </div>
    </section>
    `,
    components: {
        navBar,

    },
}