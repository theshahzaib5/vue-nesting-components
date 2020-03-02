<template>
  <div class="show-blogs container" v-theme:withBg="'narrow'">
    <h1 class="text-center">All blog articles</h1>

    <section class="single-blog" v-for="item in blogs" :key="item.id">
      <h2 v-rainbow>{{ item.title | upperCase }}</h2>
      <p>{{ item.body | snippet }}</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: []
    };
  },
  methods: {},
  created() {
    console.log('asdfasfd Shah Zaib');
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data) {
      console.log(data);
      this.blogs = data.body.slice(0, 10);
    });
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.single-blog {
  margin: 15px 0;
  background: #eee;
  padding: 20px;
}
</style>
