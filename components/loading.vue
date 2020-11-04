<template>
  <div v-if="loading" class="loading-page">
    <img src="@/assets/frontend/images/loading_spons.svg" alt="">
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  z-index: 1000000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  text-align: center;
  padding-top: 100px;
  font-size: 30px;

}

.loading-page img {
  width: 100%;
  height: 100%;
  animation: zoominoutsinglefeatured 700ms infinite ;  
}

/* @keyframes zoominoutsinglefeatured {
    0% {
        transform: scale(1,1);
    }
    50% {
        transform: scale(1.2,1.2);
    }
    100% {
        transform: scale(1,1);
    }
} */

@media only screen and (max-width: 768px) {
  .loading-page img {
    width: 100%;
    height: 100%;
    animation: zoominoutsinglefeatured 700ms infinite ;  
  }
}
</style>