<template>
  <div v-show="$vuetify.breakpoint.mdAndUp">
    <v-btn icon class="ma-2 pa-7" @click="toggleFullscreen">
      <v-icon size="36">
        {{ isFullscreen ? 'mdi-fullscreen-exit' : 'mdi-fullscreen' }}
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFullscreen: false
    }
  },

  methods: {
    toggleFullscreen(event) {
      const elem = document.documentElement

      if (
        document.fullscreenEnabled ||
        document.webkitFullscreenEnabled ||
        document.mozFullScreenEnabled ||
        document.msFullscreenEnabled
      ) {
        if (!this.isFullscreen) {
          if (elem.requestFullscreen) {
            elem.requestFullscreen()
            this.isFullscreen = true
          } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen()
            this.isFullscreen = true
          } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen()
            this.isFullscreen = true
          } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen()
            this.isFullscreen = true
          }
        } else if (document.exitFullscreen) {
          document.exitFullscreen()
          this.isFullscreen = false
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen()
          this.isFullscreen = false
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
          this.isFullscreen = false
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
          this.isFullscreen = false
        }
      }
    }
  }
}
</script>

<style scoped>
.v-btn {
  height: auto; /* necessary for Chrome; */
  width: auto; /* fixed dimensions mess up alignment */
}
</style>
