import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCodepen,
  faDeviantart,
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
  faPinterest,
  faSpotify,
  faSteam,
  faThreads
} from '@fortawesome/free-brands-svg-icons'

// Font Awesome's CSS is loaded through nuxt.config instead, so it's included in SSR
config.autoAddCss = false

// Only the icons registered here are bundled; add more as needed
library.add(
  faCodepen,
  faDeviantart,
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
  faPinterest,
  faSpotify,
  faSteam,
  faThreads
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
