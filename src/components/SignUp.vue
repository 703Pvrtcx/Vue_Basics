
<template>
   
    <div class="auth-wrapper">
      <div class="auth-inner">   
        <h3>Create a new account</h3>
        <form @click.prevent="handleSubmit">
          
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" placeholder="Name" v-model="name ">
          </div>
          <!-- <div class="form-group">
            <label for="lastname">Last Name</label>
            <input type="text" class="form-control" placeholder="Last name" v-model="last_name">
          </div> -->
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" placeholder="Email" v-model="email">
          </div>
          
          <div class="form-group">
            <label for="password">Create Password</label>
            <input type="password" class="form-control" placeholder="Create a new password" v-model="password">
          </div>
          <div class="form-group">
            <label for="password">Confirm Password</label>
            <input type="password" class="form-control" placeholder="Confirm password" v-model="password_confirmation">
          </div>

          <button class="btn btn-primary btn-block">Sign Up</button>
        
        </form>
      
        Already have an account? <router-link class="link" to="/signin">Sign In</router-link>    </div>
   </div>
  </template>
  
  <script>
    import axios from 'axios';

  export default {
    name: 'SignUp',
    data(){
        return{
            name: '',
            email: '',
            password:'',
            password_confirmation: '',
            apiUrl: 'http://localhost:8000/api',
        }
    },
    methods: {
       async handleSubmit(){
        const response =  await axios.post(`${this.apiUrl}/register`,{
              "name": this.name,
              "email": this.email,
              "password":this.password,
              "password_confirmation": this.password_confirmation
           },{ 
            headers: JSON.stringify({ "Accept":"application/json" })
           });
           console.log('Success: ',response.data);
           this.$router.push('/signin');
      
        }   

    }



  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .card{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        /* padding: 5px; */
        margin-bottom: 20px;
        width: 200px;
}
.card:hover{
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  