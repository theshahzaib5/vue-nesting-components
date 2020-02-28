<template>
  <footer class="text-center">
    <p>{{ copyright }} {{ title }}</p>
  </footer>
</template>

<script>
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
