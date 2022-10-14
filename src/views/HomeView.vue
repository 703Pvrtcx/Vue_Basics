<template>
   <div id="app">
    <NavBar />
    <div class="auth-wrapper">
      <div class="auth-inner">
        <div v-if="user">
          <h3> Hi, {{user.name}}</h3>
            <p>Welcome to my first Vue.js Application</p>
        </div>
        <div v-if="!user">
          <h3>Not Looged in</h3>
         </div>
      </div>
  </div>
   </div>
</template>
<script>
import NavBar from '@/Layout/NavBar.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'HomeView',
  components: {
    NavBar,
  },
  computed:{
        ...mapGetters(['user']),
    }
}
</script>

<style>
</style>
