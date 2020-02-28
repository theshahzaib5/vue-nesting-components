<template>
  <footer class="text-center">
    <p>{{ copyright }} {{ title }}</p>
  </footer>
</template>

<script>
import { bus } from '../main';

export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      copyright: 'Copyright 2017'
    };
  },
  created() {
    bus.$on('titleChanged', data => {
      this.title = data;
    });
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

footer {
  background: $BLACK;
  color: $WHITE;
  padding: 10px 15px;
}
</style>
