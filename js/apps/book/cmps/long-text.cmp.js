export default {
    props:['txt'],
    template:`
    <section class="long-text">
        <p>{{showTxt}}</p>
    </section>
    `,
    data(){
        return {
            
        }
    },
    computed:{
        showTxt(){
            const rest =  this.txt.substr(100,this.txt.length-1) 
            return rest; 
        }
    },
}
