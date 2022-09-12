<template>
  <div class="form-wrapper">
        <form class="register">
            <div class="login-register">
                Already have an account?
                <router-link class="router-link" to="/login">Login</router-link>
            </div>
            <h2>Create Your Satoru Account</h2>
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="First Name" v-model="firstName">
                </div>
                <div class="input">
                    <input type="text" placeholder="Last Name" v-model="lastName">
                </div>
                 <div class="input">
                    <input type="text" placeholder="Username" v-model="username">
                </div>
                <div class="input">
                    <input type="text" placeholder="Email" v-model="email">
                </div>
               
                <div class="input">
                    <input type="password" placeholder="Password" v-model="password">
                </div>
                <div v-if="error" class="error">{{this.errorMessage}}</div>
                <button @click.prevent="register">Sign Up</button>
            </div>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import db from '@/firebase/firebaseInit';
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            error: null,
            errorMessage: ''
        }
    },
    methods: {
        async register() {
            if (
                
                this.firstName !== "" &&
                this.lastName !== "" &&
                this.username !== "" &&
                this.email !== "" &&
                this.password !== "" 
            ) {
                this.error = false;
                this.errorMessage = "";
                const firebaseAuth = await firebase.auth();
                const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password);
                const result = await createUser;
                const dataBase = db.collection('users').doc(result.user.uid);
                await dataBase.set({
                    firstName:this.firstName,
                    lastName: this.lastName,
                    username: this.username,
                    email:    this.email,
                    password: this.password,
                });
                this.$router.push('/')
                return;
            }

            this.error = true;
            this.errorMessage = 'Please fill out all the fields!';
            return;
        }
    }
}
</script>

<style>

</style>