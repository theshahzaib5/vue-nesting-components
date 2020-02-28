<template>
  <div>
    <Header :title="appTitle" @changeTitle="updateTitle($event)"></Header>
    <div class="main-content">
      <Ninjas :ninjas="ninjas"></Ninjas>
    </div>
    <Footer :title="appTitle"></Footer>
  </div>
</template>

<script>
import Header from './components/header';
import Footer from './components/footer';
import Ninjas from './components/ninjas';
export default {
  components: {
    Header,
    Footer,
    Ninjas
  },
  data() {
    return {
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
