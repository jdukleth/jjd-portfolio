<template>
  <v-container fluid class="ma-0 pa-0">
    <!-- Page Title -->
    <v-row justify="center">
      <v-col cols="auto">
        <PageTitle icon="mdi-code-tags">SKILLS</PageTitle>
      </v-col>
    </v-row>

    <!-- Quote -->
    <v-row justify="center" class="ma-3">
      <v-col cols="auto">
        <Quote>{{ quoteText }}</Quote>
      </v-col>
    </v-row>

    <!-- Skill Cards -->
    <SkillsMasonry></SkillsMasonry>
  </v-container>
</template>

<script>
import PageTitle from '../components/PageTitle'
import Quote from '../components/Quote'
import SkillsMasonry from '../components/SkillsMasonry'

export default {
  components: {
    PageTitle,
    Quote,
    SkillsMasonry
  },

  data() {
    return {
      quoteText: 'Skill and confidence are an unconquered army. -George Herbert'
    }
  }
}
</script>

<style scoped></style>
