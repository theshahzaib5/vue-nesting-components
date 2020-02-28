<template>
  <form action="" class="container">
    <slot name="Formheader"></slot>
    <div class="form-group">
      <label for="">Name</label>
      <input type="text" class="form-control" />
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

h2 {
  color: red;
}
</style>
