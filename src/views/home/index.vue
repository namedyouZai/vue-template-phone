<template>
    <div class="login" @click="toLogin">
        {{title}}
    </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      title: '主页',
    }
  },
  methods: {
    toLogin() {
      this.$router.push({ path: '/' })
    },
  },
}
</script>

<style lang="sass" scoped>

</style>