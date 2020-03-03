<template>
  <div class="show-blogs container" v-theme:withBg="'narrow'">
    <h1>{{ blog.title }}</h1>
    <p>{{ blog.content }}</p>
    <p><strong>Author: </strong> {{ blog.author }}</p>

    <p><strong>Categories:</strong></p>

    <ul class="d-flex">
      <li v-for="category in blog.categories" :key="category">{{ category }}</li>
    </ul>
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
    this.$http
      .get('https://learning-vue-fe07d.firebaseio.com/posts/' + this.id + '.json')
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        this.blog = data;
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

.d-flex {
  li {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
}
</style>
