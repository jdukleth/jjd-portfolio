<template>
  <v-content>
    <ProjectBlock
      v-for="(project, index) in projects"
      :key="index"
      :data="project"
      :orientation="index % 2 === 0 ? 'last' : 'first'"
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
          developedFor: 'Software Alternatives | Ag Spray Equipment',
          coverPic: '.jpg',
          gallery: [
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg'
          ],
          description: '',
          skills: [
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            }
          ]
        },
        {
          name: 'eComEdge v1 E-commerce Platform',
          developedFor:
            'Software Alternatives | Precision Reloading | Ag Spray Equipment | T&R Electric | Precision Fishing',
          coverPic: '.jpg',
          gallery: [
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg'
          ],
          description: '',
          skills: [
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            }
          ]
        },
        {
          name: '',
          developedFor: '',
          coverPic: '.jpg',
          gallery: [
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg'
          ],
          description: '',
          skills: [
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            }
          ]
        },
        {
          name: '',
          developedFor: '',
          coverPic: '.jpg',
          gallery: [
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg'
          ],
          description: '',
          skills: [
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            }
          ]
        },
        {
          name: '',
          developedFor: '',
          coverPic: '.jpg',
          gallery: [
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg'
          ],
          description: '',
          skills: [
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            }
          ]
        },
        {
          name: '',
          developedFor: '',
          coverPic: '.jpg',
          gallery: [
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg'
          ],
          description: '',
          skills: [
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            }
          ]
        },
        {
          name: '',
          developedFor: '',
          coverPic: '.jpg',
          gallery: [
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg'
          ],
          description: '',
          skills: [
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            }
          ]
        },
        {
          name: '',
          developedFor: '',
          coverPic: '.jpg',
          gallery: [
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg'
          ],
          description: '',
          skills: [
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            }
          ]
        },
        {
          name: '',
          developedFor: '',
          coverPic: '.jpg',
          gallery: [
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg'
          ],
          description: '',
          skills: [
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            }
          ]
        },
        {
          name: '',
          developedFor: '',
          coverPic: '.jpg',
          gallery: [
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg'
          ],
          description: '',
          skills: [
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            }
          ]
        },
        {
          name: '',
          developedFor: '',
          coverPic: '.jpg',
          gallery: [
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg'
          ],
          description: '',
          skills: [
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            }
          ]
        },
        {
          name: '',
          developedFor: '',
          coverPic: '.jpg',
          gallery: [
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg'
          ],
          description: '',
          skills: [
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            }
          ]
        },
        {
          name: '',
          developedFor: '',
          coverPic: '.jpg',
          gallery: [
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg'
          ],
          description: '',
          skills: [
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            }
          ]
        },
        {
          name: '',
          developedFor: '',
          coverPic: '.jpg',
          gallery: [
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg'
          ],
          description: '',
          skills: [
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            }
          ]
        },
        {
          name: '',
          developedFor: '',
          coverPic: '.jpg',
          gallery: [
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg'
          ],
          description: '',
          skills: [
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            }
          ]
        },
        {
          name: '',
          developedFor: '',
          coverPic: '.jpg',
          gallery: [
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg',
            '.jpg'
          ],
          description: '',
          skills: [
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            },
            {
              name: '',
              logo: ''
            }
          ]
        }
      ]
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
