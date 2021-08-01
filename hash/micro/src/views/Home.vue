<template>
  <div>
    <h1>home</h1>
    <HelloWorld msg="Hello world" />
    <TextView text="micro text" />
    <!-- <el-input v-model="input" placeholder="请输入内容"></el-input> -->
    <el-table :data="[]" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
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
  data() {
    return {
      input: '',
    };
  },
  computed: {
    ...mapState(['name']),
  },
};
</script>

<style lang="scss" scoped></style>
