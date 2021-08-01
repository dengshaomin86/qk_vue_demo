<template>
  <div>
    <h1>home</h1>
    <HelloWorld msg="Hello world" />
    <TextView text="micro text" />
    <p>{{ name }}</p>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  computed: {
    ...mapState(['name']),
  },
};
</script>

<style lang="scss" scoped></style>
