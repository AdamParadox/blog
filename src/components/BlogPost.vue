<template>
  <div class="blog-wrapper no-user">
    <div class="blog-content">
        <div>
            <h2 v-if="post.welcomeScreenState">{{ post.title }}</h2>
            <h2 v-else>{{ post.title }}</h2>
            <p v-if="post.welcomeScreenState">{{ post.blogPost }}</p>
            <p class="content-preview" v-else>{{ post.blogHTML }}</p>
            <router-link class="link link-light" v-if="post.welcomeScreenState" to="#">
                Login/Register
            </router-link>
            <router-link class="link" v-else to="#">
                View The Post
            </router-link>
        </div>
    </div>
     <div class="blog-photo">
            <img v-if="post.welcomeScreenState" :src="require(`@/assets/blogPhotos/${post.photo}.jpg`)" alt="">
            <img v-else :src="require(`@/assets/blogPhotos/${post.blogCoverPhoto}.jpg`)" alt="">
     </div>
  </div>
</template>

<script>
export default {
    props: ['post'],
}
</script>

<style lang="scss">
.blog-wrapper {
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    min-height: 650px;
    max-height: 650px;
    flex-direction: row;
  }
  .blog-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 4;
    order: 2;

    @media (min-width: 700px) {
      order: 1;
      
    }
    @media (min-width: 800px) {
      flex: 3;

    }

    div {
        max-width: 375px;
        padding: 72px 24px;
        @media (min-width: 700px) {
            padding: 0 24px;
        }

        h2 {
            font-size: 32px;
            font-weight: 300;
            text-transform:uppercase;
            margin-bottom: 24px;

             @media (min-width: 700px) {
                font-size: 40px;
             }
        }

        p {
            font-size: 15px;
            font-weight: 300;
            line-height: 1.7;
        }

        .content-preview {
            font-size: 13px;
            max-height: 24px;
            width: 250px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .link {
            display: inline-flex;
            align-items: center;
            margin-top: 32px;
            padding-bottom: 4px;
            border-bottom: 1ps solid transparent;
            transition: all .5s ease-in;

            &:hover {
                border-bottom-color: #fff;
            }
        }

        .link-light{
            &:hover{
                border-bottom-color: #fff;
            }
        }
    }
  }

  .blog-photo{
    order:1;
    flex: 3;
    
    @media (min-width: 700px) {
        order:2;
    }
    @media (min-width: 800px) {
        flex: 4;
    }

    img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
  }

  &:nth-child(even){
    .blog-content{
        order:2;
    }
    .blog-photo{
        order: 1;
    }
  }

  .no-user:first-child{
    .blog-content{
        background-color: #121212;
        color:#fff;
    }
  }
}
</style>