<template>
  <div>
    <client-only>
      <masonry :cols="columnBreaks" :gutter="gutterSizes">
        <div v-for="(skill, index) in skills" :key="index">
          <SkillsCard :data="skill" />
        </div>
      </masonry>
    </client-only>
  </div>
</template>

<script>
import SkillsCard from '../components/SkillsCard'

export default {
  components: {
    SkillsCard
  },

  data() {
    return {
      skills: [
        {
          name: 'JavaScript',
          logo: 'javascript.png',
          years: '10 years',
          themeClass: 'gradient4',
          skillItems: [
            {
              logo: 'npm.png',
              name: 'npm'
            },
            {
              logo: 'vue.png',
              name: 'Vue.js'
            },
            {
              logo: 'nuxt.png',
              name: 'Nuxt.js'
            },
            {
              logo: 'vuetify.png',
              name: 'Vuetify'
            },
            {
              logo: 'ajax.png',
              name: 'AJAX'
            },
            {
              logo: 'jquery.png',
              name: 'jQuery'
            }
          ],
          uses: [
            'AJAX-driven eCommerce platform',
            'rentals & exchange program',
            'advanced configurators',
            'interactive job application',
            'financial dashboard',
            'this portfolio',
            '... many more'
          ]
        },

        {
          name: 'PHP',
          logo: 'php.png',
          years: '14 years',
          themeClass: 'gradient3',
          skillItems: [
            {
              logo: 'composer.png',
              name: 'Composer'
            },
            {
              logo: 'lumen.png',
              name: 'Lumen (Laravel)'
            },
            {
              logo: 'apigility.png',
              name: 'Apigility'
            },
            {
              logo: 'zend-framework.png',
              name: 'Zend Framework'
            },
            {
              logo: 'wordpress.png',
              name: 'WordPress'
            }
          ],
          uses: [
            '5 enterprise eCommerce sites',
            'eCommerce platform & admin dash',
            '12+ REST APIs',
            'rentals & exchange program',
            'invoice approval system',
            'shipping, payment, doc scanning',
            '... many more'
          ]
        },
        {
          name: 'SQL',
          logo: 'sql.png',
          years: '14 years',
          themeClass: 'gradient2',
          skillItems: [
            {
              logo: 'postgresql.png',
              name: 'PostgreSQL'
            },
            {
              logo: 'db2.png',
              name: 'IBM DB2'
            },
            {
              logo: 'mysql.png',
              name: 'MySQL'
            }
          ],
          uses: [
            'enterprise integration',
            'relational schema design',
            'normalization',
            'complex queries',
            'stored procedures',
            'transactions',
            '... many projects finished'
          ]
        },
        {
          name: 'Node.js',
          logo: 'node.png',
          years: '1.5 years + 10 JS years',
          themeClass: 'gradient1',
          skillItems: [
            {
              logo: 'express.png',
              name: 'Express.js'
            },
            {
              logo: 'graphql.png',
              name: 'GraphQL'
            },
            {
              logo: 'sequelize.png',
              name: 'Sequelize'
            },
            {
              logo: 'npm.png',
              name: 'npm'
            }
          ],
          uses: [
            'eCommerce GraphQL API',
            'card game Express.js API',
            'card game GraphQL schema + Prisma',
            "Wes Bos' Node course",
            '... more on the way'
          ]
        },
        {
          name: 'Design & Code',
          logo: 'photoshop.png',
          years: '16 years',
          themeClass: 'gradient4',
          skillItems: [
            {
              logo: 'photoshop.png',
              name: 'Photoshop'
            },
            {
              logo: 'html.png',
              name: 'HTML'
            },
            {
              logo: 'css.png',
              name: 'CSS'
            },
            {
              logo: 'sass.png',
              name: 'SASS'
            }
          ],
          uses: [
            'Photoshop layout design',
            'responsive, mobile-friendly CSS',
            'advanced CSS techniques',
            'search engine optimization (SEO)',
            'resource/request optimization',
            'image manipulation',
            'accessibility'
          ]
        },
        {
          name: 'Source Control',
          logo: 'git.png',
          years: '4 years',
          themeClass: 'gradient3',
          skillItems: [
            {
              logo: 'git.png',
              name: 'Git'
            },
            {
              logo: 'gitlab.png',
              name: 'GitLab'
            },
            {
              logo: 'github.png',
              name: 'GitHub'
            }
          ],
          uses: [
            'command line git',
            'helped company modernization w/ git being the 1st step',
            '32 repos managed at once on the job',
            'comfortable following or setting in-house git standards'
          ]
        },
        {
          name: 'Deployment',
          logo: 'nginx.png',
          years: '14 years',
          themeClass: 'gradient2',
          skillItems: [
            {
              logo: 'nginx.png',
              name: 'Nginx'
            },
            {
              logo: 'apache.png',
              name: 'Apache'
            },
            {
              logo: 'zend-server.png',
              name: 'Zend Server'
            },
            {
              logo: 'norton.png',
              name: 'Norton SSL'
            },
            {
              logo: 'lets-encrypt.png',
              name: "Let's Encrypt SSL"
            },
            {
              logo: 'docker.png',
              name: 'Docker'
            }
          ],
          uses: [
            'Nginx/Apache configs',
            'SSL certificates',
            'enterprise experience',
            'compression / caching',
            'troubleshooting',
            'Docker basics'
          ]
        },
        {
          name: 'Code Crafting',
          logo: 'visual-code.png',
          years: '16 years',
          themeClass: 'gradient1',
          skillItems: [
            {
              logo: 'visual-code.png',
              name: 'Visual Code'
            },
            {
              logo: 'sublime-text.png',
              name: 'Sublime Text'
            },
            {
              logo: 'phpstorm.png',
              name: 'PHPStorm'
            },
            {
              logo: 'nano.png',
              name: 'GNU Nano'
            }
          ],
          uses: [
            'started w/ guilds & local business',
            'survived the browser wars',
            'upgraded to enterprise work',
            'looking for my next big thing',
            "let's build incredible works together"
          ]
        },
        {
          name: 'Operating Systems',
          logo: 'ubuntu.png',
          years: '18 years',
          themeClass: 'gradient4',
          skillItems: [
            {
              logo: 'ubuntu.png',
              name: 'Ubuntu'
            },
            {
              logo: 'windows.png',
              name: 'Windows'
            },
            {
              logo: 'android.png',
              name: 'Android'
            },
            {
              logo: 'ibm-i.png',
              name: 'IBM i / i5 / OS/400'
            }
          ],
          uses: [
            'Linux command line',
            'bash scripts',
            'macros',
            '6 years of IBM i expertise',
            'IBM i modernization',
            'Solarwinds N-able',
            'troubleshooting proficiency'
          ]
        },
        {
          name: 'Killed in Action',
          logo: 'tombstone.png',
          years: 'skills sent to the farm',
          themeClass: 'gradient3',
          skillItems: [
            {
              logo: 'flash.png',
              name: 'Flash Animation'
            },
            {
              logo: 'actionscript.png',
              name: 'ActionScript'
            },
            {
              logo: 'coldfusion.png',
              name: 'ColdFusion'
            },
            {
              logo: 'dreamweaver.png',
              name: 'Dreamweaver'
            },
            {
              logo: 'angelfire.png',
              name: 'Angelfire'
            }
          ],
          uses: [
            "made my high school's website",
            '1st job was ColdFusion eCommerce',
            '3 guild Flash sites (200 members!)',
            'ridiculous Flash animations',
            'CCG deck builder in ActionScript',
            'several Flash widgets made/sold',
            'over-the-top gif spam on AngelFire'
          ]
        },
        {
          name: 'My TODOs',
          logo: 'react.png',
          years: 'skills on my radar',
          themeClass: 'gradient2',
          skillItems: [
            {
              logo: 'react.png',
              name: 'React'
            },
            {
              logo: 'python.png',
              name: 'Python'
            },
            {
              logo: 'elasticsearch.png',
              name: 'Elasticsearch'
            },
            {
              logo: 'net-core.png',
              name: '.NET Core'
            },
            {
              logo: 'vim.png',
              name: 'VIM'
            }
          ],
          uses: [
            'learning is a lifelong pursuit',
            'thrilled with Vue.js but also want to know React',
            'machine learning with Python is enticing',
            '.NET Core has impressive benchmarks'
          ]
        }
      ],

      columnBreaks: {
        default: 6,
        2600: 5,
        2200: 4,
        1800: 3,
        1400: 2,
        1000: 1
      },

      gutterSizes: {
        default: '30px'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
