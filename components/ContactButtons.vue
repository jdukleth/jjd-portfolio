<template>
  <div id="ContactButtons" class="ma-1">
    <span v-for="(button, index) in nameplate.contactButtons" :key="index">
      <v-btn
        v-if="button.type === 'link'"
        :href="button.url"
        icon
        target="_blank"
        class="mx-5 pa-7"
      >
        <v-icon size="32">{{ button.icon }}</v-icon>
      </v-btn>

      <v-btn
        v-else-if="button.type === 'phone'"
        @click="callPhone(button)"
        icon
        class="mx-5 pa-7"
      >
        <v-icon size="32">{{ button.icon }}</v-icon>
      </v-btn>

      <v-btn
        v-else-if="button.type === 'email'"
        @click="sendEmail(button)"
        icon
        class="mx-5 pa-7"
      >
        <v-icon size="32">{{ button.icon }}</v-icon>
      </v-btn>
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    nameplate () {
      return this.$store.state.nameplate
    }
  },

  methods: {
    callPhone (button) {
      this.$swal.fire({
        title: `<a href="tel:${button.phoneNumber}" target="_blank">${button.phoneNumber}</a>`,
        text: button.tagline,
        width: 600,
        padding: '3em',
        backdrop: 'rgba(0,0,0,0.9)'
      })
    },

    sendEmail (button) {
      this.$swal.fire({
        title: `<a href="mailto:${button.email}" target="_blank">${button.email}</a>`,
        text: button.tagline,
        width: 600,
        padding: '3em',
        backdrop: 'rgba(0,0,0,0.9)'
      })
    }
  }
}
</script>

<style lang="scss">
#ContactButtons {
  .v-btn {
    color: slategray;
    height: auto; // necessary for Chrome;
    width: auto; // static dimensions mess up text alignment
  }

  .v-btn:hover {
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.3);
  }
}

.swal2-popup {
  font-family: 'Ubuntu', sans-serif !important;
  background-color: rgba(0, 0, 0, 0.3) !important;
  border: 6px solid #e04f85 !important;
  letter-spacing: 0.1em !important;

  .swal2-title a {
    font-family: 'Ubuntu', sans-serif !important;
    font-size: 1em !important;
    color: #826bb3 !important;
  }

  .swal2-content {
    font-size: 1.5em !important;
    color: #00a0a7 !important;
  }

  .swal2-confirm.swal2-styled {
    background: #fb7b45 !important;
    border-right-color: #fb7b45 !important;
    border-left-color: #fb7b45 !important;
    color: white !important;
  }
}
</style>
