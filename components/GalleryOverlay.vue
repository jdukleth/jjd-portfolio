<template>
  <div>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          class="my-1 py-4 px-12"
          height="auto"
          :color="themeClass"
          outlined
          x-large
          v-on="on"
        >
          <v-icon large class="pr-3">mdi-image-multiple</v-icon>
          <span class="headline">View Project Gallery</span>
        </v-btn>
      </template>
      <v-card>
        <!-- Top Toolbar -->
        <v-toolbar flat color="rgba(0, 0, 0, 0.5)">
          <v-toolbar-title>Project Name Here</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <Gallery :data="data" :theme-class="themeClass" />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Gallery from '../components/Gallery'

export default {
  components: {
    Gallery
  },

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
      dialog: false
    }
  }
}
</script>

<style lang="scss" scoped></style>
