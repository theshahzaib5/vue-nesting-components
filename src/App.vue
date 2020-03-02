<template>
  <div>
    <Header :title="appTitle" @changeTitle="updateTitle($event)"></Header>
    <div class="main-content">
      <!-- <Ninjas :ninjas="ninjas"></Ninjas> -->
      <!-- <FormHelper> -->
      <!-- <div class="text-center" slot="Formheader">
          <h2>{{ formTitle }}</h2>
          <p>I am the paragraph text for the helper</p>
        </div> -->
      <!-- <div slot="formHeader" class="text-center">
          <h3>This is the title of the form</h3>
          <p>information about the form</p>
        </div>

        <div slot="formFields">
          <div class="form-group">
            <label for="">Name</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="">Email</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="">Phone</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <div slot="formControls" class="text-center">
          <button class="btn btn-primary">Submit</button>
          <button class="btn btn-secondary">Reset</button>
        </div> -->
      <!-- </FormHelper> -->
      <!-- <FormOne /> -->
      <!-- <FormTwo /> -->
      <keep-alive>
        <component :is="component"></component>
      </keep-alive>

      <div class="text-center">
        <button class="btn btn-primary" @click="component = 'FormOne'">Show form one</button>
        <button class="btn btn-primary" @click="component = 'FormTwo'">Show form two</button>
      </div>
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

export default {
  components: {
    Header,
    Footer,
    Ninjas,
    FormHelper,
    FormOne,
    FormTwo
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
