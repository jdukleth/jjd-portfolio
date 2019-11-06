<template>
  <div>
    <v-row>
      <!-- Project Plate Image -->
      <v-col :order="orientation" cols="auto">
        <img src="~/assets/images/db-takeoff.png" />
      </v-col>

      <!-- Project Details -->
      <v-col>
        test test
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null
    },
    orientation: {
      type: String,
      default: 'first'
    }
  }
}
</script>

<style lang="scss" scoped></style>
