<script setup>
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import { ref,defineComponent } from 'vue';

import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'


const open = ref(false);
const showModal = () => {
  open.value = true;
};
const handleOk = e => {
  console.log(e);
  open.value = false;
};
</script>

<template>
  <div class="container">
    <div class="row mb-3">
      <div class="col-md-4" v-for="n in 3">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
<!--          col-auto d-none-->
          <div class="d-lg-block">
            <!--            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>-->
            <a-carousel arrows>
              <template #prevArrow>
                <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
                  <left-circle-outlined />
                </div>
              </template>
              <template #nextArrow>
                <div class="custom-slick-arrow" style="right: 10px">
                  <right-circle-outlined />
                </div>
              </template>
              <div @click="showModal">
                <img :src="require('@/assets/1.png')">
              </div>
              <div @click="showModal">
                <img :src="require('@/assets/2.png')">
              </div>
            </a-carousel>
          </div>
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary-emphasis">Женя Е.С.</strong>
            <h3 class="mb-0">Что проектируют архитекторы не "под заказ", а для себя?</h3>
            <div class="mb-1 text-body-secondary">Nov 12</div>
            <p class="card-text mb-auto">"Архитектура создаётся мозгом, но делается рукой" – гласит надпись на стене, а в качестве подписи – отпечаток руки самого Ле Корбюзье. </p>
            <!--          <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">-->
            <!--            Continue reading-->
            <!--            <svg class="bi"><use xlink:href="#chevron-right"></use></svg>-->
            <!--          </a>-->
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <a-modal v-model:open="open" width="1000px" title="Basic Modal" @ok="handleOk">
      <a-carousel arrows>
        <template #prevArrow>
          <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
            <left-circle-outlined />
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-slick-arrow" style="right: 10px">
            <right-circle-outlined />
          </div>
        </template>
        <div>
          <img :src="require('@/assets/1.png')">
        </div>
        <div>
          <img :src="require('@/assets/2.png')">
        </div>
      </a-carousel>
      <p>Some contents...</p>
<!--      <p>Some contents...</p>-->
<!--      <p>Some contents...</p>-->
    </a-modal>
  </div>


<!--  <div class="down">-->
<!--    <a-carousel arrows>-->
<!--      <template #prevArrow>-->
<!--        <div class="custom-slick-arrow" style="left: 10px; z-index: 1">-->
<!--          <left-circle-outlined />-->
<!--        </div>-->
<!--      </template>-->
<!--      <template #nextArrow>-->
<!--        <div class="custom-slick-arrow" style="right: 10px">-->
<!--          <right-circle-outlined />-->
<!--        </div>-->
<!--      </template>-->
<!--      <div class="row mb-3" v-for="n in 3">-->
<!--       <div class="col-md-6 right" v-for="n in 3">-->
<!--         <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">-->
<!--           <div class="d-lg-block">-->
<!--             &lt;!&ndash;            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>&ndash;&gt;-->
<!--             <a-carousel arrows>-->
<!--               <template #prevArrow>-->
<!--                 <div class="custom-slick-arrow" style="left: 10px; z-index: 1">-->
<!--                   <left-circle-outlined />-->
<!--                 </div>-->
<!--               </template>-->
<!--               <template #nextArrow>-->
<!--                 <div class="custom-slick-arrow" style="right: 10px">-->
<!--                   <right-circle-outlined />-->
<!--                 </div>-->
<!--               </template>-->
<!--               <div>-->
<!--                 <img :src="require('@/assets/1.png')">-->
<!--               </div>-->
<!--               <div>-->
<!--                 <img :src="require('@/assets/2.png')">-->
<!--               </div>-->
<!--             </a-carousel>-->
<!--           </div>-->
<!--           <div class="col p-4 d-flex flex-column position-static">-->
<!--             <strong class="d-inline-block mb-2 text-primary-emphasis">Новость 0_0</strong>-->
<!--             <h3 class="mb-0">Featured post</h3>-->
<!--             <div class="mb-1 text-body-secondary">Nov 12</div>-->
<!--             <p class="card-text mb-auto">НовостьНовость НовостьНовостьНовость НовостьНовостьНовостьНовость НовостьНовость НовостьНовостьНовостьНовость</p>-->
<!--           </div>-->
<!--         </div>-->
<!--       </div>-->

<!--      </div>-->
<!--    </a-carousel>-->
    <!--                         -->
<!--  </div>-->

  <Carousel v-bind="settings" :breakpoints="breakpoints">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>

</template>

<style scoped lang="scss">
:deep(.slick-slide) {
  text-align: center;
  //height: 160px;
  height: auto;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}

:deep(.slick-slide h3) {
  color: #fff;
}

img {
  width: 100%;
  height: 100%;
}

.right{
  float: left;
  //background: #fd0; /* Цвет фона */
  width: 33%; /* Ширина */
  height:100%; /* Высота */
}
.down {
  height: 400px;
}
.photo-block{
  margin-left: auto;
  margin-right: auto;
}

</style>
