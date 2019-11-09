<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="mx-auto my-6" color="transparent" tiled>
      <!-- Top Section / Main Logo -->
      <v-row class="ma-0">
        <v-col class="pa-0">
          <v-card
            height="250"
            align="center"
            justify="center"
            color="rgba(112, 128, 144, 0.05)"
          >
            <img
              class="logo"
              :alt="data.name"
              :src="require(`~/assets/images/skills-logos/${data.logo}`)"
            />

            <!-- Hover Content -->
            <v-expand-transition>
              <div
                v-if="hover"
                align="start"
                :class="
                  data.themeClass +
                    ' pl-11 pr-3 py-3 title transition-fast-in-fast-out v-card--reveal'
                "
              >
                <ul>
                  <li v-for="(use, index) in data.uses" :key="index">
                    {{ use }}
                  </li>
                </ul>
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
        <div class="font-weight-light primary--text headline my-2">
          {{ data.years }}
        </div>

        <!-- Skill List / Items -->
        <div class="title mb-2 mt-5">
          <v-list disabled color="rgba(112, 128, 144, 0.05)">
            <v-list-item-group>
              <SkillsItem
                v-for="(skill, index) in data.skillItems"
                :key="index"
                :data="skill"
              />
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
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;

  ul {
    margin: 0 !important;
    padding: 0 !important;
    text-align: left !important;
    list-style-type: square;

    li {
      color: white;
    }
  }
}

.v-card__text {
  position: relative;
  background: rgba(112, 128, 144, 0.1);
}

img.logo {
  height: 155px;
  max-height: 155px;
  margin-top: 50px;
}
</style>
