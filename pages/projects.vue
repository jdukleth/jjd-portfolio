<template>
  <v-container fluid class="px-0">
    <!-- Page Title -->
    <v-row justify="center" class="mx-3 mt-n4">
      <v-col cols="auto">
        <PageTitle icon="mdi-hammer">
          PROJECTS
        </PageTitle>
      </v-col>
    </v-row>

    <!-- Quote -->
    <v-row justify="center" class="ma-3">
      <v-col cols="auto">
        <Quote>{{ quoteText }}</Quote>
      </v-col>
    </v-row>

    <!-- Team Effort Text -->
    <v-row justify="center" class="mx-12 mt-n4">
      <v-col cols="auto">
        <InfoBox>{{ teamText }}</InfoBox>
      </v-col>
    </v-row>

    <!-- Project Cards -->
    <ProjectsBlocks class="mt-6" />
  </v-container>
</template>

<script>
import PageTitle from '../components/PageTitle'
import Quote from '../components/Quote'
import InfoBox from '../components/InfoBox'
import ProjectsBlocks from '../components/ProjectsBlocks'

export default {
  components: {
    PageTitle,
    Quote,
    InfoBox,
    ProjectsBlocks
  },

  data () {
    return {
      quoteText:
        'If I have seen further, it is by standing on the shoulders of giants. -Isaac Newton',
      teamText:
        'Please note that some projects are a team effort. I chose screenshots based on work which I either completely or heavily developed.'
    }
  }
}
</script>

<style scoped></style>
