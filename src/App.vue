
<template>
  <div id="menu">
    <vue-3d-menu title="menu" :items="items" /> 
  </div>
  <div id="app">
      <router-view v-slot="{ Component }">  
        <transition name="bounce">
          <component :is="Component"/> 
        </transition>     
      </router-view> 
  </div> 
</template>

<script>
export default {
  data() {
    let items = [
      'Home',
      'Projects',
      'Resume',
      'About'
    ].map(item => ({ title: item, click: () => this.pageSelect(item) }))
    return {
      items
    }
  },
  methods: {
    pageSelect(item) {
      this.$router.push( {name: `${item}`} );
    }
  }
}
</script>


<style>
  body {
    background: url(assets/Home.jpg) no-repeat center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  #menu {
    text-align: center;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #a6384f;
   }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
    }
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to  {
    opacity: 0
  }
</style>
