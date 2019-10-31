<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row id="PageContent" align="center" justify="center">
      <v-col
        cols="12"
        md="auto"
        align="center"
        justify="center"
        :class="{
          'pa-8': $vuetify.breakpoint.smAndDown,
          'pl-12': $vuetify.breakpoint.smAndDown,
          'pb-3': $vuetify.breakpoint.smAndDown,
          'pa-5': $vuetify.breakpoint.mdAndUp
        }"
      >
        <Logo />
      </v-col>
      <v-col
        cols="12"
        md="auto"
        align="center"
        justify="center"
        :class="{
          'pa-12': $vuetify.breakpoint.smAndDown,
          'pt-3': $vuetify.breakpoint.smAndDown,
          'pa-5': $vuetify.breakpoint.mdAndUp
        }"
      >
        <Nameplate />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Logo from '../components/Logo'
import Nameplate from '../components/Nameplate'

export default {
  components: {
    Logo,
    Nameplate
  }
}
</script>

<style scoped>
#PageContent {
  height: 100%;
}
</style>
