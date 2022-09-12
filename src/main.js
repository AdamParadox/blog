import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue2Editor from "vue2-editor";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


let fireApp;
firebase.auth().onAuthStateChanged(() => {
    if (!fireApp) {
        createApp(App).use(Vue2Editor).use(store).use(router).mount('#app')
    }
})

