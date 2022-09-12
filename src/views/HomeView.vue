<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"></BlogPost>
    <BlogPost :post="post" v-for="(post, idx) in sampleBlogPost" :key="idx"></BlogPost>
    <div class="blog-card-wrapper">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, idx) in sampleBlogCards" :key="idx"></BlogCard>
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>NEVER MISS A POST. REGISTER FOR YOUR FREE ACCOUNT TODAY!</h2>
        <router-link class="router-button" to="#">REGISTER FOR FIREBLOG</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost.vue';
import BlogCard from '@/components/BlogCard.vue';

export default {
    components: { BlogPost, BlogCard },
    data() {
        return {
            welcomeScreen: {
                title: "Welcome",
                blogPost: "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
                welcomeScreenState: true,
                photo: "coding"
            },
            sampleBlogPost: [
                {
                    title: "This is a Filter Title",
                    blogHTML: "This is a filter blog post title",
                    blogCoverPhoto: "beautiful-stories"
                },
                {
                    title: "This is a Filter Title",
                    blogHTML: "This is a filter blog post title",
                    blogCoverPhoto: "beautiful-stories"
                },
            ],
          
        };
    },
    computed: {
      sampleBlogCards() {
        return this.$store.state.sampleBlogCards
      }
    }
    

}
</script>
<style lang="scss">
.blog-card-wrapper{
  background-color: #121212;
  h3{
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
  
}

.updates{
  .container{
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
  }
  .router-button{
    display: flex;
    font-size: 22px;
    @media (min-width: 800px) {
     margin-left: auto;
    }
  }

  h2{
    font-weight: 300;
    font-size: 32px;
    max-width: 425px;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
     @media (min-width: 800px) {
     text-align: initial;
     font-size: 40px;
    }
  }
}
</style>