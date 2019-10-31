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
    <v-flex>
      <nav-button
        display-icon="mdi-account-card-details"
        display-text="Nameplate"
        color-class="gradient4"
      />
    </v-flex>
    <v-flex>
      <nav-button
        display-icon="mdi-trophy"
        display-text="Skills"
        color-class="gradient3"
      />
    </v-flex>
    <v-flex>
      <nav-button
        display-icon="mdi-briefcase"
        display-text="Work"
        color-class="gradient2"
      />
    </v-flex>
    <v-flex>
      <nav-button
        display-icon="mdi-file-account"
        display-text="Resume"
        color-class="gradient1"
      />
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
