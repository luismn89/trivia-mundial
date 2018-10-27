<template>
  <section>
    <div class="container-result">
      <div class="box-logo-buttons">
        <img :src="`${urlStaticFile}LA TRIVIA_EL GALLO MÁS GALLO.png`" class="imagelink" @click="goHome">
        <div class="box-buttons">
          <a href="#" @click.prevent="goHome()">VOLVER A JUGAR <i class="icon-right-open"></i></a>
          <a href="https://elbocon.pe/mundial/" target="_blank">IR A BOCON MUNDIAL <i class="icon-right-open"></i></a>
        </div>
      </div>
      <div class="box-results">
        <div class="user-result">
            <img :src="`${urlStaticFile}calichin.png`">
            <h2>¡Gracias {{ userLogged.firstName }} {{ userLogged.lastName }}!</h2>
            <!-- <p>Obtuviste {{  }} punto en este juego.</p> -->
        </div>
        <p>TU NIVEL ES: {{ level }}</p>
        <div class="line-sep"></div>
        <h3>Revisa tus respuestas:</h3>
        <div class="list-results">
          <div class="option-selected" v-for="(item, index) in result" :key="item.id" :class="item ? '' : 'answer-wrong'">
            <h3>{{ listQuestions[index].option_answered }}</h3>
            <p>Pregunta{{index + 1}}</p>
          </div>
			  </div>
        <p class="title-share">Comparte la trivia mundialista con tus patas</p>
        <div class="btn-social-share">
          <a href="#" @click.prevent="openNewWindow(urlShareFacebook)">Compartir en <i class="icon-facebook"></i></a>
          <a class="tcele" href="#" @click.prevent="openNewWindow(urlShareTwitter)">Compartir en <i class="icon-twitter"></i></a>
        </div>
        <section class="finalrespon">
          <div class="redesrespon">
            <a href="#" @click.prevent="openNewWindow(urlShareTwitter)" target="_blank"><i class="icon-twitter"></i></a>
            <a href="#" @click.prevent="openNewWindow(urlShareFacebook)" target="_blank"><i class="icon-facebook"></i></a>
          </div>
          <div class="enlares">
            <a href="#" @click.prevent="goHome()">VOLVER A JUGAR <i class="icon-right-open"></i></a>
          </div>
          <div class="selczona">
            <div class="selec">
              <a id="selezona" href="https://elbocon.pe/mundial/" target="_blank">IR A BOCON MUNDIAL<i class="icon-right-open"></i></a>
            </div>
          </div>
        </section>
		  </div>
	  </div>
  </section>
