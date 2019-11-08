<template>
  <v-container fluid class="ma-0 pa-8">
    <!-- Page Title -->
    <v-row justify="center" class="mx-3 mt-n4">
      <v-col cols="auto">
        <PageTitle icon="mdi-briefcase">Resume</PageTitle>
      </v-col>
    </v-row>

    <!-- Download Resume Button -->
    <v-row justify="center" class="ma-3">
      <v-col cols="auto">
        <a href="pdf/jason-dukleth-resume.pdf" class="button" download>
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

  data() {
    return {
      quoteText: 'Skill and confidence are an unconquered army. -George Herbert'
    }
  }
}
</script>

<style scoped></style>
