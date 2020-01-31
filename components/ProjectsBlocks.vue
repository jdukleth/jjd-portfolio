<template>
  <v-content>
    <ProjectBlock
      v-for="(project, index) in projects"
      :key="index"
      :data="project"
      :orientation="getOrientation(index)"
      :theme-class="getThemeClass(index)"
      class="project-block"
    />
  </v-content>
</template>

<script>
import ProjectBlock from '../components/ProjectBlock'

export default {
  components: {
    ProjectBlock
  },

  computed: {
    projects () {
      return this.$store.state.projects
    }
  },

  methods: {
    getOrientation (index) {
      return index % 2 ? 'last' : 'first'
    },

    getThemeClass (index) {
      return 'gradient' + ((index % 4) + 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.project-block:nth-child(odd) {
  background: rgba(112, 128, 144, 0.2);
}

.project-block:nth-child(even) {
  background: rgba(112, 128, 144, 0.3);
}
</style>
