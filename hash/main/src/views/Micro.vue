<template>
  <div id="child_container"></div>
</template>

<script>
import { registerMicroApps, start } from 'qiankun';

export default {
  name: 'Micro',
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.loadMicro();
    },
    loadMicro() {
      // 注册子应用
      registerMicroApps([
        {
          name: 'micro_01', // 子应用名称
          entry: '//localhost:9001', // 子应用入口
          container: '#child_container', // 子应用所在容器
          activeRule: '#/micro', // 子应用触发规则（路径）
        },
      ]);

      // 启动默认应用
      // setDefaultMountApp('/micro');

      // 开启服务
      start();
    },
  },
};
</script>

<style lang="scss" scoped>
#child_container {
  width: 100%;
  height: 100%;
}
</style>
