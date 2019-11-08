<template>
  <div>
    <v-carousel v-model="model" continuous height="100%">
      <v-carousel-item v-for="(pic, index) in data.gallery" :key="index">
        <v-sheet height="100%" tile style="padding: 64px 13px 50px 13px;">
          <v-row class="fill-height" style="overflow: auto;">
            <v-img
              position="center"
              :src="require(`~/assets/images/projects/${pic}`)"
            />
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null
    },
    themeClass: {
      type: String,
      default: 'gradient1'
    }
  },

  data() {
    return {
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
        'primary',
        'secondary'
      ],
      model: 0,
      showArrows: true,
      hideDelimiters: false,
      cycle: false
    }
  }
}
</script>

<style lang="scss" scoped>
.v-carousel__controls,
.v-window__prev,
.v-window__next {
  background: rgba(66, 66, 66, 1) !important;
}
</style>
