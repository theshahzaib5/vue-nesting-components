<template>
  <form action="" class="container">
    <!-- <slot name="Formheader"></slot> -->
    <h1 class="text-center">Please fill out our form.</h1>

    <div class="form-header text-center">
      <slot name="formHeader"></slot>
    </div>
    <div class="form-fields">
      <slot name="formFields"></slot>
    </div>
    <div class="form-controls text-center">
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
h1 {
  text-align: center;
}

form {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;

  > div {
    padding: 20px;
    background: #eee;
    margin: 20px 0;
  }
}

.useful-links ul {
  display: flex;

  li {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
}

#form-header {
  background: #ddd;
  border: 1px solid #bbb;
}
</style>
