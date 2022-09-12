<template>
  <div class="app-wrapper" v-cloak>
    <div class="app">
      <TheHeader v-if="!navigation"></TheHeader>
      <router-view />
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import 'firebase/compat/auth';
export default {
  name: "app",
  components: { TheHeader },
  data() {
    return {
      navigation: null,
    };
  },
  created() {
    
    this.checkRoute();
   
  },
  mounted() {
  },
  methods: {
    checkRoute() {
      if(this.$route.name === 'login' || this.$route.name === 'register' || this.$route.name === 'ForgotPassword') {
        this.navigation = true;
        return;
      }

      this.navigation = false
    }
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  },
};
</script>

<style lang="scss">

[v-cloak]{
  display: none;
}
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}
  
body{
  position: relative;
    background-color: #1d2935;

}
button{
  border: none;
  font-size: 18px;
  background-color: #304457 !important;
}
.app {
  display: flex;
  flex-direction: column;
  height: 100% !important;
  color:#fff;
}
.container {
  max-width: 1440px;
  margin: 0 auto;
}
.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
}
.link-light {
  color: #fff;
}

button,
.router-button{
  cursor: pointer;
  margin-top: 24px;
  padding: 12px 24px;
  background-color: #121212;
  color:#fff;
  border-radius: 5px;
  text-decoration: none;
}

.error{
  text-align: center;
  font-size: 12px;
  color: red;
}
.blog-card-wrapper{
  position: relative;
  padding: 80px 15px;
  background-color: #1d2935 !important;
  @media (min-width:500px) {
    padding: 100px 16px;
  }

  .blog-cards{
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;

    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
