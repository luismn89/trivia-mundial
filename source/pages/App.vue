<template>
  <div id="app" class="content-trivia">
    <div class="block-header-zocalo">
      <publicity name="zocalo1" dir="left" :width="160" :height="600"></publicity>
      <publicity name="zocalo2" dir="right" :width="160" :height="600"></publicity>
      <header>
        <publicity name="top" :width="980"></publicity>
        <publicity name="movil1" :width="300" :height="100"></publicity>
        <menu-bar></menu-bar>
        <nav class="menutrivia" v-show="isLogged">
          <div class="user">
            <img :src="`${urlStaticFile}1paso.png`">
            <p><i class="icon-circle"></i>{{ userLogged.firstName }} {{ userLogged.lastName }} |</p><p>Rank: {{ userLogged.ranking }} |</p><p>Ptos: {{ userLogged.points }}</p>
            <a href="#" class="btn-logout" @click.prevent="logout">Salir</a>
          </div>
        </nav>
      </header>
    </div>
    <router-view v-on:firelogin="openLogin"></router-view>
    <footer id="footer" class="footer">
      <div class="container-footer">
        <img :src="`${urlStaticFile}logobocon.png`">
        <a href="#" @click.prevent="goTermsConditions">TERMINOS Y CONDICIONES</a>
      </div>
    </footer>
    <modal-popup v-show="register" typemodal="register" v-on:changemodal="changemodal"></modal-popup>
    <modal-popup v-show="login" typemodal="login" v-on:changemodal="changemodal"></modal-popup>
    <modal-popup v-show="forgivePass" typemodal="forgive" v-on:changemodal="changemodal"></modal-popup>
    <!-- <modal-popup v-show="changePass" typemodal="changepass" v-on:changemodal="changemodal"></modal-popup> -->
    <publicity name="skin" :width="1" :height="1"></publicity>
    <publicity name="movil0" :width="1" :height="1"></publicity>
  </div>
</template>

<script>
  import Publicity from '../shared-components/Publicity';
  import Menu from '../shared-components/Menu';
  import Modal from '../shared-components/Modal';
  import API from '../service/api';

  export default {
    name: 'app',
    data () {
      return {
        register: false,
        login: false,
        forgivePass: false,
        changePass: false,
        footerFixed: ''
      }
    },
    watch: {
      '$route' (to, from) {
        setTimeout(() => {
          this.adaptHeightScreen();
        }, 150);
      },
      listImages (newImage, oldImage) {
        this.preloadImages();
      }
    },
    computed: {
      isLogged () {
        return this.$store.state.isUserLogged;
      },
      userLogged (){
        return this.$store.state.userLogged;
      },
      isroutetest () {
        return (this.$route.path != '/') ? true : false;
      },
      listImages () {
        return this.$store.state.images;
      },
      urlStaticFile(){
        return window.location.hostname == 'localhost' ? '/source/assets/img/' : '/mundial/trivia/dist/';
      }
    },
    methods: {
      changemodal (toModal) {
        this.register = (toModal == 'register') ? true : false;
        this.login = (toModal == 'login') ? true : false;
        this.forgivePass = (toModal == 'forgive') ? true : false;
        this.changePass = (toModal == 'changepass') ? true : false;
        if (this.register || this.login || this.forgivePass || this.changePass) {
          document.getElementsByTagName('body')[0].classList.add = 'blockingOverflow';
          document.getElementsByTagName('html')[0].classList.add('blockingOverflow')
        } else {
          document.getElementsByTagName('body')[0].classList.remove = 'blockingOverflow';
          document.getElementsByTagName('html')[0].classList.remove('blockingOverflow')
        }
      },
      logout() {
        window.location.href = (window.location.pathname.indexOf('/quiz') != -1) ? window.location.origin + '/mundial/trivia/salir/' : window.location.href + 'salir/';
      },
      openLogin() {
        this.changemodal('login');
      },
      goTermsConditions() {
        this.$router.push(`/#sec-terms-conditions`)
      },
      adaptHeightScreen() {
        let bodyHeight = document.getElementsByTagName('body')[0].offsetHeight,
            windowHeight = window.innerHeight,
            footer = document.getElementById('footer');
        if (bodyHeight < windowHeight) footer.classList.add('footer-fixed');
        else footer.classList.remove('footer-fixed');
      },
      preloadImages() {
        let images = new Array();
        for (let i = 0; i < this.$store.state.images.length; i++) {
          let img = new Image();
          img.src = this.$store.state.images[i];
          images.push(img);
        }
        this.$store.state.imagesPreloaded = images;
      }
    },
    components: {
      'publicity' : Publicity,
      'menu-bar' : Menu,
      'modal-popup' : Modal
    },
    mounted () {
      setTimeout(() => {
        this.adaptHeightScreen();
        let hideAds = false,
            adsZocalo1 = document.getElementsByClassName('adsSpaceZocalo1')[0],
            adsZocalo2 = document.getElementsByClassName('adsSpaceZocalo2')[0];
        window.addEventListener('scroll', function (evt) {
            var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
            if (scrollTop > 1 && !hideAds) {
                adsZocalo1.classList.add('staticAdsFixed');
                adsZocalo2.classList.add('staticAdsFixed');
                hideAds = true;
            } else if (scrollTop == 0 && hideAds) {
                adsZocalo1.classList.remove('staticAdsFixed');
                adsZocalo2.classList.add('staticAdsFixed');
                hideAds = false;
            }
        });
      }, 150);
    },
    created() {
      API.userLogged()
        .then(response => {
          let data = response.body;
          if (!data.error) {
            this.$store.state.isUserLogged = true;
            this.$store.state.userLogged.firstName = data.first_name;
            this.$store.state.userLogged.lastName = data.last_name;
            this.$store.state.userLogged.points = data.points;
            this.$store.state.userLogged.ranking = data.ranking;
            this.$store.state.recaptcha_active = data.recaptcha;
          }
        })
        .catch(error => {
          console.log(error)
          // this.changemodal('login');
        });

      if (this.$route.params.hash) this.changePass = true;
    }
  }
</script>

<style lang="scss">
  @import '../assets/sass/main.sass';
</style>
