<template>
  <router-view/>
</template>

<script  setup>
import { h } from 'vue';
import { SearchOutlined } from '@ant-design/icons-vue';
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {

    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .appHeader {
    display: flex;
    padding: var(--base-size-16, 16px);
    gap: var(--base-size-12, 12px);
  }
}
</style>
