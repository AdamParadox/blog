<template>
  <div class="admin">
    <div class="container">
      <h2>Administration</h2>
      <div class="admin-info">
        <h2>Add Admin</h2>
        <div class="input">
          <input placeholder="Enter user email to make them ana admin" type="text" id="addAdmins" v-model="adminEmail">
        </div>
        <span>{{this.functionMessage}}</span>
        <button class="button">Sumbit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adminEmail: '',
      functionMessage: null
    }
  }
}
</script>

<style lang="scss">
.admin{
  .container{
    max-width: 1000px;
    padding: 60px 25px;

    h2{
      text-align: center;
      margin-bottom: 16px;
      font-size: 30px;
    }

    .admin-info{
      border-radius: 5px;
      padding: 34px;
      display: flex;
      background-color: #304457;
      display: flex;
      flex-direction: column;
      max-width: 600px;
      margin: 32px auto;

      button{
        background-color: #121212 !important;
      }

      span{
        font-size: 18px;
      }

      .input{
        margin: 16px 0;
      }

      input{
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
</style>