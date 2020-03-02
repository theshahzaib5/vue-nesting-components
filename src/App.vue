<template>
  <div>
    <Header :title="appTitle" @changeTitle="updateTitle($event)"></Header>
    <div class="main-content">
      <router-view></router-view>
    </div>
    <Footer :title="appTitle"></Footer>
  </div>
</template>

<script>
import Header from './components/header';
import Footer from './components/footer';
import Ninjas from './components/ninjas';
import FormHelper from './components/formHelper';
import FormOne from './components/formOne';
import FormTwo from './components/formTwo';
import AddBlog from './components/addBlog';
import ShowBlog from './components/showBlogs';
import ListBlogs from './components/listBlogs';

export default {
  components: {
    Header,
    Footer,
    Ninjas,
    FormHelper,
    FormOne,
    FormTwo,
    AddBlog,
    ShowBlog,
    ListBlogs
  },
  data() {
    return {
      component: 'FormOne',
      formTitle: 'I am a dynamic slot title',
      appTitle: 'Vue Ninjas',
      ninjas: [
        { name: 'Ryu', speciality: 'Vue Components', show: false },
        { name: 'Crystal', speciality: 'HTML Wizardry', show: false },
        { name: 'Hitoshi', speciality: 'Click Events', show: false },
        { name: 'Tango', speciality: 'Conditionals', show: false },
        { name: 'Kami', speciality: 'Webpack', show: false },
        { name: 'Yoshi', speciality: 'Data Diggin', show: false }
      ]
    };
  },
  methods: {
    updateTitle: function(updatedTitle) {
      this.appTitle = updatedTitle;
    }
  }
};
</script>
