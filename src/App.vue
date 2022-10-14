<template>
  <router-view />
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'App',
    data(){
    return {
      apiUrl: 'http://localhost:8000/api',
    }
  },
 async created(){
    const response = await axios.get(`${this.apiUrl}/user`,{ 
            headers: {
              "Accept":"application/json",    
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
       });
       this.$store.dispatch('user', response.data);
  }
}  
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=fira+sans:400,500,600,700,800');

*{
  box-sizing: border-box;
}

body{
  background-image: url('./assets/photo.png');
  background-repeat: no-repeat, repeat;
  background-position: center; /* Center the image */
  background-size: cover; /* Resize the background image to cover the entire */
  /* min-height: 100vh; */
  height: 100%;
  display: flex;
  font-weight: 400;
  font-family: 'Fira Sans',sans-serif;
}

h1,h2,h3,h4,h5,h6,label,span,p{
  font-weight: 500;
  font-family: 'Fira Sans',sans-serif;
}

body,html,#app,#root, .auth-wrapper{
  width: 100%;
  height: 100%;
}

#app,p{
  text-align: center;
}

.navbar-light{
  background-color: #fff;
  box-shadow: 0px 14px 80px rgba(34,35,58,0.2);
}

.auth-wrapper{
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
}
.auth-inner{
  width: 420px;
  margin: auto;
  background: #fff;
  box-shadow: 0px 14px 80px rgba(34,35,58,0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
}

.auth-wrapper .form-control:focus{
  border-color: #167bff;
}

.auth-wrapper h3{
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

.custom-control-label{
  font-weight: 400;
}

.forgot-password,
.forgot-password a{
    text-align: right;
    font-size: 13px;
    padding-top: 10px;
    color:#7f7d7d;
    margin: 0;
  }
  .forgot-password{
    color: #167bff;
  }

</style> 