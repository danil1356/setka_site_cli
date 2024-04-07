<script setup>

import {LeftCircleOutlined, RightCircleOutlined} from "@ant-design/icons-vue";
</script>

<template>

  <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
    <div class="col-lg-6 px-0">
      <h1 class="display-4 fst-italic">СЕТКА</h1>
      <p class="lead my-3">Молодежное урбанистическое сообщество</p>
<!--      <p class="lead mb-0"><a href="#" class="text-body-emphasis fw-bold">Continue reading...</a></p>-->
    </div>
  </div>

<!--  bg-body-tertiary-->
  <div class="album py-0">
    <div class="container-sm">
      <p class="card-text">Наша команда:</p>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col photo-block" v-for="n in 3">
          <div class="card shadow-sm img">

<!--            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>-->
            <img class="img" :src="require('@/assets/3.png')">

            <div class="card-body">
              <p class="card-text fw-bold">Никитина Женечка</p>
              <p class="card-text ">Руководитель дивана</p>
              <div class="d-flex justify-content-between align-items-center">
<!--                <div class="btn-group">-->
<!--                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>-->
<!--                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>-->
<!--                </div>-->
<!--                <small class="text-body-secondary">9 mins</small>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.photo-block{
  margin-left: auto;
  margin-right: auto;
}

.mw {
  max-width: 90%;
}

.img{
  border-radius: 3%;
}

</style>
