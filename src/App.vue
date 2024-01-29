<template>
  <div class="appHeader">
    <div><a-space direction="vertical">
      <a-space warp>
        <a-tooltip title="search">
          <a-button type="primary" shape="circle" :icon="h(SearchOutlined)" />
        </a-tooltip>
        <a-button type="primary" shape="circle">A</a-button>
        <a-button type="primary" :icon="h(SearchOutlined)">Search</a-button>
        <a-tooltip title="search">
          <a-button shape="circle" :icon="h(SearchOutlined)" />
        </a-tooltip>
        <a-button :icon="h(SearchOutlined)">Search</a-button>
      </a-space>
      <a-space warp>
        <a-tooltip title="search">
          <a-button shape="circle" :icon="h(SearchOutlined)" />
        </a-tooltip>
        <a-button :icon="h(SearchOutlined)">Search</a-button>
        <a-tooltip title="search">
          <a-button type="dashed" shape="circle" :icon="h(SearchOutlined)" />
        </a-tooltip>
        <a-button type="dashed" :icon="h(SearchOutlined)">Search</a-button>
        <a-button :icon="h(SearchOutlined)" href="https://www.google.com" />
      </a-space>
    </a-space></div>
    <div></div>
  </div>

  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
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
