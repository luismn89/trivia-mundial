import HomePage from '../pages/Home.vue'
import TestPage from '../pages/Test.vue'
import ResultPage from '../pages/Result.vue'
import WinnersPage from '../pages/Winners.vue'
import ChangePage from '../pages/Change.vue'

export const routes = [
  { path: '/', component: HomePage },
  { path: '/recover/:hash', component: ChangePage, props: true },
  { path: '/quiz/:idquiz/pregunta/:question', component: TestPage, props: true },
  { path: '/resultado/', component: ResultPage },
  { path: '/ganadores/', component: WinnersPage },
  { path: '*', redirect: '/' }
]
