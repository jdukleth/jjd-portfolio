<template>
  <div id="ContactButtons" class="ma-1">
    <v-btn
      icon
      href="https://www.linkedin.com/in/jason-dukleth-888802143/"
      target="_blank"
      class="mx-5 pa-7"
    >
      <v-icon size="32">mdi-linkedin</v-icon>
    </v-btn>

    <v-btn icon class="mx-5 pa-7" @click="callPhone">
      <v-icon size="32">mdi-phone</v-icon>
    </v-btn>

    <v-btn icon class="mx-5 pa-7" @click="sendEmail">
      <v-icon size="32">mdi-email</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    callPhone() {
      this.$swal.fire({
        title: '<a href="tel:605-251-5899" target="_blank">605-251-5899</a>',
        text: "Let's Work Together!",
        width: 600,
        padding: '3em',
        backdrop: 'rgba(0,0,0,0.9)'
      })
    },

    sendEmail() {
      this.$swal.fire({
        title:
          '<a href="mailto:jason@dukleth.com" target="_blank">jason@dukleth.com</a>',
        text: "Let's Work Together!",
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
    color: white;
  }
}

.swal2-popup {
  font-family: 'Ubuntu', sans-serif;
  background: rgba(0, 0, 0, 0.3);
  border: 6px solid #e04f85;
  letter-spacing: 0.1em;

  .swal2-title a {
    font-size: 3rem;
    color: #826bb3;
  }

  .swal2-content {
    font-size: 2em;
    color: #00a0a7;
  }

  .swal2-confirm.swal2-styled {
    background: #fb7b45;
    border-right-color: #fb7b45;
    border-left-color: #fb7b45;
    color: white;
  }
}
</style>
