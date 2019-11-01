<template>
  <v-btn
    icon
    :value="displayIcon"
    block
    :class="{
      'pa-2': $vuetify.breakpoint.smAndDown,
      'pa-5': $vuetify.breakpoint.mdAndUp,
      [colorClass]: true,
      [colorClass + '--text']: true
    }"
  >
    <span>{{ displayText }}</span>
    <v-icon>{{ displayIcon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    displayIcon: {
      type: String,
      default: null
    },
    displayText: {
      type: String,
      default: null
    },
    colorClass: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.theme--dark.v-bottom-navigation .v-btn:not(.v-btn--active) {
  color: rgba(0, 0, 0, 1) !important;
  font-size: 1em;
}

.theme--dark.v-bottom-navigation .v-btn:not(.v-btn--active):hover {
  font-size: 1em;
  margin-top: -8px;
  border-top: 8px solid white;
}

.v-item-group.v-bottom-navigation .v-btn.v-btn--active {
  // color: rgba(112, 128, 144, 1) !important;
  font-size: 1em;
  background-color: transparent !important;
  border-bottom: 4px solid white;
  margin-top: -4px;
}
</style>
