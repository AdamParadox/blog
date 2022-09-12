<template>
  <div class="form-wrapper">
        <TheModal v-if="modalActive" :modalMessage="modalMessage" @close-modal="closeModal"></TheModal>
        <form class="reset" @submit.prevent>
            <div class="login-register">
            </div>
            <h2>Reset Password</h2>
            <div>Forgot your password? Enter your email to reset it</div>
            <br>            
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="Email" v-model="email">
                </div>
                <button @click.prevent="resetPassword">Reset</button>
            </div>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import TheModal from '@/components/TheModal.vue';
export default {
    components: { TheModal },
    data() {
        return {
            modalActive: null,
            modalMessage: '',
            email: null
        }
    },
    methods: {
        closeModal() {
            this.modalActive = !this.modalActive;
            this.email = ''
        },
        resetPassword() {
            firebase.auth().sendPasswordResetEmail(this.email).then(() => {
                this.modalMessage = 'if your account exists, you will recieve a email';
                this.modalActive = true
            }).catch((err) => {
                this.modalMessage = err.message;
                this.modalActive = true
            })
        }
    }
}
</script>

<style>

</style>