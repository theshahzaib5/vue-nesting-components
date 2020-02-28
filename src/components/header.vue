<template>
  <header class="text-center">
    <h1 @click="changeTitle">{{ title }}</h1>
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
  padding: 15px 15px;
}
</style>
