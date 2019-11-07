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
          description:
            'Researched optimal UX design for e-commerce. Carefully planned & Photoshopped original designs for all major pages. Was asked to code a proof-of-concept within a week & rose to the challenge. Developed the homepage, header, footer, routing, structure, tech stack, and content skeletons in that time. Utilized server-side rendering for search engine optimization on a single page app. Co-developed the e-commerce GraphQL API on top of Node & Express.',
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
            },
            {
              name: 'git.js',
              logo: 'git.png'
            }
          ]
        },
        {
          name: 'eComEdge v1 E-commerce Platform',
          developedFor: 'Software Alternatives',
          coverPic: '.jpg',
          gallery: [],
          description:
            'Tasked to co-develop an in-house e-commerce platform to satisfy the unique requirements of an integrated enterprise software suite. Developed core systems; including taxonomy, filtering, product tiles, checkout steps, shipping, submit order, quote requests, and more. Put a strong emphasis on performance. Worked hand-in-hand with SEO specialists to grow business. Developed a REST API to migrate off standalone AJAX scripts. Heavily involved with business logic & client relations.',
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
            },
            {
              name: 'git.js',
              logo: 'git.png'
            }
          ]
        },
        {
          name: 'Interactive Job Application',
          developedFor: 'Software Alternatives',
          coverPic: '.jpg',
          gallery: [],
          description:
            'Asked to improve the hiring process for the largest supplier of remanufactured transformers in the US. Developed a single page app with six sections and an admin page to manage submissions. Utilized Vue.js & Vuetify to create an elegant, intuitive interace. Integrated the submissions management into the companies existing dashboard.',
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
            },
            {
              name: 'git.js',
              logo: 'git.png'
            }
          ]
        },
        {
          name: 'This Portfolio',
          developedFor: 'A Boy and His Dog',
          coverPic: '.jpg',
          gallery: [],
          description:
            'Utilized my ideal tech stack to create a crisp portfolio of work I am proud of. I was excited to include my fondness for astronomy and vivid colors. Credit to Goose for only barking in my face when necessary.',
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
            },
            {
              name: 'Nginx',
              logo: 'nginx.png'
            },
            {
              name: 'Node.js',
              logo: 'node.png'
            },
            {
              name: 'Git.js',
              logo: 'git.png'
            }
          ]
        },
        {
          name: 'Instrument Rentals & Exchange Program',
          developedFor: 'Software Alternatives',
          coverPic: '.jpg',
          gallery: [],
          description:
            'Challenged to create an online instrument rentals process for a business which delivers to hundreds of schools each week. Co-developed and integrated this website into our enterprise software suite. Solved complex technical issues with the platforms involved. Navigated massive SQL statements and simplified where possible. Built as a single page app. Was asked to develop a follow up site for their instrument exchange process. Heavy REST API and JavaScript development ensued.',
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
            },
            {
              name: 'git.js',
              logo: 'git.png'
            }
          ]
        },
        {
          name: 'Quotes Product Configurator',
          developedFor: 'Software Alternatives',
          coverPic: '.jpg',
          gallery: [],
          description:
            'Inherited a quote management project & was asked to improve it with an advanced configurator. Developed in a timely manner inside Angular; which I had little experience with. This project required mindful creation of REST API routes and performant interface code. Went on to create other features & bug fixes for this project.',
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
            },
            {
              name: 'git.js',
              logo: 'git.png'
            }
          ]
        },
        {
          name: 'eComEdge v1 Admin Dashboard',
          developedFor: 'Software Alternatives',
          coverPic: '.jpg',
          gallery: [],
          description:
            'Worked closely with clients to create tools to administrate their e-commerce site. Added onto my co-workers foundation with new sections & features.',
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
            },
            {
              name: 'git.js',
              logo: 'git.png'
            }
          ]
        },
        {
          name: 'Invoice Approval',
          developedFor: 'Software Alternatives',
          coverPic: '.jpg',
          gallery: [],
          description:
            'Tasked to create a web interface and API for a large accounts payable team. Integrated it with our existing enterprise software suite. Safely scripted image manipulation on 400 gigabytes worth of invoice documents.',
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
          description:
            'Was challenged to create useful financial analytics for the CEO of a large medical company. Studied data & turned it into useful charts & table metrics. This project was heavy on JavaScript and SQL statements. This was my first project at Software Alternatives.',
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
          description:
            'Redeveloped our timeclock interface to finish moving the company away from Java programs. Solved technical challenges for deploying the website to a warehouse tablet. Developed interface and hooked up to existing PHP scripts.',
          skills: [
            {
              name: 'JavaScript',
              logo: 'javascript.png'
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
          description:
            'Inherited this project and refactored the document scanning, interface theme, and image manipulation functions. This was done to move away from instability and security concerns with Java. Utilized the Dynamsoft Web Scanning API to vastly improve the stability and speed of this website.',
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
            },
            {
              name: 'git.js',
              logo: 'git.png'
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
          name: 'Training an Ankle-Biter',
          developedFor: 'Goose',
          coverPic: '.jpg',
          gallery: [],
          description: '',
          skills: [
            {
              name: 'ball pit fun',
              logo: 'paw-print.png'
            },
            {
              name: 'chase Geese',
              logo: 'paw-print.png'
            },
            {
              name: 'fetch',
              logo: 'paw-print.png'
            },
            {
              name: 'makeout with strangers',
              logo: 'paw-print.png'
            },
            {
              name: 'Top Gun quotes',
              logo: 'paw-print.png'
            },
            {
              name: 'sit',
              logo: 'paw-print.png'
            },
            {
              name: 'shake',
              logo: 'paw-print.png'
            },
            {
              name: 'snuggle',
              logo: 'paw-print.png'
            },
            {
              name: 'annoy dad',
              logo: 'paw-print.png'
            },
            {
              name: 'jump, jump, jump!',
              logo: 'paw-print.png'
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
