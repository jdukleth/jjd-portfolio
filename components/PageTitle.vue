<template>
  <h1>
    <v-icon>{{ icon }}</v-icon>
    <span><slot></slot></span>
  </h1>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  border-bottom: 2px solid rgba(255, 255, 255, 0.05);
  padding: 20px 80px;

  span {
    font-family: 'Ubuntu', sans-serif;
    font-size: 1em;
    font-weight: 100;
    letter-spacing: 0.2em;
    vertical-align: middle;
  }

  .v-icon {
    font-size: 1em;
    vertical-align: middle;
  }
}
</style>
