<template>
   <div id="app">
    <NavBar :user="user" />
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
export default {
  name: 'HomeView',
  components: {
    NavBar,
  },
  props: ['user'],
}
</script>

<style>
</style>
