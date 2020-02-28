<template>
  <header class="text-center">
    <h1 @click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  methods: {
    changeTitle: function() {
      this.title = 'Shah Zaib';
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

header {
  background: $GREY;
  padding: 15px 15px;
}
</style>
