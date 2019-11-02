<template>
  <v-bottom-navigation
    compact
    dark
    app
    fixed
    height="auto"
    :class="{
      'v-bottom-navigation--horizontal': $vuetify.breakpoint.mdAndUp
    }"
  >
    <!-- Nameplate Button -->
    <v-flex>
      <nav-button
        display-icon="mdi-account-card-details"
        color-class="gradient4"
        nuxt-route="/"
      >
        Nameplate
      </nav-button>
    </v-flex>

    <!-- Skills Button -->
    <v-flex>
      <nav-button
        display-icon="mdi-code-tags"
        color-class="gradient3"
        nuxt-route="/skills"
      >
        Skills
      </nav-button>
    </v-flex>

    <!-- Projects Button -->
    <v-flex>
      <nav-button
        display-icon="mdi-hammer"
        color-class="gradient2"
        nuxt-route="/projects"
      >
        Projects
      </nav-button>
    </v-flex>

    <!-- Resume Button -->
    <v-flex>
      <nav-button
        display-icon="mdi-briefcase"
        color-class="gradient1"
        nuxt-route="resume"
      >
        Resume
      </nav-button>
    </v-flex>
  </v-bottom-navigation>
</template>

<script>
import NavButton from '../components/NavButton'

export default {
  components: {
    NavButton
  },

  data() {
    return {
      theme: {
        disable: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.theme--dark.v-bottom-navigation {
  background-color: transparent;
}
</style>
