import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        isUserLogged: false,
        userLogged: {
            firstName: '',
            lastName: '',
            points: '-',
            ranking: '-'
        },
        images: [],
        imagesPreloaded: [],
        questions: [],
        result: [],
        nivel: '',
        recaptcha_active: false,
        winners: []
    }
})

