<template>
  <div>
    <v-row>
      <!-- Project Plate Image -->
      <v-col :order="orientation" cols="auto">
        <img src="~/assets/images/db-takeoff.png" />
      </v-col>

      <!-- Project Details -->
      <v-col class="py-12">
        <v-row justify="center">
          <v-col cols="10">
            <!-- Title -->
            <h3 :class="themeClass + '--text display-2 font-weight-light'">
              {{ data.name }}
            </h3>

            <!-- Subheading -->
            <div class="font-weight-light primary--text display-1 mt-2 mb-8">
              {{ data.developedFor }}
            </div>

            <!-- Project Accomplishments -->
            <p class="headline">
              Mauris sed dui auctor, rutrum purus et, ullamcorper nibh. Donec
              arcu, fermentum vel velit in, vestibulum egestas sapien. Nunc
              convallis lectus est, a fringilla erat commodo eu. Mauris ac
              rutrum, mollis ligula vel, faucibus turpis. Fusce eros tellus,
              commodo ac, accumsan in urna. Aliquam vehicula ultrices lorem,
              iaculis placerat est eleifend a. Nullam vehicula malesuada massa.
              Aliquam erat volutpat.
            </p>

            <!-- Skill Chips -->
            <div class="mb-10">
              <v-chip
                v-for="(skill, index) in data.skills"
                :key="index"
                pill
                outlined
                class="primary primary--text pa-5 ma-1"
              >
                <img
                  class="logo"
                  :alt="skill.name"
                  :src="require(`~/assets/images/skills-logos/${skill.logo}`)"
                />
                <span class="headline pl-2">{{ skill.name }}</span>
              </v-chip>
            </div>

            <!-- View Gallery -->
            <GalleryOverlay :data="data" :theme-class="themeClass" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import GalleryOverlay from '../components/GalleryOverlay'

export default {
  components: {
    GalleryOverlay
  },

  props: {
    data: {
      type: Object,
      default: null
    },
    orientation: {
      type: String,
      default: 'first'
    },
    themeClass: {
      type: String,
      default: 'gradient1'
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  max-width: 30px;
  max-height: 30px;
}
</style>
