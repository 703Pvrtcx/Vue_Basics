<template>
    <div id="app">
      <nav class="navbar navbar-expand-lg navbar-light fixed-top">
            <div class="container">
                <router-link class="navbar-brand" to="/">Dashboard</router-link>     
                
                <button class="navbar-toggler btn btn-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>     
                <div  class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"  v-if="user">
                            <a class="nav-link" href="javascript:void(0)" @click="handleClick" >Sign out</a>
                        </li>
                    </ul>
                </div>
            </div>
    </nav>
    <div class="auth-wrapper">
      <div class="auth-inner">
        <div v-if="user">
          <h3> Hi, {{user.name}}</h3>
            <p>{{user.email}}</p>
            <p>This is Dashboard</p>
        </div>
        <div v-if="!user">
          <h3>Not Looged in</h3>
            <p>Welcome to my first Vue.js Application</p>
        </div>
      </div>
  </div>
   </div>
      
  </template>
  
  <script>
  import axios from 'axios';
import { mapGetters } from 'vuex';
  export default {
    name: "DashComponent",
    data(){
        return {
          apiUrl: 'http://localhost:8000/api',
        }
    },
    methods: {
        async handleClick(){
            const response = await axios.post(`${this.apiUrl}/logout`,{},
           {   
            headers: {
              "Accept":"application/json",    
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
           });
           console.log('Success: ',response.data.token);
           this.$store.dispatch('user',null);
           localStorage.removeItem('token');
           this.$router.push('/');  
        }
    },
    computed:{
        ...mapGetters(['user']),
    }
}
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
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
  