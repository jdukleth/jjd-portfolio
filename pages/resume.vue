<template>
  <v-container fluid class="ma-0 pa-8">
    <!-- Page Title -->
    <v-row justify="center" class="mx-3 mt-n4">
      <v-col cols="auto">
        <PageTitle icon="mdi-briefcase">
          RESUME
        </PageTitle>
      </v-col>
    </v-row>

    <!-- Download Resume Button -->
    <v-row justify="center" class="ma-3">
      <v-col cols="auto">
        <a :href="resume.path" class="button" download>
          <v-btn outlined x-large color="gradient1">
            Download Resume
          </v-btn>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageTitle from '../components/PageTitle'

export default {
  components: {
    PageTitle
  },

  computed: {
    resume () {
      return this.$store.state.resume
    }
  }
}
</script>

<style scoped></style>
