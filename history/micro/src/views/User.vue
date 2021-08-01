<template>
  <div>
    <h1>user</h1>
    <p>{{ username }}</p>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    username: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
