<template>
  <div class="modal">
    <div class="modal-content">
        <p>{{this.modalMessage}}</p>
        <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
    props:['modalMessage'],
    data() {
        return {
            
        }
    },
    methods: {
        closeModal() {
            this.$emit('close-modal')
        }
    }
}
</script>

<style lang="scss">
.modal{
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 101;
    position: absolute !important;
    width: 100%;
    height: 100% !important;
    background-color: rgba(0,0,0,0.9);

    .modal-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 8px;
        width: 300px;
        padding: 40px 30px;
        background-color:#fff;
        color: #121212;

        p{
            text-align: center;
        }

        button{
            align-self: center;
        }
    }
}
</style>