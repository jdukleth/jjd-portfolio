<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="mx-auto my-6" color="transparent" tiled>
      <!-- Top Section / Main Logo -->
      <v-row class="ma-0">
        <v-col class="pa-0">
          <v-card
            align="center"
            justify="center"
            height="250"
            color="rgba(112, 128, 144, 0.05)"
          >
            <img :src="require(`~/assets/images/skills-logos/${data.logo}`)" />

            <!-- Hover Content -->
            <v-expand-transition>
              <div
                v-if="hover"
                :class="
                  data.themeClass +
                    ' d-flex transition-fast-in-fast-out darken-2 v-card--reveal display-3 white--text'
                "
                style="height: 100%;"
              >
                insert experience
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>

      <!-- Middle Section -->
      <v-card-text class="pt-6">
        <!-- Title -->
        <h3 :class="data.themeClass + '--text display-1 font-weight-light'">
          {{ data.name }}
        </h3>

        <!-- Subheading -->
        <div class="font-weight-light grey--text title my-1">
          {{ data.years }}
        </div>

        <!-- Skill List / Items -->
        <div class="title mb-2 mt-5">
          <v-list disabled color="rgba(112, 128, 144, 0.05">
            <v-list-item-group
              v-for="(skill, index) in data.skillItems"
              :key="index"
            >
              <SkillsItem :data="skill" />
            </v-list-item-group>
          </v-list>
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
import SkillsItem from '../components/SkillsItem'

export default {
  components: {
    SkillsItem
  },

  props: {
    data: {
      type: Object,
      default: null
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
  background: rgba(112, 128, 144, 0.1);
}

img {
  max-height: 155px;
  max-width: 80%;
  line-height: 255px;
  vertical-align: middle;
}
</style>
