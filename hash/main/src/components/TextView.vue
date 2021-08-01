<template>
  <div>
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: 'TextView',
  props: {
    text: {
      type: String,
      default: 'Text component',
    },
  },
};
</script>

<style lang="scss" scoped></style>
