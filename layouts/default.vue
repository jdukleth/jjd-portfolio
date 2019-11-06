<template>
  <v-app :class="breakpointClasses" dark>
    <Stars v-cloak id="Stars" />
    <Fullscreen v-cloak id="Fullscreen" />
    <nuxt v-cloak id="Page" class="pa-8" />
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

  data() {
    return {
      breakpointClasses: {
        xs: this.$vuetify.breakpoint.xs,
        sm: this.$vuetify.breakpoint.sm,
        md: this.$vuetify.breakpoint.md,
        lg: this.$vuetify.breakpoint.lg,
        xl: this.$vuetify.breakpoint.xl
      }
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
  height: calc(100vh - 75px);
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

[v-cloak],
[v-cloak] * {
  display: none;
}
</style>
