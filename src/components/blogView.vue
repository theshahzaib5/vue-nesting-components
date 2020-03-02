<template>
  <div class="show-blogs container text-center" v-theme:withBg="'narrow'">
    <h1>{{ blog.title }}</h1>
    <p>{{ blog.body }}</p>
  </div>
</template>

<script>
import SearchMixin from '../mixins/searchMixin';

export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data) {
      console.log('data: ', data);
      this.blog = data.body;
    });
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
.show-blogs {
  margin-bottom: 30px;
}

h1 {
  margin-bottom: 20px;
}

.single-blog {
  margin: 15px 0;
  background: #eee;
  padding: 20px;
}
</style>
