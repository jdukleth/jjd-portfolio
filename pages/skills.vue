<template>
  <v-container fluid class="ma-0 pa-0">
    <!-- Page Title -->
    <v-row justify="center" class="ma-3">
      <v-col cols="auto">
        <PageTitle icon="mdi-code-tags">SKILLS</PageTitle>
      </v-col>
    </v-row>

    <!-- Quote -->
    <v-row justify="center" class="ma-3">
      <v-col cols="auto">
        <Quote>{{ quoteText }}</Quote>
      </v-col>
    </v-row>

    <!-- Skill Cards -->
    <v-row class="mx-8">
      <!-- JavaScript Card -->
      <SkillCard logo="javascript.png" theme-class="gradient4">
        <template #title>
          JavaScript
        </template>

        <template #years>
          10 years
        </template>

        <SkillItem logo="npm.png">npm</SkillItem>
        <SkillItem logo="vue.png">Vue.js</SkillItem>
        <SkillItem logo="nuxt.png">Nuxt.js</SkillItem>
        <SkillItem logo="vuetify.png">Vuetify</SkillItem>
        <SkillItem logo="ajax.png">AJAX</SkillItem>
        <SkillItem logo="jquery.png">jQuery</SkillItem>
      </SkillCard>

      <!-- Node.js Card -->
      <SkillCard logo="node.png" theme-class="gradient3">
        <template #title>
          Node.js
        </template>

        <template #years>
          2 years + 10 js years
        </template>

        <SkillItem logo="express.png">Express.js</SkillItem>
        <SkillItem logo="graphql.png">GraphQL</SkillItem>
        <SkillItem logo="sequelize.png">Sequelize</SkillItem>
        <SkillItem logo="npm.png">npm</SkillItem>
      </SkillCard>

      <!-- SQL Card -->
      <SkillCard logo="sql.png" theme-class="gradient2">
        <template #title>
          SQL
        </template>

        <template #years>
          14 years
        </template>

        <SkillItem logo="postgresql.png">PostgreSQL</SkillItem>
        <SkillItem logo="db2.png">IBM DB2</SkillItem>
        <SkillItem logo="mysql.png">MySQL</SkillItem>
      </SkillCard>

      <!-- PHP Card -->
      <SkillCard logo="php.png" theme-class="gradient1">
        <template #title>
          PHP
        </template>

        <template #years>
          14 years
        </template>

        <SkillItem logo="composer.png">Composer</SkillItem>
        <SkillItem logo="lumen.png">Lumen (Laravel)</SkillItem>
        <SkillItem logo="apigility.png">Apigility</SkillItem>
        <SkillItem logo="zend-framework.png">Zend Framework</SkillItem>
        <SkillItem logo="wordpress.png">WordPress</SkillItem>
      </SkillCard>

      <!-- Photoshop to HTML / CSS Card -->
      <SkillCard logo="photoshop.png" theme-class="gradient4">
        <template #title>
          Design &amp; Code
        </template>

        <template #years>
          16 years
        </template>

        <SkillItem logo="photoshop.png">Photoshop</SkillItem>
        <SkillItem logo="html.png">HTML</SkillItem>
        <SkillItem logo="css.png">CSS</SkillItem>
        <SkillItem logo="sass.png">SASS</SkillItem>
      </SkillCard>

      <!-- Source Control Card -->
      <SkillCard logo="git.png" theme-class="gradient3">
        <template #title>
          Source Control
        </template>

        <template #years>
          4 years
        </template>

        <SkillItem logo="git.png">Git</SkillItem>
        <SkillItem logo="gitlab.png">GitLab</SkillItem>
        <SkillItem logo="github.png">GitHub</SkillItem>
      </SkillCard>

      <!-- Deployment Card -->
      <SkillCard logo="nginx.png" theme-class="gradient2">
        <template #title>
          Deployment
        </template>

        <template #years>
          14 years
        </template>

        <SkillItem logo="nginx.png">Nginx</SkillItem>
        <SkillItem logo="apache.png">Apache</SkillItem>
        <SkillItem logo="zend-server.png">Zend Server</SkillItem>
        <SkillItem logo="docker.png">Docker</SkillItem>
        <SkillItem logo="norton.png">Norton SSL</SkillItem>
        <SkillItem logo="lets-encrypt.png">Let's Encrypt SSL</SkillItem>
      </SkillCard>

      <!-- Code Crafting -->
      <SkillCard logo="visual-code.png" theme-class="gradient1">
        <template #title>
          Code Crafting
        </template>

        <template #years>
          16 years
        </template>

        <SkillItem logo="visual-code.png">Visual Code</SkillItem>
        <SkillItem logo="sublime-text.png">Sublime Text</SkillItem>
        <SkillItem logo="phpstorm.png">PHPStorm</SkillItem>
        <SkillItem logo="nano.png">GNU Nano</SkillItem>
      </SkillCard>

      <!-- Operating Systems Card -->
      <SkillCard logo="ubuntu.png" theme-class="gradient4">
        <template #title>
          Operating Systems
        </template>

        <template #years>
          18 years
        </template>

        <SkillItem logo="ubuntu.png">Ubuntu</SkillItem>
        <SkillItem logo="windows.png">Windows</SkillItem>
        <SkillItem logo="android.png">Android</SkillItem>
        <SkillItem logo="ibm-i.png">IBM i / i5 / OS/400</SkillItem>
      </SkillCard>

      <!-- Killed in Action Card -->
      <!-- Tombstone icon made by Darius Dan from flaticon.com -->
      <SkillCard logo="tombstone.png" theme-class="gradient3">
        <template #title>
          Killed in Action
        </template>

        <template #years>
          skills sent to the farm
        </template>

        <SkillItem logo="flash.png">Flash Animation</SkillItem>
        <SkillItem logo="actionscript.png">ActionScript</SkillItem>
        <SkillItem logo="coldfusion.png">ColdFusion</SkillItem>
        <SkillItem logo="dreamweaver.png">Dreamweaver</SkillItem>
        <SkillItem logo="angelfire.png">Angelfire</SkillItem>
      </SkillCard>

      <!-- t o d o CARD -->
      <SkillCard logo="react.png" theme-class="gradient2">
        <template #title>
          My TODOs
        </template>

        <template #years>
          skills i yearn to learn
        </template>

        <SkillItem logo="react.png">React</SkillItem>
        <SkillItem logo="python.png">Python</SkillItem>
        <SkillItem logo="elasticsearch.png">Elasticsearch</SkillItem>
        <SkillItem logo="net-core.png">.NET Core</SkillItem>
        <SkillItem logo="vim.png">VIM</SkillItem>
      </SkillCard>
    </v-row>
  </v-container>
</template>

<script>
import Quote from '../components/Quote'
import PageTitle from '../components/PageTitle'
import SkillCard from '../components/SkillCard'
import SkillItem from '../components/SkillItem'

export default {
  components: {
    Quote,
    PageTitle,
    SkillCard,
    SkillItem
  },

  data() {
    return {
      quoteText: 'Skill and confidence are an unconquered army. -George Herbert'
    }
  }
}
</script>

<style lang="scss" scoped></style>
