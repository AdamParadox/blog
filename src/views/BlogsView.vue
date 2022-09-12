<template>
  <div class="blog-card-wrapper">
    <div class="blog-cards container">
        <div class="toggle-edit">
            <span>Toggle Editing Post</span>
            <input type="checkbox" v-model="editPost">
        </div>
        <BlogCard :post="post" v-for="(post, idx) in sampleBlogCards" :key="idx"></BlogCard>
    </div>
  </div>
</template>

<script>
import BlogCard from '@/components/BlogCard.vue';
export default {
    components: { BlogCard },
    computed: {
        sampleBlogCards() {
            return this.$store.state.sampleBlogCards;
        },
        editPost: {
            get() {
                return this.$store.state.editPost
            },
            set(payload) {
                this.$store.commit('toggleEditPost', payload)
            }
        }
    },
    beforeUnmount() {
        this.$store.commit('toggleEditPost', false)
    }
}
</script>

<style lang="scss">
.blog-cards{
    position: relative;

    .toggle-edit{
        display: flex;
        align-items: center;
        position: absolute;
        top: -70px;
        right: 0;
    }

    span{
        margin-right: 16px;
    }
}


input[type="checkbox"]{
    position: relative;
    border: none;
    -webkit-appearance: none;
    background-color: #121212;
    outline: none;
    width: 80px;
    height: 34px;
    border-radius: 20px;
    align-items:center ;
    transition: 350ms ease all;
    border:2px solid #fff;
}


input[type="checkbox"]:before{
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 20px;
    top: 0;
    left: 0;
    background-color: #fff;
    transform: scale(0.8);
    transition: 350ms ease all;
}

input:checked[type="checkbox"]:before{
    background-color: #121212;
    transform: scale(0.8);
    left: 49px;
}
input:checked[type="checkbox"]{
    background-color: #fff;

}
</style>