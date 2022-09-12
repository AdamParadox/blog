<template>
    <div class="profile">
        <TheModal v-if="modalActive" :modalMessage="modalMessage" @close-modal="closeModal"></TheModal>
        <div class="container">
            <h2>Acoount Settings</h2>
            <div class="profile-info">
                <div class="initials">{{this.$store.state.profileInitials}}</div>
                <div class="admin-badge">
                    <h2>Admin</h2>
                </div>
                <div class="input">
                    <label for="firstName">First Name:</label>
                    <input type="text" id="firstName" v-model="firstName">
                </div>
                <div class="input">
                    <label for="lastName">Last Name:</label>
                    <input type="text" id="lastName" v-model="lastName">
                </div>
                <div class="input">
                    <label for="username">Username:</label>
                    <input type="text" id="username" v-model="username">
                </div>
                <div class="input">
                    <label for="email">Email:</label>
                    <input type="text" id="email" v-model="email" disabled>
                </div>
                <button @click="updateProfile">Save Changes</button>
            </div>
        </div>
    </div>
</template>

<script>
import TheModal from '@/components/TheModal.vue';
export default {
    components: { TheModal },
    data() {
        return {
            modalActive: null,
            modalMessage: 'Changes were saved',
        }
    },
    methods: {
        updateProfile() {
            this.$store.dispatch('updateUserSettings');
            this.modalActive = !this.modalActive;
        },     
         closeModal() {
            this.modalActive = !this.modalActive;
            this.email = ''
        },
    },
    computed: {
        firstName: {
            get() {
                return this.$store.state.profileFirstName
            },
            set(payload) {
                this.$store.commit('changeFirstName', payload)
            }
        },
        lastName: {
            get() {
                return this.$store.state.profileLastName
            },
            set(payload) {
                this.$store.commit('changeLastName', payload)
            }
        },
        username: {
            get() {
                return this.$store.state.profileUserName
            },
            set(payload) {
                this.$store.commit('changeUserName', payload)
            }
        },
        email() {
            return this.$store.state.profileEmail
        }
    }
}
</script>

<style lang="scss">
.profile{


    .container{
        max-width: 600px;
        padding: 60px 25px;


        h2{
            text-align: center;
            font-size: 19px;
        }
     

        .profile-info{
            border-radius: 5px;
            background-color: #304457;
            padding: 32px;
            display: flex;
            flex-direction: column;
            margin: 32px auto;
            justify-content: center;

            button{
                background-color: #121212 !important;
                align-self: flex-start;
            }

            .initials{
                width: 80px;
                height: 80px;
                align-self: center;
                background-color: #121212;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
            }

            .admin-badge{
                display: flex;
                align-self: center;
                font-size: 14px;
                border-radius: 5px;
                padding: 8px 24px;
                background-color: #121212 !important;
                margin: 16px 0;
                text-align: center;
                text-transform: capitalize;
            }

            .input{
                margin: 16px 0;

                label{
                    font-size: 14px;
                    display: block;
                    padding-bottom: 6px;
                }

                input {
                    border-radius: 5px;
                    width: 100%;
                    border: none;
                    font-size: 20px;
                    font-weight: 500;
                    padding: 8px;
                    height: 50px;
                     &:focus{
                        outline: none;
                    }
                }
            }
        }
    }
}
</style>