<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row id="PageContent" align="center" justify="center">
      <div class="ma-5">
        <Logo />
      </div>
      <div class="ma-5">
        <Nameplate />
      </div>
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
