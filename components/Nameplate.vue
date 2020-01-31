<template>
  <div>
    <h1 id="Name">
      {{ nameplate.name }}
    </h1>
    <div id="JobTitle">
      {{ nameplate.jobTitle }}
    </div>
    <v-divider class="mt-2 mb-2" />
    <div class="supplemental-text">
      {{ nameplate.tagline1 }}
    </div>
    <div class="supplemental-text">
      {{ nameplate.tagline2 }}
    </div>
    <ContactButtons />
  </div>
</template>

<script>
import ContactButtons from '../components/ContactButtons'

export default {
  components: {
    ContactButtons
  },

  computed: {
    nameplate () {
      return this.$store.state.nameplate
    }
  }
}
</script>

<style lang="scss" scoped>
#Name {
  font-family: 'Ubuntu', sans-serif;
  font-size: 3em;
  letter-spacing: 0.15em;
}

#JobTitle {
  font-size: 1.5em;
  color: slategray;
  letter-spacing: 0.1em;
}

.supplemental-text {
  font-size: 1em;
  color: slategray;
  letter-spacing: 0.1em;
}
</style>
