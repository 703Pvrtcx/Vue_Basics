<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
            <div class="container">
                <router-link class="navbar-brand" to="/">Home</router-link>     
                
                <button class="navbar-toggler btn btn-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div  class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"  v-if="!user">
                            <router-link class="nav-link" to="/signin">Sign In</router-link>
                        </li>
                        <li class="nav-item"  v-if="!user">
                            <router-link class="nav-link" to="/signup">Sign Up</router-link>
                        </li>
                        
                        <li class="nav-item"  v-if="user">
                            <a class="nav-link" href="javascript:void(0)" @click="handleClick" >Sign out</a>
                        </li>
                        <li class="nav-item"  v-if="user">
                            <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
                        </li>


                    </ul>
                </div>
            </div>
    </nav>  
</template>
  <script>
  import axios from 'axios';

  export default {
    name: 'NavBar',
    props: ['user'],
    data(){
        return {
            apiUrl: 'http://localhost:8000/api',
        }
    },
    methods: {
        async handleClick(){
            const response = await axios.post(`${this.apiUrl}/logout`,
           {   
            headers: {
              "Accept":"application/json",    
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
           });
           console.log(response); 
           localStorage.removeItem('token');
           this.$router.push('/singin');  
        }
    },
  }
  </script>
  <style scoped>
  </style>
  