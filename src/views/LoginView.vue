<template>
    <div class="form-wrapper">
        <form class="login" @submit.prevent>
            <div class="login-register">
                Don't have an account?
                <router-link class="router-link" to="/register">Register</router-link>
            </div>
            <h2>Login to Satoru</h2>
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="Email" v-model="email">
                </div>
                <div class="input">
                    <input type="password" placeholder="Password" v-model="password">
                </div>
                <div v-if="error" class="error">{{this.errorMessage}}</div>
                <router-link class="forgot-password" to="/forgot-password">Forgot your password?</router-link>
                <button @click.prevent="signIn" >Sign In</button>
            </div>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
export default {
    data() {
        return {
            email: '',
            password: '',
            error: null,
            errorMessage: ''
        }
    },
    methods: {
        signIn() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
                
                this.$router.push('/');
                this.error = false;
                this.errorMessage = '';
                
            }).catch((err) => {
                this.error = true;
                this.errorMessage = err.message;
            })
        }
    }
}
</script>

<style lang="scss">
.form-wrapper{
    overflow: hidden;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 90%;
    @media (min-width: 900px) {
        width: 100%;
    }

    .login-register{
        margin-bottom: 18px;

        .router-link{
            color:#fff;
        }
    }

    form{
        padding: 0 10px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex:1;
        @media (min-width: 900px) {
            padding: 0 50px;
        }

        h2{
            text-align: center;
            font-size: 32px;
            color:#fff;
            margin-bottom: 40px;
            @media (min-width: 900px) {
                font-size: 40px;
            }
        }

        .inputs{
            width: 100%;
            max-width: 350px;
            text-align: center;
            justify-content: center;
            display: flex;
            flex-direction: column;

         

            .input{
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 8px;

                input{
                    width: 100%;
                    font-size: 20px;
                    font-weight: 500;
                    border: none;
                    background-color: #fff;
                    padding: 4px 4px 4px 30px;
                    height: 50px;

                    &:focus{
                        outline: none;
                    }
                }

            }
        }

        .forgot-password{
            text-decoration: none;
            color:#fff;
            cursor: pointer;
            font-size: 14px;
            margin: 16px 0 32px;
            
        }
    }
}
</style>