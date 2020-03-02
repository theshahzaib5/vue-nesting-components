<template>
  <div>
    <FormHelper>
      <div slot="formHeader">
        <h3>Form Two - Log In</h3>
        <p>Enter your details to log-in</p>
      </div>
      <div slot="formFields">
        <div class="form-group">
          <label for="">User Name</label>
          <input type="text" placeholder="username" required class="form-control" />
        </div>

        <div class="form-group">
          <label for="">Password</label>
          <input type="password" placeholder="password" required class="form-control" />
        </div>
      </div>
      <div slot="formControls">
        <button @:click="handleSubmit" class="btn btn-primary">Login</button>
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
      alert('thanks for logging in (form two)');
    }
  }
};
</script>
