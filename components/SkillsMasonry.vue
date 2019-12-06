<template>
  <div>
    <client-only>
      <masonry :cols="columnBreaks" :gutter="gutterSizes">
        <div v-for="(skill, index) in skills" :key="index">
          <SkillsCard :data="skill" />
        </div>
      </masonry>
    </client-only>
  </div>
</template>

<script>
import SkillsCard from '../components/SkillsCard'

export default {
  components: {
    SkillsCard
  },

  data() {
    return {
      columnBreaks: {
        default: 7,
        2650: 6,
        2250: 5,
        1850: 4,
        1500: 3,
        1100: 2,
        700: 1
      },

      gutterSizes: {
        default: '30px'
      }
    }
  },

  computed: {
    skills() {
      return this.$store.state.skills
    }
  }
}
</script>

<style lang="scss" scoped></style>
