<template>
  <div class="blog-card">
    <div v-if="editPost" class="icons">
        <div class="icon">
            <div class="edit">Edit</div> 
        </div>
        <div class="icon">
           <div class="delete">Delete</div> 
        </div>
    </div>
    <img :src="require(`@/assets/blogCards/${post.blogCoverPhoto}.jpg`)" alt="">
    <div class="info">
        <h4>{{ post.blogTitle }}</h4>
        <h6>Posted on: {{ post.blogDate }}</h6>
        <router-link class="link" to="#">View The Post</router-link>
    </div>
  </div>
</template>

<script>
export default {
    props: ['post'],
    computed: {
        editPost() {
            return this.$store.state.editPost
        }
    }
}
</script>

<style lang="scss">
.blog-card{
    position: relative;
    cursor: pointer;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    border-radius: 5px;
    background-color: #fff;
    min-height: 420px;
    transition: all .5s ease;
box-shadow: 0px 0px 5px 2px rgba(255, 255, 255, 0.5);

    &:hover{
        transform: rotateZ(-1deg) scale(1.01);
    }

    .icons{
        display: flex;
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 99;

        .icon{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 55px;
        border-radius: 5px;
        overflow: hidden;
        height: 35px;
        color: #121212;
        background-color: #fff;        
        transition: .5s ease all;

        &:hover {
            background-color: #121212;

            .edit,
            .delete {
                color:#fff;
            }
        }

        &:nth-child(1){
            margin-right: 8px;
        }

        .edit,
        .delete{
            pointer-events: none;
            height: 15px;
            width: auto;
        }
    }
}

    img{
        display: block;
        border-radius: 5px;
        z-index: 1;
        width: 100%;
        min-height: 200px;
        object-fit: cover;
    }

    .info{
        display: flex;
        flex-direction: column;
        height: 100%;
        z-index: 3;
        padding: 32px 16px;
        color:#121212;

        h4{
            padding-bottom: 8px;
            font-size: 24px;
            font-weight: 500;
        }
        h6{
            padding-bottom: 16px;
            font-size:16px;
            font-weight: 500;
        }

        .link{
            display: inline-flex;
            color:#121212;
            font-weight: 500;
            padding-top: 60px;
            font-size: 18px;
            padding-bottom: 4px;
            transition: 0.5s ease-in all;

            &:hover{
                color: #121212;
            }
        }
    }
}
</style>