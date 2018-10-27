<template>
  <div class="adsSpace" :class="[classAds, dir]" :style="sizeSpace">
    <!-- <p>{{ namespace }} {{ dir }}</p> -->
    <div :id="idSpace"></div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        namespace: this.name
      }
    },
    computed: {
      classAds() {
        return `adsSpace${this.name.charAt(0).toUpperCase()}${this.name.slice(1)}`;
      },
      sizeSpace(){
        let heightSpace = (this.height || this.height != '') ? 'auto' : `${this.height}px`;
        return {width: `${this.width}px`, height: heightSpace};
      },
      idSpace() {
        let device = (window.innerWidth > 1200) ? 'd' : 'm';
        return `ads_${device}_${this.namespace}`;
      }
    },
    props: ['name', 'dir', 'width', 'height']
  }
</script>
<style lang="sass" scoped>
  .adsSpace
    align-items: center
    // background: #666
    color: white
    display: none
    font-weight: bold
    font-size: 38px
    text-align: center
    p
      margin: 0
  .adsSpaceTop
    align-items: center
    justify-content: center
    height: 0
    margin: 0 auto
    width: 100% !important
    -ms-flex-pack: justify
    -ms-flex-align: center
  .adsSpaceZocalo1,
  .adsSpaceZocalo2
    position: fixed
    top: 0
    z-index 600
    &.left
      left: 0
    &.right
      right: 0
  .adsSpaceSkin,
  .adsSpaceMovil0
    position: absolute
    top: 0
    right: 0
    z-index: 10
  .adsSpaceMovil1,
  .adsSpaceMovil0
    display: flex
    display: -ms-flexbox
    margin: 0 auto
  @media screen and (min-width: 768px)
    .adsSpaceMovil1,
    .adsSpaceMovil0
      display: none
  @media screen and (min-width: 1200px)
    .adsSpace
      display: flex
      display: -ms-flexbox
      justify-content: center
      -ms-flex-pack: center
      -ms-flex-align: center
    .adsSpaceTop
      width: 980px !important
    .adsSpaceMovil1,
    .adsSpaceMovil0
      display: none
  @media screen and (min-width: 1350px)
    .adsSpaceZocalo1,
    .adsSpaceZocalo2
      &.left
        left: 1%
      &.right
        right: 1%
  @media screen and (min-width: 1400px)
    .adsSpaceZocalo1,
    .adsSpaceZocalo2
      &.left
        left: 3%
      &.right
        right: 3%
  @media screen and (min-width: 1400px)
    .adsSpaceZocalo1,
    .adsSpaceZocalo2
      &.left
        left: 4%
      &.right
        right: 4%
  @media screen and (min-width: 1500px)
    .adsSpaceZocalo1,
    .adsSpaceZocalo2
      &.left
        left: 6%
      &.right
        right: 6%
  @media screen and (min-width: 1550px)
    .adsSpaceZocalo1,
    .adsSpaceZocalo2
      &.left
        left: 7%
      &.right
        right: 7%
  @media screen and (min-width: 1600px)
    .adsSpaceZocalo1,
    .adsSpaceZocalo2
      &.left
        left: 9%
      &.right
        right: 9%
  @media screen and (min-width: 1650px)
    .adsSpaceZocalo1,
    .adsSpaceZocalo2
      &.left
        left: 10%
      &.right
        right: 10%
  @media screen and (min-width: 1700px)
    .adsSpaceZocalo1,
    .adsSpaceZocalo2
      &.left
        left: 11%
      &.right
        right: 11%
  @media screen and (min-width: 1750px)
    .adsSpaceZocalo1,
    .adsSpaceZocalo2
      &.left
        left: 12%
      &.right
        right: 12%
  @media screen and (min-width: 1800px)
    .adsSpaceZocalo1,
    .adsSpaceZocalo2
      &.left
        left: 14%
      &.right
        right: 14%
  @media screen and (min-width: 1850px)
    .adsSpaceZocalo1,
    .adsSpaceZocalo2
      &.left
        left: 15%
      &.right
        right: 15%
</style>
