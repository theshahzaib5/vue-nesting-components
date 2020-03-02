<template>
  <div class="add-blog container">
    <h2 class="text-center">Add a new blog post</h2>

    <form action="" v-if="!submitted">
      <div class="form-group">
        <label for="">Blog Title</label>
        <!-- if you add v-model.lazy to v-model it would load the data in preview when your click on preview-->
        <input type="text" v-model="blog.title" required class="form-control" />
      </div>

      <div class="form-group">
        <label for="">Blog Content</label>
        <textarea class="form-control" v-model="blog.content"></textarea>
      </div>

      <div class="checkboxes">
        <div class="inner">
          <input type="checkbox" id="ninjas" value="ninjas" v-model="blog.categories" />
          <label for="ninjas">Ninjas</label>
        </div>

        <div class="inner">
          <input type="checkbox" id="mario" value="mario" v-model="blog.categories" />
          <label for="mario">Mario</label>
        </div>

        <div class="inner">
          <input type="checkbox" id="wizards" value="wizards" v-model="blog.categories" />
          <label for="wizards">Wizards</label>
        </div>

        <div class="inner">
          <input type="checkbox" id="cheese" value="cheese" v-model="blog.categories" />
          <label for="cheese">Cheese</label>
        </div>
      </div>

      <div class="form-group">
        <label for="">Author:</label>
        <select v-model="blog.author" class="form-control">
          <option v-for="author in authors" :key="author">{{ author }}</option>
        </select>
      </div>

      <div class="text-center">
        <button class="btn btn-primary" @click.prevent="post">Add Blog</button>
      </div>
    </form>

    <div v-if="submitted">
      <h3 class="text-center">Thanks for adding your post</h3>
    </div>

    <div class="preview">
      <h3 class="text-center">Preview blog</h3>
      <p><strong>Blog TItle:</strong> {{ blog.title }}</p>
      <p><strong>Blog Content:</strong></p>
      <p>{{ blog.content }}</p>
      <p><strong>Blog Categories:</strong></p>
      <ul class="d-flex cat-list">
        <li v-for="category in blog.categories" :key="category">{{ category }}</li>
      </ul>
      <p><strong>Blog Author:</strong> {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      authors: ['Shah', 'Zaib', 'Abdul', 'Amir', 'Vue'],
      submitted: false
    };
  },
  methods: {
    post: function() {
      this.$http
        .post('http://jsonplaceholder.typicode.com/posts', {
          userId: 1,
          title: this.blog.title,
          body: this.blog.content
        })
        .then(function(data) {
          console.log(data);
          this.submitted = true;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
.cat-list {
  li {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
}

.add-blog {
  padding: 20px 0;
  max-width: 500px;
}

label {
  display: block;
  margin: 20px 0 10px;
}

.preview {
  padding: 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3 {
  margin: 0px 0 20px;
}

.checkboxes,
.inner {
  &:not(:last-child) {
    margin-right: 15px;
  }

  display: flex;
  align-items: center;

  input,
  label {
    margin: 0;
  }

  input {
    margin-right: 10px;
  }
}
</style>
