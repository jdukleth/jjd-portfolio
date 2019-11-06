<template>
  <v-content>
    <ProjectBlock
      v-for="(project, index) in projects"
      :key="index"
      :data="project"
      :orientation="getOrientation(index)"
      :theme-class="getThemeClass(index)"
      class="project-block"
    />
  </v-content>
</template>

<script>
import ProjectBlock from '../components/ProjectBlock'

export default {
  components: {
    ProjectBlock
  },

  data() {
    return {
      projects: [
        {
          name: 'eComEdge v2 Design & Prototype',
          developedFor: 'Software Alternatives',
          coverPic: '.jpg',
          gallery: [],
          description: '',
          skills: [
            {
              name: 'Photoshop',
              logo: 'photoshop.png'
            },
            {
              name: 'Vue.js',
              logo: 'vue.png'
            },
            {
              name: 'Nuxt.js',
              logo: 'nuxt.png'
            },
            {
              name: 'Vuetify',
              logo: 'vuetify.png'
            },
            {
              name: 'Node.js',
              logo: 'node.png'
            },
            {
              name: 'Express.js',
              logo: 'express.png'
            },
            {
              name: 'GraphQL',
              logo: 'graphql.png'
            }
          ]
        },
        {
          name: 'eComEdge v1 E-commerce Platform',
          developedFor: 'Software Alternatives',
          coverPic: '.jpg',
          gallery: [],
          description: '',
          skills: [
            {
              name: 'JavaScript',
              logo: 'javascript.png'
            },
            {
              name: 'SQL',
              logo: 'sql.png'
            },
            {
              name: 'PHP',
              logo: 'php.png'
            },
            {
              name: 'Apigility',
              logo: 'apigility.png'
            },
            {
              name: 'Lumen',
              logo: 'lumen.png'
            },
            {
              name: 'AJAX',
              logo: 'ajax.png'
            },
            {
              name: 'Photoshop',
              logo: 'photoshop.png'
            }
          ]
        },
        {
          name: 'Interactive Job Application',
          developedFor: 'Software Alternatives',
          coverPic: '.jpg',
          gallery: [],
          description: '',
          skills: [
            {
              name: 'Vue.js',
              logo: 'vue.png'
            },
            {
              name: 'Vuetify',
              logo: 'vuetify.png'
            },
            {
              name: 'AJAX',
              logo: 'ajax.png'
            }
          ]
        },
        {
          name: 'This Portfolio',
          developedFor: 'My Dog and Myself',
          coverPic: '.jpg',
          gallery: [],
          description: '',
          skills: [
            {
              name: 'Vue.js',
              logo: 'vue.png'
            },
            {
              name: 'Nuxt.js',
              logo: 'nuxt.png'
            },
            {
              name: 'Vuetify',
              logo: 'vuetify.png'
            },
            {
              name: 'Photoshop',
              logo: 'photoshop.png'
            }
          ]
        },
        {
          name: 'Instrument Rentals & Exchange Program',
          developedFor: 'Software Alternatives',
          coverPic: '.jpg',
          gallery: [],
          description: '',
          skills: [
            {
              name: 'JavaScript',
              logo: 'javascript.png'
            },
            {
              name: 'SQL',
              logo: 'sql.png'
            },
            {
              name: 'PHP',
              logo: 'php.png'
            },
            {
              name: 'Apigility',
              logo: 'apigility.png'
            },
            {
              name: 'AJAX',
              logo: 'ajax.png'
            }
          ]
        },
        {
          name: 'Quote Management Configurator',
          developedFor: 'Software Alternatives',
          coverPic: '.jpg',
          gallery: [],
          description: '',
          skills: [
            {
              name: 'Angular',
              logo: 'angular.png'
            },
            {
              name: 'SQL',
              logo: 'sql.png'
            },
            {
              name: 'PHP',
              logo: 'php.png'
            },
            {
              name: 'Apigility',
              logo: 'apigility.png'
            },
            {
              name: 'AJAX',
              logo: 'ajax.png'
            }
          ]
        },
        {
          name: 'eComEdge v1 Admin Dashboard',
          developedFor: 'Software Alternatives',
          coverPic: '.jpg',
          gallery: [],
          description: '',
          skills: [
            {
              name: 'JavaScript',
              logo: 'javascript.png'
            },
            {
              name: 'SQL',
              logo: 'sql.png'
            },
            {
              name: 'PHP',
              logo: 'php.png'
            },
            {
              name: 'Apigility',
              logo: 'apigility.png'
            },
            {
              name: 'AJAX',
              logo: 'ajax.png'
            }
          ]
        },
        {
          name: 'Invoice Approval',
          developedFor: 'Software Alternatives',
          coverPic: '.jpg',
          gallery: [],
          description: '',
          skills: [
            {
              name: 'JavaScript',
              logo: 'javascript.png'
            },
            {
              name: 'SQL',
              logo: 'sql.png'
            },
            {
              name: 'PHP',
              logo: 'php.png'
            },
            {
              name: 'AJAX',
              logo: 'ajax.png'
            }
          ]
        },
        {
          name: 'Financial Dashboard',
          developedFor: 'Software Alternatives',
          coverPic: '.jpg',
          gallery: [],
          description: '',
          skills: [
            {
              name: 'JavaScript',
              logo: 'javascript.png'
            },
            {
              name: 'SQL',
              logo: 'sql.png'
            },
            {
              name: 'PHP',
              logo: 'php.png'
            },
            {
              name: 'AJAX',
              logo: 'ajax.png'
            }
          ]
        },
        {
          name: 'Time Punching & Tracking',
          developedFor: 'Software Alternatives',
          coverPic: '.jpg',
          gallery: [],
          description: '',
          skills: [
            {
              name: 'JavaScript',
              logo: 'javascript.png'
            },
            {
              name: 'SQL',
              logo: 'sql.png'
            },
            {
              name: 'PHP',
              logo: 'php.png'
            },
            {
              name: 'AJAX',
              logo: 'ajax.png'
            }
          ]
        },
        {
          name: 'Document Management Refactoring',
          developedFor: 'Software Alternatives',
          coverPic: '.jpg',
          gallery: [],
          description: '',
          skills: [
            {
              name: 'JavaScript',
              logo: 'javascript.png'
            },
            {
              name: 'SQL',
              logo: 'sql.png'
            },
            {
              name: 'PHP',
              logo: 'php.png'
            },
            {
              name: 'AJAX',
              logo: 'ajax.png'
            }
          ]
        },
        {
          name: 'Other Fun, Antiquated Projects',
          developedFor: 'Organizations & Myself',
          coverPic: '.jpg',
          gallery: [],
          description: '',
          skills: [
            {
              name: 'Photoshop',
              logo: 'photoshop.png'
            },
            {
              name: 'JavaScript',
              logo: 'javascript.png'
            },
            {
              name: 'SQL',
              logo: 'sql.png'
            },
            {
              name: 'PHP',
              logo: 'php.png'
            },
            {
              name: 'Flash',
              logo: 'flash.png'
            },
            {
              name: 'ColdFusion',
              logo: 'coldfusion.png'
            }
          ]
        },
        {
          name: 'How to Train an Ankle-Biter',
          developedFor: 'Goose',
          coverPic: '.jpg',
          gallery: [],
          description: '',
          skills: [
            {
              name: 'Photoshop',
              logo: 'photoshop.png'
            },
            {
              name: 'JavaScript',
              logo: 'javascript.png'
            },
            {
              name: 'SQL',
              logo: 'sql.png'
            },
            {
              name: 'PHP',
              logo: 'php.png'
            },
            {
              name: 'Flash',
              logo: 'flash.png'
            },
            {
              name: 'ColdFusion',
              logo: 'coldfusion.png'
            }
          ]
        }
      ]
    }
  },

  methods: {
    getOrientation(index) {
      return index % 2 ? 'last' : 'first'
    },

    getThemeClass(index) {
      return 'gradient' + ((index % 4) + 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.project-block:nth-child(odd) {
  background: rgba(112, 128, 144, 0.2);
}

.project-block:nth-child(even) {
  background: rgba(112, 128, 144, 0.3);
}
</style>
