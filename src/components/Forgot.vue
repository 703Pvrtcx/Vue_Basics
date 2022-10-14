



 <template>
    <div class="auth-wrapper">
      <div class="auth-inner">   
        <h3>Reset Password</h3>
        <form  @click.prevent="handleSubmit" >
          <div class="form-group">
          <label >Email</label>
          <input type="email" class="form-control" placeholder="Email Address">
        </div>
      
        <button class=" btn btn-primary btn-block">Submit</button>
        </form>

      </div>
     
   </div>
  </template> 
  
  <script>
    // import axios from 'axios';
    export default {
    name: 'Forgot-Component',
    data(){
      return {
        email: '',
      }
    },
    methods: {
     async handleSubmit(){
          // const response = await axios.post(`${this.apiUrl}/forgot`,{
          //   "email": this.email,
          //   "password":this.password
          //  },
          //  { 
          //   headers: JSON.stringify({ "Accept":"application/json" })
          //  });
         
           this.$router.push('/signin');   
        }   
    }
   
  }
  </script>
   
   <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  </style>
  