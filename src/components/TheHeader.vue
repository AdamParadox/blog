<template>
    <header>
        <nav class="container">
            <div class="logo">
                <router-link class="header" to="/">Satoru</router-link>
            </div>
            <div class="nav-links">
                <ul v-if="!mobile">
                    <router-link class="link" to="/">Home</router-link>
                    <router-link class="link" to="/blogs">Blogs</router-link>
                    <router-link v-if="admin" class="link" to="fhg">Create Post</router-link>
                    <router-link v-if="!user" class="link" to="/login">Login/Register</router-link>
                </ul>
                <div v-if="user" @click="toggleProfileMenu" class="profile" ref="profile">
                    <span class="initial">{{this.$store.state.profileInitials}}</span>
                    <div v-if="profileMenu" class="profile-menu">
                        <div class="info">
                            <p class="initials">{{this.$store.state.profileInitials}}</p>
                            <div class="rigth">
                                <p>{{this.$store.state.profileFirstName}} {{this.$store.state.profileLastName}}</p>
                                <p>{{this.$store.state.profileUsertName}}</p>
                                <p>{{this.$store.state.profileEmail}}</p>
                            </div>
                        </div>
                        <div class="options">
                            <div class="option">
                                <router-link class="option" to="/profile">  Profile</router-link>
                            </div>
                            <div class="option">
                                <router-link class="option" to="/admin">Admin</router-link>
                            </div>
                            <div @click="signOut" class="option">Sign Out</div>
                        </div>
                    </div>                
                </div>
            </div>
        </nav>
        <img v-if="mobile" @click="toggleMobileNav" class="menu-icon" src="@/assets/Icons/bars-regular.svg" alt="burger">
        <transition name="slide-fade">
             <ul class="mobile-nav" v-if="mobileNav">
                <router-link class="link" to="/"  @click="toggleMobileNav">Home</router-link>
                <router-link class="link" to="/blogs"  @click="toggleMobileNav">Blogs</router-link>
                <router-link class="link" to="79"  @click="toggleMobileNav">Create Post</router-link>
                <router-link class="link" to="про"  @click="toggleMobileNav">Login/Register</router-link>
             </ul>
        </transition>
    </header>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
export default {
    data() {
        return {
            profileMenu: null,
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        }
    },
    created() {
        window.addEventListener("resize", this.checkScreen)
        this.checkScreen()
    },
    beforeUpdate() {
        this.checkAdmin()
    },
    methods: {
        checkAdmin() {
            if(this.$store.state.profileEmail === 'admin@mail.ru') {
                this.$store.state.admin = true
            } 
        },
        con() {
            
            console.log(this.admin);
            console.log(this.$store.state.profileEmail);
        },
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 750) {
                this.mobile = true;
                return
            }
            this.mobile = false;
            this.mobileNav = false;
        },
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav
        },
        toggleProfileMenu(e) {
            if (e.target === this.$refs.profile) {
                this.profileMenu = !this.profileMenu
            }
        },
        signOut() {
            firebase.auth().signOut();
            window.location.reload();
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        },
        admin() {
            return this.$store.state.admin
        }
    },
    watch: {
      admin() {

      }
    }
}
</script>


<style lang="scss">
header {
    background-color: #304457;
    padding: 0 25px;
    z-index: 99;
    .link{
        font-weight: 500;
        margin: 0 8px;
        padding-bottom:2px;
        &:hover {
            color: rgb(129, 122, 206);
        }
    }
    
    nav {
        display: flex;
        padding: 25px 0;

        .logo {
            display: flex;
            align-items: center;

            .header {
                font-weight: 600;
                font-size: 24px;
                color: #fff;
                text-decoration: none;
            }
        }
        
        .nav-links {
            position: relative;
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: flex-end;

            .active{
            color: #42b983 ;
            border-bottom: 3px solid #3eaf7c;
            }
        }

        ul {

            .link {
                margin-right: 32px;
            }

            .link:last-child {
                margin-left: 0;
            }
        }

        .profile{
            position: relative;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            color:#fff;
            background-color: #304457;

            .initial{
                border:2px solid #fff;
                border-radius: 50%;
                padding: 15px;
                pointer-events: none !important;

            }

            .profile-menu{
                position: absolute;
                top: 65px;
                right: -25px;
                width: 250px;
                background-color:#121212;
            }

            .info{
                display: flex;
                align-items: center;
                padding: 15px;
                border-bottom:2px solid #fff;

                .initials{
                    position: initial;
                    width: 40px;
                    height: 40px;
                    background-color: #fff !important;
                    color:#121212;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    margin-left: -10px;
                    margin-right: 10px;
                }

                .rigth{
                    flex: 1;

                 
                }
            }

            .options{
                padding: 15px;

                .option{
                    text-decoration: none;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    
                }
            }

        }
    }

    .menu-icon {
        cursor: pointer;
        position: absolute;
        top: 22px;
        right: 25px;
        height: 35px;
        width: auto;
    }

    .mobile-nav {
        padding: 20px;
        width: 70%;
        max-width: 250px;
        display: flex;
        flex-direction: column;
        position: fixed;
        height: 100%;
        background-color: #121212;
        top: 0;
        left: 0;

        .active{
            color: #42b983 !important;
        } 

        .link {
            padding: 15px 0;
            color:#fff
        }
    }

    .slide-fade-enter-active {
    transition: all 0.5s ease-out;
    }

    .slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
    transform: translateX(-250px);
    }

}

</style>