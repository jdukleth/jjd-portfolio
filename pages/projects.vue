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

    <!-- Project Cards -->
    <ProjectsBlocks class="mt-6" />
  </v-container>
</template>

<script>
import PageTitle from '../components/PageTitle'
import ProjectsBlocks from '../components/ProjectsBlocks'

export default {
  components: {
    PageTitle,
    ProjectsBlocks
  }
}
</script>

<style scoped></style>
