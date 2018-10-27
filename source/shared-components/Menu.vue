<template>
  <div class="container-menu">
    <div class="container-btn-menu">
      <p>
        <a class="btn-menu" href="#" @click.prevent="openMenu = (openMenu) ? false : true"><i class="icon-menu"></i></a>
      </p>
      <div class="menu-hide" v-show="openMenu">
        <div class="user-menu">
          <img :src="`${urlStaticFile}user2.png`" v-show="isLogged">
          <div class="data-user" v-show="isLogged">
            <p class="name-user">{{ userLogged.firstName }} {{ userLogged.lastName }}</p>
            <p class="points-user">Puntos acumulados: {{ userLogged.points }}ptos.</p>
            <p class="ranking-user">Rankin : {{ userLogged.ranking }}</p>
          </div>
        </div>
        <div class="logos-menu">
          <a href="https://elbocon.pe/mundial/" target="_blank">
            <img style="padding: 15px 0; margin-bottom: -5px;" :src="`${urlStaticFile}logo.png`">
          </a>
          <a href="https://elbocon.pe/mundial/polla/">
            <label class="text-soon">Muy pronto podrás jugar:</label>
            <img style="padding: 0 0 15px 0;" :src="`${urlStaticFile}logopolla.png`">
          </a>
        </div>
        <div class="container-social-media">
          <p>SÍGUENOS EN:</p>
          <div class="social-media">
            <a href="#" @click.prevent="openNewWindow(urlShareTwitter)" target="_blank">
              <i class="icon-twitter"></i>
            </a>
            <a href="#" @click.prevent="openNewWindow(urlShareFacebook)" target="_blank">
              <i class="icon-facebook"></i>
            </a>
          </div>
          <p style="padding: 0; padding-top: 8px;">EL Bocón Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        openMenu: false,
        userlogged: false,
        urlSite: 'https://elbocon.pe/mundial/trivia/'
      }
    },
    computed: {
      isLogged () {
        return this.$store.state.isUserLogged;
      },
      userLogged (){
        return this.$store.state.userLogged;
      },
      urlShareTwitter(){
        return `https://twitter.com/share?url=${ encodeURIComponent(this.urlSite) }`;
      },
      urlShareFacebook(){
        return `https://www.facebook.com/sharer/sharer.php?u=${ encodeURIComponent(this.urlSite) }`;
      },
      urlStaticFile(){
        return window.location.hostname == 'localhost' ? '/source/assets/img/' : '/mundial/trivia/dist/';
      }
    },
    methods: {
      isroutetest () {
        return this.userlogged = (this.$route.path != '/') ? true : false;
      },
      openNewWindow(url) {
        window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=350,left=500,width=600,height=600");
      }
    }
  }
</script>
<style lang="sass" scoped>
  @import '../assets/sass/partials/_variables.sass'
  @import '../assets/sass/partials/_menu.sass'
</style>

