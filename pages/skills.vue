<template>
  <v-container fluid class="ma-0 pa-8">
    <!-- Page Title -->
    <v-row justify="center" class="mx-3 mt-n4">
      <v-col cols="auto">
        <PageTitle icon="mdi-code-tags">
          SKILLS
        </PageTitle>
      </v-col>
    </v-row>

    <!-- Skill Cards -->
    <SkillsMasonry />
  </v-container>
</template>

<script>
import PageTitle from '../components/PageTitle'
import SkillsMasonry from '../components/SkillsMasonry'

export default {
  components: {
    PageTitle,
    SkillsMasonry
  }
}
</script>

<style scoped></style>
