export default {
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter(item => {
        return item.title.match(this.search);
      });
    }
  }
};
