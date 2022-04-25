<template>
    <div class="login" @click="toHome">
        {{title}}
    </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      title: '登录页',
    }
  },
  methods: {
    toHome() {
      this.$router.push({ path: 'home' })
    },
  },
}
</script>

<style lang="sass" scoped>

</style>