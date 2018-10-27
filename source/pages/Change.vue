<template>
   <section id="modal-recovery" class="modal">
      <img :src="`${urlStaticFile}LA TRIVIA_EL GALLO MÁS GALLO.png`">
      <div class="container-modal">
          <h2>Restablece tu contraseña</h2>
          <h3>Ingresa la nueva contraseña que deseas colocar a tu cuenta.</h3>
          <form @submit.prevent="sendChangePass">
              <p>
                  <input type="password" class="input-text" placeholder="Nueva contraseña" name="new-password" v-model="recovery.new_password" @blur="validFormChangePass"/>
              </p>
              <p>
                  <input type="password" class="input-text" placeholder="Confirmar Contraseña" name="confirm-password" v-model="recovery.confirm_password" @blur="validFormChangePass"/>
              </p>
              <p>
                  <input type="submit" class="btn-form" name="boton" value="RESTABLECER CONTRASEÑA" />
              </p>
              <label class="error-msg" v-show="!f_changepass_valid && message_error_changepass != ''"><i class="icon-attention-1"></i>{{ message_error_changepass }}</label>
              <label v-show="spinner_changepass"><img class="spinner" :src="`${urlStaticFile}loading.gif`" alt="" /></label>
          </form>
      </div>
      <a href="#" class="btn-close icon-cancel-5" @click.prevent="changeModal('')"></a>
  </section>

</template>
<script>
    import API from "../service/api";
    import Cookie from 'js-cookie';
    import VueRecaptcha from "vue-recaptcha";
    export default {
        data () {
            return {
              modal: true,
              message_error_changepass: "",
              f_changepass_valid: false,
              spinner_changepass: false,
              recovery: {
                new_password: '',
                confirm_password: ''
              },
              emailRecovery: '',
              sending_changepass: false,
              message_status: '',
              recaptcha_recovery: '',
              key_recaptcha: '6LcWeVYUAAAAACDCWu1gA13Vr8SYKx90x76912qr'
            }
        },
        components: {
          VueRecaptcha
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
          },
          validFormChangePass() {
              let valid = true;
              for (let field in this.recovery) {
                valid *= this.validRequire(this.recovery[field]);
                if (valid) {
                  this.f_changepass_valid = true;
                  this.message_error_changepass = "";
                } else {
                  this.f_changepass_valid = false;
                  this.message_error_changepass = "Asegurese de ingresar todos los datos solicitados.";
                }
              }
              return valid;
          },
          validRequire(field) {
              return field != "" ? true : false;
          },
          sendChangePass(){
              let cookieCsrftoken = Cookie.get('csrftoken')
              if (this.sending_changepass) return;
              this.sending_changepass = true;
              this.spinner_changepass = true;
              console.log("PATHHHHHHHHHHHHHH :: ", window.location.href.split("recover/"))
              console.log("PATHHHHHHHHHHHHHH :: ", window.location.href.split("recover/")[1])
              API.changePassword({
                  "hash": window.location.href.split("recover/")[1],
                  "new_password": this.recovery.new_password,
                  "confirm_password": this.recovery.confirm_password,
                  "recaptcha": this.recaptcha_recovery,
                  "csrfmiddlewaretoken" : cookieCsrftoken
                })
                .then(response => {
                  console.log(response)
                  this.sending_changepass = false;
                  this.spinner_changepass = false;
                  this.$emit("changemodal", "");
                  this.changeModal('login')
                })
                .catch(error => {
                  console.log("==================")
                  console.log("==================")
                  console.log(error)
                  console.log("==================")
                  console.log("==================")
                  this.sending_changepass = false;
                  this.spinner_changepass = false;
                  try {
                    this.message_error_changepass = JSON.parse(error.response.text).error;
                  } catch (e) {
                    console.log("str(e)")
                    this.message_error_changepass = "Error al guardar nueva contraseña intente de nuevo";
                  }
                })
          },
          clearForm(){
            this.recovery.new_password = this.recovery.confirm_password = '';
          },
          changeModal(toModal) {
            this.clearForm();
            this.$router.push('/')
          },
        },
        mounted () {
          let body = document.body;
          body.className = '';
          body.className = 'background-body-change'
          setTimeout(() => {
            this.adaptHeightScreen();
          }, 250);
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
    background: url('/mundial/trivia/dist/fondo-juego.png')
    background-size: contain;
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
          width: 328px !important
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
