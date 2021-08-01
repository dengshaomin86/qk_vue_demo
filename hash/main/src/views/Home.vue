<template>
  <div>
    <h1>home</h1>
    <HelloWorld msg="Hello world" />
    <TextView text="Main text" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss" scoped></style>
