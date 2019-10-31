<template>
  <v-bottom-navigation compact dark app fixed horizontal height="48">
    <v-flex>
      <v-btn
        icon
        value="Nameplate"
        block
        class="pa-3 gradient4 gradient4--text"
      >
        <span>Nameplate</span>
        <v-icon size="32px">mdi-account-card-details</v-icon>
      </v-btn>
    </v-flex>
    <v-flex>
      <v-btn icon value="Skills" block class="pa-3 gradient3 gradient3--text">
        <span>Skills</span>
        <v-icon size="32px">mdi-trophy</v-icon>
      </v-btn>
    </v-flex>
    <v-flex>
      <v-btn icon value="Work" block class="pa-3 gradient2 gradient2--text">
        <span>Work</span>
        <v-icon size="32px">mdi-briefcase</v-icon>
      </v-btn>
    </v-flex>
    <v-flex>
      <v-btn icon value="Resume" block class="pa-3 gradient1 gradient1--text">
        <span>Resume</span>
        <v-icon size="32px">mdi-file-account</v-icon>
      </v-btn>
    </v-flex>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      theme: {
        disable: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.theme--dark.v-bottom-navigation .v-btn:not(.v-btn--active) {
  color: rgba(0, 0, 0, 1) !important;
  font-size: 1em;
}

.theme--dark.v-bottom-navigation .v-btn:not(.v-btn--active):hover {
  font-size: 1em;
  margin-top: -8px;
  border-top: 8px solid white;
}

.v-item-group.v-bottom-navigation .v-btn.v-btn--active {
  // color: rgba(112, 128, 144, 1) !important;
  font-size: 1em;
  background-color: transparent !important;
  border-bottom: 4px solid white;
  margin-top: -4px;
}

.theme--dark.v-bottom-navigation {
  background-color: transparent;
}

.flex button {
  height: 56px;
}
</style>
