<template>
  <div class="container" id="ninjas">
    <ul>
      <li v-for="ninja in ninjas" @click="ninja.show = !ninja.show" v-bind:key="ninja.name">
        <h2>{{ ninja.name }}</h2>
        <h3 v-if="ninja.show">{{ ninja.speciality }}</h3>
      </li>
    </ul>

    <div class="text-center">
      <button class="btn btn-primary" @click="deleteNinja">Delete Ninja</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ninjas: {
      type: Array,
      required: true
    }
  },
  methods: {
    deleteNinja: function() {
      this.ninjas.pop();
    }
  },
  beforeCreate() {
    alert('before Created');
  },
  created() {
    alert('Created');
  },
  beforeMount() {
    alert('beforeMount');
  },
  mounted() {
    alert('mounted');
  },
  beforeUpdate() {
    alert('beforeUpdate');
  },
  updated() {
    alert('Updated');
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
#ninjas {
  padding: 40px 0;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
