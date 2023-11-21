<template>
  <div>
    <v-row>
      <!-- Project Plate Image -->
      <v-col
        :order="getOrientation()"
        cols="12"
        md="5"
        lg="5"
        class="pa-0 ma-0"
      >
        <iframe
          v-if="!isJpg(data.cover.pic) && !isGif(data.cover.pic)"
          max-height="100%"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/vrVV0RzeSTk"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />

        <v-img
          :position="data.cover.position"
          :src="require(`~/assets/images/projects/${data.cover.pic}`)"
          v-if="isJpg(data.cover.pic)"
          max-height="100%"
          height="100%"
          width="100%"
          aspect-ratio="1"
          eager
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="gradient1" />
            </v-row>
          </template>
        </v-img>
      </v-col>

      <v-img
        :position="data.cover.position"
        :src="require(`~/assets/images/projects/${data.cover.pic}`)"
        v-if="isGif(data.cover.pic)"
        width="100%"
        eager
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="gradient1" />
          </v-row>
        </template>
      </v-img>
      </v-col>

      <!-- Project Details -->
      <v-col class="py-12">
        <v-row justify="center">
          <v-col cols="11" lg="10">
            <!-- Title -->
            <h3 :class="themeClass + '--text'">
              {{ data.name }}
            </h3>

            <!-- Subheading -->
            <h4 class="font-weight-light primary--text mb-6">
              {{ data.developedFor }}
            </h4>

            <!-- Project Accomplishments -->
            <p class="description">
              {{ data.description }}
            </p>

            <!-- Skill Chips -->
            <div class="mb-10 skill-chip">
              <v-chip
                v-for="(skill, index) in data.skills"
                :key="index"
                pill
                outlined
                class="primary pa-5 ma-1"
              >
                <img
                  :alt="skill.name"
                  :src="require(`~/assets/images/skills-logos/${skill.logo}`)"
                  class="logo"
                >
                <span class="pl-2">{{ skill.name }}</span>
              </v-chip>
            </div>

            <!-- View Gallery -->
            <GalleryOverlay
              :data="data"
              :theme-class="themeClass"
              v-if="isJpg(data.cover.pic)"
            />
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
  },

  methods: {
    getOrientation () {
      return this.$vuetify.breakpoint.smAndDown ? 'first' : this.orientation
    },

    isJpg (filename) {
      return filename.toLowerCase().includes('jpg')
    },

    isGif (filename) {
      return filename.toLowerCase().includes('gif')
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  font-weight: 300;
  font-size: 2em;
}

h4 {
  font-size: 1.4em;
}

.logo {
  max-width: 1.1em;
  max-height: 1.1em;
}

.description {
  font-size: 1.1em;
  color: #cccccc;
}

.skill-chip {
  span {
    font-size: 1em;
    color: slategray;
  }
}
</style>
