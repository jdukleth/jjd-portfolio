<template>
  <v-alert color="transparent" dark prominent class="pa-6">
    <slot />
  </v-alert>
</template>

<style lang="scss" scoped>
.v-alert {
  background-color: rgba(122, 122, 122, 0.05) !important;
  color: slategray;
  font-size: 1em;
  letter-spacing: 0.05em;
}
</style>
