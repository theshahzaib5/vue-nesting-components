<template>
  <form action="" class="container">
    <!-- <slot name="Formheader"></slot> -->
    <h1 class="text-center">Please fill out our form.</h1>

    <div class="form-header">
      <slot name="formHeader"></slot>
    </div>
    <div class="form-fields">
      <slot name="formFields"></slot>
    </div>
    <div class="form-controls">
      <slot name="formControls"></slot>
    </div>
    <div class="useful-links">
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
        <li><a href="#">Link 4</a></li>
      </ul>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
</style>
