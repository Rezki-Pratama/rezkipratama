<template>
  <div class="ss">
      <iframe width="100%" height="100%" class="iframe" id="player"
  src="https://my.spline.design/portofolio-eff69e85bafd8e50634e7d39aca0e745/"
  frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
    name: 'Iframe',

}
</script>
    
<style lang="scss" scoped>

.ss {
  background-color: red !important;
      position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;

  .iframe {
  position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

}
</style>