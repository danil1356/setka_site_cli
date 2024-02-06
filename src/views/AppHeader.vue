<template>

  <header>
    <nav>
      <div class="components-page-header-demo-responsive">
        <ul class="nav me-auto">
          <div class="main"><li class="nav-item"><a href="/" class="nav-link link-dark px-2 active" aria-current="page">Главная</a></li></div>
          <div><li class="nav-item"><router-link to="/" class="nav-link link-dark px-2">Создать тест</router-link></li></div>
          <div><li class="nav-item"><router-link to="/" class="nav-link link-dark px-2">Список тестов</router-link></li></div>
          <div><li class="nav-item"><a class="nav-link link-dark px-2">Личный кабинет</a></li></div>
        </ul>
      </div>
    </nav>
  </header>

</template>

<script setup>


</script>



<style scoped lang="scss">
.components-page-header-demo-responsive {
  padding-bottom: 20px;
}
.components-page-header-demo-responsive tr:last-child td {
  padding-bottom: 0;
}
#components-page-header-demo-responsive .content {
  display: flex;
}
#components-page-header-demo-responsive .ant-statistic-content {
  font-size: 20px;
  line-height: 28px;
}
@media (max-width: 576px) {
  #components-page-header-demo-responsive .content {
    display: block;
  }

  #components-page-header-demo-responsive .main {
    width: 100%;
    margin-bottom: 12px;
  }

  #components-page-header-demo-responsive .extra {
    width: 100%;
    margin-left: 0;
    text-align: left;
  }
}
</style>