</template>
<script>
    export default {
        data () {
            return {
              result: this.$store.state.result,
              listOptions: ['A', 'B', 'C', 'D', 'E'],
              urlSite: 'https://elbocon.pe/mundial/trivia/?share'
            }
        },
        computed: {
          userLogged(){
            return this.$store.state.userLogged;
          },
          listQuestions() {
            return this.$store.state.questions;
          },
          level() {
            return this.$store.state.nivel.toUpperCase();
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
          goHome() {
            this.$router.push(`/`)
          },
          adaptHeightScreen() {
            let bodyHeight = document.getElementsByTagName('body')[0].offsetHeight,
                windowHeight = window.innerHeight,
                footer = document.getElementById('footer');
            if (bodyHeight < windowHeight) footer.classList.add('footer-fixed');
            else footer.classList.remove('footer-fixed');
          },
          openNewWindow(url) {
            window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=350,left=500,width=600,height=600");
          }
        },
        mounted () {
          let body = document.body;
          body.className = '';
          body.className = 'background-body-result'
          setTimeout(() => {
            this.adaptHeightScreen();
          }, 500);
          this.$store.state.questions = [];
        },
    }
</script>
<style lang="sass">
  @import '../assets/sass/partials/_variables.sass'
  .container-result
    align-items: center
    // background: url('/source/assets/img/fondoprueba.png')
    // replace
    background: url('/mundial/trivia/dist/fondoprueba.png')
    display: flex
    display: -ms-flexbox
    justify-content: space-between
    margin: auto
    margin-top: 10px
    margin-bottom: 80px
    flex-direction: column
    padding: 19px 0 40px 0
    width: 93%
    -ms-flex-align: center
    -ms-flex-pack: justify
    -ms-flex-direction: column
    .box-logo-buttons
      align-items: center
      display: flex
      display: -ms-flexbox
      flex-direction: column
      padding: 0 20px
      width: 100%
      -ms-flex-direction: column
      -ms-flex-align: center
      .imagelink
        cursor: pointer
      img
        margin-bottom: 0
        width: 300px
      .box-buttons
        display: flex
        display: -ms-flexbox
        flex-direction: column
        align-items: center
        -ms-flex-align: center
        -ms-flex-direction: column
        a
          border: 1px solid #f50002
          color: #f50002
          display: none
          font-family: 'Rajdhani', sans-serif
          font-weight: bold
          height: 50px
          line-height: 50px
          padding: 0 17px
          text-align: center
          width: 200px
          margin-bottom: 18px
          &:last-child
            margin: 0
    .box-results
      align-items: center
      border-left: 1px solid #a5a5a559
      display: flex
      display: -ms-flexbox
      flex-direction: column
      padding: 0 20px
      width: 100%
      -ms-flex-align: center
      -ms-flex-direction: column
      p
        color: #ff0041
        font-family: 'Rajdhani', sans-serif
        font-size: 16px
        font-weight: bold
        margin-bottom: 7px
        margin-top: -8px
      h2
        font-family: 'Rajdhani', sans-serif
        font-size: 30px
        text-align: center
        line-height: 39px
        margin-right: 0
        margin-top: 10px
      img
        height: 70px
        width: auto
      .user-result
        align-items: center
        display: flex
        display: -ms-flexbox
        justify-content: center
        flex-direction: column
        -ms-flex-align: center
        -ms-flex-direction: column
        -ms-flex-pack: center
      .line-sep
        background: #f50002
        height: 2px
        margin-bottom: 14px
        width: 50px
        & > h3
          font-family: 'Rajdhani', sans-serif
          font-size: 22px
          font-weight: normal
      .list-results
        display: flex
        display: -ms-flexbox
        margin-top: 10px
        width: 100%
        justify-content: center
        -ms-flex-pack: center
        .option-selected
          align-items: center
          background: #7ed321
          display: flex
          display: -ms-flexbox
          flex-direction: column
          height: 78px
          width: 65px
          -ms-flex-align: center
          -ms-flex-direction: column
          h3
            color: $white
            font-family: 'Rajdhani', sans-serif
            font-size: 58px
            font-weight: bold
            margin: 0
            margin-bottom: -10px
            margin-top: -8px
          p
            border-top: 1px solid
            color: $white
            font-family: 'Rajdhani', sans-serif
            font-size: 11.22px
            font-weight: normal
            margin: 0
            padding-top: 4px
        .answer-wrong
          background: #dd003c
      .title-share
        color: #807e7e !important
        font-family: 'Rajdhani', sans-serif
        font-size: 14px !important
        font-weight: bold !important
        line-height: 17px
        margin: 0 !important
        margin-bottom: 12px !important
        margin-top: 12px !important
        text-align: center
      .btn-social-share
        display: none
        a
          background: #374782
          color: $white
          font-family: 'Rajdhani', sans-serif
          font-size: 16px
          font-weight: bold
          padding: 10px 38px
          text-align: center
          &:first-child
            margin-right: 20px
        .tcele
          background: #0188ca !important
      .finalrespon
        width: 100%
        .redesrespon
          display: flex
          display: -ms-flexbox
          justify-content: center
          -ms-flex-pack: center
          a
            display: block
            width: 36px
            height: 36px
            line-height: 36px
            text-align: center
            border-radius: 50%
            border: 1px solid #f50607
            margin: 0 4px
        .enlares a,
        #selezona
          display: flex
          display: -ms-flexbox
          justify-content: space-between
          align-items: center
          width: 100%
          height: 60px
          line-height: 60px
          border: 1px solid #f50607
          font-family: 'Rajdhani', sans-serif
          font-size: 19px
          font-weight: bold
          color: #f50002
          padding: 0 24px
          cursor: pointer
          -ms-flex-pack: justify
          -ms-flex-align: center
        #selezona
          margin-bottom: 0
          margin-top: 20px
        .enlares a
          margin-top: 33px
  @media screen and (min-width: 620px)
    .container-result
      align-items: inherit !important
      flex-direction: inherit !important
      max-width: 770px !important
      padding: 15px 0 25px 0 !important
      -ms-flex-align: inherit !important
      -ms-flex-direction: inherit !important
      .box-logo-buttons
        width: 35% !important
        img
          margin-bottom: 55px !important
          width: 260px !important
        .box-buttons a
          display: flex !important
          display: -ms-flexbox !important
          justify-content: space-between !important
          -ms-flex-pack: justify !important
      .box-results
        width: 67% !important
        img
          height: 87px !important
        h2
          font-size: 40px
        .user-result
          justify-content: inherit !important
          -ms-flex-pack: inherit !important
        .list-results
          .option-selected
            height: 85px
            width: 80px
            h3
              font-size: 60px
              margin-top: -10px
            p
              font-size: 14px
        .btn-social-share
          display: flex
          display: -ms-flexbox
          justify-content: center
          -ms-flex-pack: center
        .finalrespon
          display: none
  @media screen and (min-width: 768px)
    .list-results
      width: initial !important
    .container-result
      margin-top: 70px
  @media screen and (min-width: 1025px)
    .container-result
      margin-top: 0
      width: 100% !important
</style>
