<!--
 * @Description  : write something
 * @Autor        : snoop
 * @Date         : 2022-06-10 17:47:34
 * @LastEditors  : snoop
 * @LastEditTime : 2022-06-25 11:41:29
-->
<template>
    <el-container>
      <img alt="Vue logo" src="./assets/logo.png">
      <el-button type="primary" @click="count">点我</el-button>
      <el-row>vue: {{vueCount}}</el-row>
      <el-row>react: {{reactCount}}</el-row>
    </el-container>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            vueCount: 0,
            reactCount: 0,
        };
    },
    methods: {
        count() {
            this.vueCount++;
            window.parent.postMessage({
                data: this.vueCount
            }, '*')
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.el-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
