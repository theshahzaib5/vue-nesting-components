<template>
  <div class="show-blogs container" v-theme:withBg="'narrow'">
    <h1 class="text-center">All blog articles</h1>
    <input type="text" class="form-control" v-model="search" placeholder="Search..." />
    <section class="single-blog" v-for="item in filteredBlogs" :key="item.id">
      <router-link :to="'/blog/' + item.id">
        <h2 v-rainbow>
          {{ item.title | upperCase }}
        </h2>
      </router-link>
      <!-- <p>{{ item.content | snippet }}</p> -->
      <p>{{ item.content }}</p>
    </section>
  </div>
</template>

<script>
import SearchMixin from '../mixins/searchMixin';

export default {
  data() {
    return {
      blogs: [],
      search: ''
    };
  },
  methods: {},
  created() {
    this.$http
      .get('https://learning-vue-fe07d.firebaseio.com/posts.json')
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        console.log('data: ', data);
        let blogsArray = [];
        for (let key in data) {
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        this.blogs = blogsArray;
      });
  },
  computed: {},
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
  },
  mixins: [SearchMixin]
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
