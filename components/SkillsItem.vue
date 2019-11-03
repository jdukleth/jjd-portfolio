<template>
  <v-list-item>
    <!-- Item Logo -->
    <v-list-item-icon align="center">
      <img :src="require(`~/assets/images/skills-logos/${data.logo}`)" />
    </v-list-item-icon>

    <!-- Item Label -->
    <v-list-item-content>
      <v-list-item-title>
        {{ data.name }}
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
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
    max-height: 40px;
  }
}
</style>
