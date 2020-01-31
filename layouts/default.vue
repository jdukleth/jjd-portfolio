<template>
  <v-app
    :class="{
      xs: this.$vuetify.breakpoint.xs,
      sm: this.$vuetify.breakpoint.sm,
      md: this.$vuetify.breakpoint.md,
      lg: this.$vuetify.breakpoint.lg,
      xl: this.$vuetify.breakpoint.xl
    }"
    dark
  >
    <Stars id="Stars" v-cloak />
    <Fullscreen id="Fullscreen" v-cloak />
    <nuxt id="Page" v-cloak class="pa-8" />
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
  �webkit-overflow-scrolling: touch; /* iPad fix */
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
/*  Vuetify App-Level Styles & Fixes          */
/* *************************************** */
.theme--dark.v-application {
  background: #000000;
}

[v-cloak],
[v-cloak] * {
  display: none;
}

.nuxt-progress {
  height: 6px !important;
  background: linear-gradient(
    90deg,
    rgba(251, 123, 69, 1) 0%,
    rgba(224, 79, 133, 1) 33%,
    rgba(130, 107, 179, 1) 66%,
    rgba(0, 160, 167, 1) 100%
  );
}
</style>
