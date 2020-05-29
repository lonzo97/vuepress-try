<template>
  <div class="loading">
    加载中...
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="stylus">
  .loading
    position fixed
    top 50%
    left 50%
    transform: translate3d(-50%, -50%, 0)
    color: $badgeTipColor
    margin: 0 !important
</style>
