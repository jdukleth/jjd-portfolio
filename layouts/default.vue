<template>
  <v-app
    dark
    :class="{
      xs: $vuetify.breakpoint.xs,
      sm: $vuetify.breakpoint.sm,
      md: $vuetify.breakpoint.md,
      lg: $vuetify.breakpoint.lg,
      xl: $vuetify.breakpoint.xl
    }"
  >
    <Stars v-cloak id="Stars" />
    <Fullscreen id="Fullscreen" />
    <nuxt v-cloak id="Page" />
    <Navbar v-cloak />
  </v-app>
</template>

<script>
import Stars from '../components/Stars'
import Fullscreen from '../components/Fullscreen'
import Navbar from '../components/Navbar'

export default {
  components: {
    Stars,
    Fullscreen,
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
/* *************************************** */
/*  Vuetify Breakpoint App-Level Styles    */
/*           *  -16px on Desktop           */
/* *************************************** */
// < 600px
.xs {
  font-size: 12px;
}

// 600px > < 960px
.sm {
  font-size: 16px;
}

// 960px > < 1264px*
.md {
  font-size: 20px;
}

// 1264px* > < 1904px*
.lg {
  font-size: 24px;
}

// > 1904px*
.xl {
  font-size: 28px;
}

/* *************************************** */
/*  Section Styles                         */
/* *************************************** */
#Stars {
  z-index: 1;
}

#Page {
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 2;
  height: calc(100vh - 65px);
}

#Fullscreen {
  z-index: 3;
  position: absolute;
  top: 0;
  right: 0;
}

/* *************************************** */
/*  Vuetify App-Level Style Fixes          */
/* *************************************** */
.theme--dark.v-application {
  background: #000000;
}
</style>
