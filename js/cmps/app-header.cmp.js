export default {
    template: `
   <header class="app-header page__menu menu flex align-center space-between">
   <router-link class=" appsus-link" to="/" exact><h1> App <i class="fas fa-horse-head"></i> </h1> </router-link>
        <nav class="nav-bar">
        <div class="links">
          <router-link class="link keep-link" to="/keep"> Keep</router-link> 
          <router-link class="link keep-link" to="/email">Email</router-link> 
          <router-link class="link keep-link" to="/book">Book</router-link>
        </div>
        <!-- <button class="btn-menu" @click.stop="toggleMenu"> ☰ </button>  -->
       </nav>
    </header>
    `,

    methods: {
        toggleMenu() {
            document.body.classList.toggle('menu-open');
        }
    },
    destroyed() {
        document.body.classList.remove('menu-open');
    }
}