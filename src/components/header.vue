<template>
  <header class="text-center">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" @click.prevent="changeTitle" href="/">{{ title }}</a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/addBlog" class="nav-link" exact>Add Blog</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { bus } from '../main';

export default {
  props: {
    title: {
      type: String
    }
  },

  methods: {
    // this will change the title in header only
    // changeTitle: function() {
    //   this.title = 'Shah Zaib';
    // }
    //
    // emit event to root component
    // changeTitle: function() {
    //   this.$emit('changeTitle', 'Shah Zaib');
    // }
    //
    // emit event using bus event

    changeTitle: function() {
      this.title = 'Shah Zaib';
      bus.$emit('titleChanged', 'Shah Zaib');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

header {
  background: $GREY;
}
</style>
