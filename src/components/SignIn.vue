



 <template>
    <div class="auth-wrapper">
      <div class="auth-inner">   
        <h3>Sign In</h3>
        <form @click.prevent="handleSubmit">
          
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" placeholder="Email" v-model="email">
          </div>
          
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" placeholder="Password" v-model="password">
          </div>

          <button class="btn btn-primary btn-block">Login</button>
        
        </form>
        Create a new account<router-link class="link" to="/signup">Sign Up</router-link>
    </div>
   </div>
  </template> 
  
  <script>
    import axios from 'axios';

    export default {
    name: 'SignIn',
    data(){
        return{
            email: '',
            password:'',
            apiUrl: 'http://localhost:8000/api',
        }
    },
    methods: {
     async handleSubmit(){
          const response = await axios.post(`${this.apiUrl}/login`,{
            "email": this.email,
            "password":this.password
           },
           { 
            headers: JSON.stringify({ "Accept":"application/json" })
           });
           console.log('Success: ',response.data.user);

           localStorage.setItem('token',response.data.token);
          
           this.$store.dispatch('user',response.data.user); 
           this.$router.push('/dashboard');   
        }   
    }
  }
  </script>
   
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
  