<template>
  <div class="container bg_img pt-100">
      <div class="col-10 col-md-8 mx-auto d-flex flex-column gap ">
        <RouterLink to="/whole-dm" class="">
          <img class="d-block w-100 " src="../../public/A02_按鈕_完整DM.png" alt="">
        </RouterLink>
        <RouterLink to="/schedule-activities" class="">
          <img class="d-block w-100" src="../../public/A02_按鈕_檔期活動.png" alt="">
        </RouterLink>
        <RouterLink to="/buy-one-get-one" class="">
          <img class="d-block w-100" src="../../public/A02_按鈕_買一送一專區.png" alt="">
        </RouterLink>
        <RouterLink to="/111" class="">
          <img class="d-block w-100" src="../../public/A02_按鈕_111元起專區.png" alt="">
        </RouterLink>
        <RouterLink to="/stylish-unique" class="">
          <img class="d-block w-100" src="../../public/A02_按鈕_時髦獨具.png" alt="">
        </RouterLink>
        <RouterLink to="/enjoy-delicious-food" class="">
          <img class="d-block w-100 pb-4" src="../../public/A02_按鈕_歡享佳餚.png" alt="">
        </RouterLink>
      </div>
  </div>

</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // components: {
  //   HelloWorld
  // }
}
</script>

<style scoped>
.bg_img {
  background: url('../../public/A01_底圖.jpg') ;
  background-size: cover;
  min-height: 100vh;
}
.gap {
  gap: 8px;
}
.pt-100 {
  padding-top: 106px;
}
@media (min-width: 450px) {
  .pt-100 {
    padding-top: 26%;
  }
}
@media (min-width: 768px) {
  .pt-100 {
    padding-top: 180px;
  }
}
@media (min-width: 992px) {
  .pt-100 {
    padding-top: 24%;
  }
}
@media (min-width: 1200px) {
    .bg_img {
      max-width: 1080px;
      height: 1920px;
  }
}
</style>
