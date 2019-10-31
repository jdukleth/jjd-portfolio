<template>
  <v-app dark>
    <Stars v-cloak id="Stars" />
    <nuxt v-cloak id="Page" class="mb-12" />
    <Navbar v-cloak />
  </v-app>
</template>

<script>
import Stars from '../components/Stars'
import Navbar from '../components/Navbar'

export default {
  components: {
    Stars,
    Navbar
  },

  head() {
    const title = 'Jason Dukleth | Portfolio | Web Developer'

    return {
      title
    }
  }
}
</script>

<style lang="scss">
html,
body {
  font-size: 16px;
}

#Stars {
  z-index: 1;
}

#Page {
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 2;
  height: calc(100vh - 65px);
}

.theme--dark.v-application {
  background: #000000;
}
</style>
