export default {
    props: ['reviews'],
    template: `
      <section class="reviews-container"> 
          <div class="review" v-for="(review,idx) in reviews" :key="idx"> 
              <button class="delete-btn"  @click="deletereview(idx)"> ✖ </button>   
                <span class="review-info"> {{ review.name }} </span>  <span class="review-info"> {{review.rate}}  </span> <span lass="review-info"> {{review.review}}  </span> 
              </div>
    
          </section>
      `,
   
    data() {
      return {
        bookReviews: this.reviews,
      };
    },
    methods:{
      deletereview(reviewIdx){
          this.$emit('deleteReview', reviewIdx )
      }
    }
  };
  