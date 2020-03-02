<template>
  <div>
    <FormHelper>
      <div slot="formHeader">
        <h3>Form One - Contact Us</h3>
        <p>Fill in this form to contact us</p>
      </div>
      <div slot="formFields">
        <div class="form-group">
          <label for="">Name</label>
          <input type="text" placeholder="name" required class="form-control" />
        </div>

        <div class="form-group">
          <label>Your Message:</label>
          <textarea class="form-control"></textarea>
        </div>
      </div>
      <div slot="formControls">
        <button @click="handleSubmit" class="btn btn-primary">Send</button>
      </div>
    </FormHelper>
  </div>
</template>

<script>
import FormHelper from './formHelper.vue';

export default {
  components: {
    FormHelper
  },
  data() {
    return {};
  },
  methods: {
    handleSubmit: function() {
      alert('thanks for submitting form one & contacting us');
    }
  }
};
</script>
