<template>
  <v-list-item>
    <!-- Item Logo -->
    <v-list-item-icon align="center">
      <img :src="require(`~/assets/images/skills-logos/${logo}`)" />
    </v-list-item-icon>

    <!-- Item Label -->
    <v-list-item-content>
      <v-list-item-title>
        <slot></slot>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.v-list-item__icon {
  min-width: 50px;
  display: inline-block;

  img {
    max-width: 40px;
    max-height: 30px;
  }
}
</style>
