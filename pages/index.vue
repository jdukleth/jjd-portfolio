<template>
  <v-content>
    <!-- <video id="BgVideo" playsinline autoplay muted loop>
      <source src="~/assets/videos/space.webm" type="video/webm" />
      <source src="~/assets/videos/space.mp4" type="video/mp4" />
    </video>-->

    <div id="Content">
      <v-row id="ContentRow">
        <v-flex></v-flex>
        <div id="LogoWrap">
          <div id="LogoAlign">
            <img
              id="Logo"
              src="~/assets/images/db-takeoff.png"
              alt="Portfolio Logo"
            />
          </div>
        </div>
        <div id="NameWrap" align-center>
          <div id="NameAlign">
            <div id="Name">Jason Dukleth</div>
            <div id="JobTitle">Modern Fullstack Developer</div>
            <hr />
            <div class="selling-point">
              UI that is elegant, responsive, friendly
            </div>
            <div class="selling-point">
              Architecture that is fast, scalable, business-minded
            </div>
          </div>
        </div>
        <v-flex></v-flex>
      </v-row>
    </div>
  </v-content>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  components: {}

  // beforeMount() {
  //   this.videoLoad()
  // },

  // methods: {
  //   videoLoad() {
  //     const vid = document.getElementById('BgVideo')

  //     if (window.matchMedia('(prefers-reduced-motion)').matches) {
  //       vid.removeAttribute('autoplay')
  //       vid.pause()
  //     }

  //     function vidFade() {
  //       vid.classList.add('stopfade')
  //     }

  //     vid.addEventListener('ended', function() {
  //       // only functional if "loop" is removed
  //       vid.pause()
  //       // to capture IE10
  //       vidFade()
  //     })
  //   }
  // }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

hr {
  margin: 10px 0;
  border: 1px solid #222222;
}

#Content {
  font-family: 'Karla', sans-serif;
  font-size: 16px;
  /* background: rgba(12, 20, 20, 0.85); */
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 1em;
  width: 100%;
  height: 100vh;
}

#ContentRow {
  height: 100%;
  padding-bottom: 10vh;
}

#LogoWrap {
  padding: 15px;
}

#LogoAlign {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

#Logo {
  max-width: 175px;
  max-height: 175px;
}

#NameWrap {
  padding: 15px;
}

#NameAlign {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

#Name {
  font-family: 'Ubuntu', sans-serif;
  font-size: 3em;
  font-weight: 500;
  letter-spacing: 0.15em;
}

#JobTitle {
  font-size: 1.5em;
  font-weight: 300;
  color: slategray;
  letter-spacing: 0.1em;
}

.selling-point {
  font-size: 1em;
  font-weight: 100;
  color: slategray;
  letter-spacing: 0.1em;
}

@media (min-width) {
  #LogoWrap {
    display: inline-block;
  }

  #NameWrap {
    display: inline-block;
  }
}

/* **************************************************** */
/* Unused Video Background Feature */
/* **************************************************** */
/*video {
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  transform: translateX(-50%) translateY(-50%);
  background-size: cover;
  transition: 1s opacity;
}

.stopfade {
  opacity: 0.5;
}*/

/* **************************************************** */

/* footer button {
  display: block;
  width: 25%;
  padding: 0.4rem;
  border: none;
  margin: 1rem auto;
  font-size: 1.3rem;
  background: rgba(255, 255, 255, 0.23);
  color: #fff;
  cursor: pointer;
  transition: 0.3s background;
}

footer button:hover {
  background: rgba(0, 0, 0, 0.5);
} */

/* **************************************************** */
</style>
