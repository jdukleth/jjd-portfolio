<template>
  <div>
    <h1 id="Name">Jason Dukleth</h1>
    <div id="JobTitle">Modern Fullstack Developer</div>
    <v-divider class="mt-2 mb-2"></v-divider>
    <div class="supplemental-text">
      UI that is elegant, responsive, friendly
    </div>
    <div class="supplemental-text">
      Architecture that is fast, scalable, business-minded
    </div>
    <ContactButtons />
  </div>
</template>

<script>
import ContactButtons from '../components/ContactButtons'

export default {
  components: {
    ContactButtons
  }
}
</script>

<style lang="scss">
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
