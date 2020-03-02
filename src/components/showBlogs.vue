<template>
  <div class="show-blogs container" v-theme:withBg="'narrow'">
    <h1 class="text-center">All blog articles</h1>
    <input type="text" class="form-control" v-model="search" placeholder="Search..." />
    <section class="single-blog" v-for="item in filteredBlogs" :key="item.id">
      <h2 v-rainbow>{{ item.title | upperCase }}</h2>
      <p>{{ item.body | snippet }}</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
      search: ''
    };
  },
  methods: {},
  created() {
    console.log('asdfasfd Shah Zaib');
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data) {
      console.log(data);
      this.blogs = data.body.slice(0, 10);
    });
  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter(item => {
        return item.title.match(this.search);
      });
    }
  },
  filters: {
    upperCase(value) {
      return value.toUpperCase();
    }
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          '#' +
          Math.random()
            .toString()
            .slice(2, 8);
      }
    }
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
