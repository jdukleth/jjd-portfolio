<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto my-6"
      color="transparent"
      tiled
      min-width="320"
      max-width="320"
    >
      <!-- Top Section / Main Logo -->
      <v-row class="ma-0">
        <v-col class="pa-0">
          <v-card
            align="center"
            justify="center"
            height="225"
            color="rgba(255, 255, 255, 0.05)"
          >
            <img :src="require(`~/assets/images/skills-logos/${logo}`)" />

            <!-- Hover Content -->
            <v-expand-transition>
              <div
                v-if="hover"
                :class="
                  themeClass +
                    ' d-flex transition-fast-in-fast-out darken-2 v-card--reveal display-3 white--text'
                "
                style="height: 100%;"
              >
                <slot name="experience"></slot>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>

      <!-- Middle Section -->
      <v-card-text class="pt-6">
        <!-- Title -->
        <h3 :class="themeClass + '--text display-1 font-weight-light'">
          <slot name="title"></slot>
        </h3>

        <!-- Subheading -->
        <div class="font-weight-light grey--text title my-1">
          <slot name="years"></slot>
        </div>

        <!-- Skill List / Items -->
        <div class="title mb-2 mt-5">
          <v-list disabled>
            <v-list-item-group class="skill-list">
              <slot></slot>
            </v-list-item-group>
          </v-list>
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      default: null
    },
    themeClass: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
}

.v-card__text {
  position: relative;
  background: rgba(255, 255, 255, 0.1);
}

img {
  max-height: 155px;
  max-width: 80%;
  line-height: 255px;
  vertical-align: middle;
}
</style>
