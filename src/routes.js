import ShowBlog from './components/showBlogs.vue';
import AddBlog from './components/addBlog.vue';
import BlogView from './components/blogView.vue';

export default [
  { path: '/', component: ShowBlog },
  { path: '/addBlog', component: AddBlog },
  { path: '/blog/:id', component: BlogView }
];
