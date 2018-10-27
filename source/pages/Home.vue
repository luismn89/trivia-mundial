<template>
  <div>
    <section class="containerDescription">
      <div class="logotrivia">
        <img :src="`${urlStaticFile}LA TRIVIA_EL GALLO MÁS GALLO.png`">
      </div>
      <div class="box">
        <!--<h2>Muy Pronto</h2>-->
        <p>Responde las preguntas del mundial y<br><span class="colop">gánate uno de los 33 premios de s/. 200,</span><span class="textbol"><br class="brre"></span> juega y gana ya!!!</p>
        <vue-recaptcha v-show="recaptcha_active" sitekey="6LcWeVYUAAAAACDCWu1gA13Vr8SYKx90x76912qr" :size="sizeCaptcha" class="recaptcha recaptcha-play"></vue-recaptcha>
        <!-- <a class="btnYellow" v-if="!endTrivia" href="#" @click.prevent="starTrivia">¡JUEGA YA!</a> -->
        <a class="btnYellow" v-if="endTrivia" href="#" @click.prevent="goWinners">¡LISTA DE GANADORES!</a>
      </div>
    </section>
    <section id="sec-howplay">
      <div class="container-howplay">
        <h2>¿Cómo jugar?</h2>
        <div class="container-steps">
          <div class="item-step">
            <div style="padding-left: 0;" class="image-step">
              <img :src="`${urlStaticFile}1pason.png`">
              <div class="linea"></div>
            </div>
            <div class="step-description">
              <div class="text-step">
                <h3>1. REGISTRA</h3>
                <h4>TUS DATOS</h4>
                <p>Durante la etapa de la promoción, para participar en la TRIVIA de El Bocón y Gallo más Gallo deberás llenar los datos establecidos dentro del formulario de registro, es importante que todos los datos sean completados para comunicarnos contigo si ganaste. </p>
              </div>
            </div>
          </div>
          <div class="item-step">
            <div style="padding-left: 0;" class="image-step">
              <img :src="`${urlStaticFile}3paso.png`">
              <div class="linea"></div>
            </div>
            <div class="step-description">
              <div class="text-step">
                <h3>2. RESPONDE</h3>
                <h4>LAS PREGUNTAS</h4>
                <p>Durante 15 segundos tendrás la opción de responder cada pregunta. Las preguntas son referentes a la historia de los mundiales. El sistema registrará a los participantes que acumulen puntos. Podrás acumular puntos a partir de 3 preguntas correctas por ronda.</p>
              </div>
            </div>
          </div>
          <div class="item-step">
            <div style="padding-left: 0;" class="image-step">
              <img :src="`${urlStaticFile}2paso.png`">
              <div class="linea"></div>
            </div>
            <div class="step-description">
              <div class="text-step">
                <h3>3. COMPARTE</h3>
                <h4>TU ACTIVIDAD</h4>
                <p>Comparte la Trivia de El Bocón y Gallo más Gallo en Facebook y Twitter con tus patas.</p>
                <div class="icocomoju">
                  <i class="icon-facebook"></i>
                  <i class="icon-twitter"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="item-step">
            <div style="padding-left: 0;" class="image-step">
              <img :src="`${urlStaticFile}4paso.png`">
            </div>
            <div class="step-description">
              <div class="text-step">
                <h3>4. GANA</h3>
                <h4>PREMIOS</h4>
                <p>Podrás ganar uno de los 33 premios de s/. 200.00. Sorteos semanales. A más puntaje acumulado por día mayores opciones de ganar, cada punto es una posibilidad en el sorteo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
	  </section>
    <section id="sec-terms-conditions">
      <div class="container-terms-conditions">
        <h2>Términos y condiciones</h2>
        <div class="txttermicon">
          <div class="itentermi">
            <p>Durante la etapa de la promoción los participantes de la “TRIVIA de El Bocón y Gallo más Gallo” deberán ingresar a la página del diario, encontrar el banner promocional o ingresar a la URL:
              <span class="strong-gray"> www.ElBocon.pe/mundial/trivia</span> para registrarse.</p>
            <p>Llena tus datos, participa y Gana con El Bocón y el Gallo más Gallo.</p>
          </div>
          <div class="itentermi">
            <h3>NIVELES</h3>
            <p>Existen 3 niveles de participantes, por cada nivel de respuestas:</p>
            <p>
              <span class="strong-gray">Nivel Calichín:</span> De 1 a 2 preguntas bien contestadas.
              <br>
              <span class="strong-gray">Nivel Profesional:</span> De 3 a 4 preguntas bien contestadas.
              <br>
              <span class="strong-gray">Nivel Capitán:</span> Las 5 preguntas bien contestadas.</p>
          </div>
        </div>
        <div class="txttermicon">
          <div class="itentermi">
            <h3>CLASIFICACIÓN</h3>
            <p>El sistema otorgará 3, 4 o 5 puntos solo a los participantes que completen la misma cantidad de preguntas de forma correcta respectivamente.<br>
            Cada pregunta tendrá una duración de 15 segundos para responder. </p>
            <p>Los puntajes se restablecerán la medianoche previa al sorteo de la semana, cada punto es una opción para el sorteo semanal.</p>
            <p>Un mismo participante puede ser parte de los cuatro sorteos de la Trivia de El Bocón y Gallo más Gallo.</p>
          </div>
          <div class="itentermi">
            <h3>FECHAS DE PARTICIPACIÓN</h3>
            <p>
              <span class="strong-gray">Fechas de participación:</span> Del 14 de junio al 16 de julio de 2018.
              <br> Se generará sorteos semanales:
              <br>
              <span class="subcolumn2" style="text-align:left; margin-left: 40px;">- 21 de junio (7 ganadores)</span><br>
              <span class="subcolumn2" style="text-align:left; margin-left: 40px;">- 28 de junio (7 ganadores)</span><br>
              <span class="subcolumn2" style="text-align:left; margin-left: 40px;">- 5 de julio (7 ganadores)</span><br>
              <span class="subcolumn2" style="text-align:left; margin-left: 40px;">- 16 de julio (12 ganadores)</span><br>
              <span class="strong-gray">Hora de sorteo:</span> 11:00 am</p>
          </div>
        </div>
        <div class="txttermicon">
          <div class="itentermi">
            <h3>PREMIOS</h3>
            <p>Premios: Los jugadores que resulten ganadores del sorteo de la semana se llevarán <span class="strong-gray">s/. 200</span> cada uno.
              <br> En total serán 33 ganadores distribuidos en 7 ganadores por semana de sorteo.
              <br> Los puntos no son acumulables por sorteo.</p>
          </div>
          <div class="itentermi">
            <h3>ENTREGA DE PREMIOS</h3>
            <p>
              <span class="strong-gray subcolumn">Día:</span> A partir del miércoles 18 de julio<br>
              <span class="strong-gray subcolumn">Lugar:</span>	Empresa Editorial El Comercio - Sede Santa Catalina<br>
              <span class="strong-gray subcolumn">Dirección:</span>	Jirón Jorge Salazar Araoz Número 171 - Santa Catalina, La Victoria<br>
              <span class="strong-gray subcolumn">Hora:</span> 10:00 a.m. a 1:00 p.m.<br><span class="subcolumn2">3:00 p.m. a 5:00 p.m.</span></p>
            <p>Se les citará a los ganadores en el transcurso del día en grupos de 10 personas.</p>
          </div>
        </div>
        <div class="txttermicon">
          <div class="itentermi">
            <h3>BASE DE DATOS</h3>
            <p>El Usuario declara que toda información proporcionada es verdadera, completa y exacta. Cada Usuario es responsable por la veracidad, exactitud, vigencia y autenticidad de la información suministrada, y se compromete a mantenerla debidamente actualizada.</p>
            <p>Sin perjuicio de lo anterior, el Usuario autoriza a Grupo El Comercio a verificar la veracidad de los Datos Personales facilitados a través de información obtenida de fuentes de acceso público o de entidades especializadas en la provisión de dicha información.</p>
            <p>Sin perjuicio de lo anterior, el Usuario autoriza a Grupo El Comercio poder comercializar y usar los datos en asociación con la empresa Grupo Monge de los registros que se generen por la promoción.</p>
            <p>Grupo El Comercio no se hace responsable de la veracidad de la información que no sea de elaboración propia, por lo que tampoco asume responsabilidad alguna por posibles daños o perjuicios que pudieran originarse por el uso de dicha información.</p>
            <p>Grupo El Comercio<br>Datos personales que el Usuario proporcione libremente cuando se registra o suscribe a los Sitios Web y las Aplicaciones, tales como nombre, apellido, dirección de correo electrónico, número de DNI, entre otros (los “Datos personales”).</p>
            <br>
            <p>El Usuario manifiesta expresamente que ha sido debidamente informado de todas las finalidades antes mencionadas. Asimismo, a través de la aceptación de la presente Política de Privacidad, el Usuario autoriza y su consentimiento previo, libre, expreso e inequívoco y gratuito, para el tratamiento de la Información del Usuario, de conformidad con las finalidades antes descritas.</p>
          </div>
        </div>
      </div>
	  </section>
    <a href="#" class="btn-up" @click.prevent="goToTop()"><i class="icon-up-open-1"></i></a>
  </div>
</template>
<script>
  import API from '../service/api';
  import VueRecaptcha from "vue-recaptcha";
  export default {
    data () {
      return {}
    },
    components: {
      VueRecaptcha
    },
    computed: {
      endTrivia() {
        let breakDate = new Date('07-16-2018').getTime();
        return (Date.now() >= breakDate);
      },
      recaptcha_active () {
        return this.$store.state.recaptcha_active;
      },
      sizeCaptcha() {
        return (window.innerWidth > 768) ? 'normal' : 'compact';
      },
      urlStaticFile(){
        return window.location.hostname == 'localhost' ? '/source/assets/img/' : '/mundial/trivia/dist/';
      }
    },
    methods: {
      starTrivia(){
        if (this.$store.state.isUserLogged) {
          let recaptcha_selected = '';
          if (this.$store.state.recaptcha_active) recaptcha_selected = document.querySelector('.recaptcha-play textarea.g-recaptcha-response').value;;
          if (recaptcha_selected == '' && this.$store.state.recaptcha_active) alert('Asegurese de ingresar el recaptcha')
          else {
            API.initQuiz({
                "recaptcha" : recaptcha_selected
              })
              .then((responseQuiz) => {
                let dataQuiz = responseQuiz.body;
                this.$store.state.images = dataQuiz.images;
                dataQuiz.next_question['is_answered'] = false;
                dataQuiz.next_question['option_answered'] = '';
                for (let i = 0; i < dataQuiz.next_question.choices.length; i++) {
                    dataQuiz.next_question.choices[i]['status'] = '';
                }
                this.$store.state.questions.push(dataQuiz.next_question);
                this.$store.state.quiz_id = dataQuiz.quiz_id;
                this.$router.push(`/quiz/${dataQuiz.quiz_id}/pregunta/${dataQuiz.next_question.order}`);
              })
              .catch((errorQuiz) => {
                try {
                  this.message_error_login = JSON.parse(error.response.text).error;
                } catch (e) {
                  this.message_error_login = "Hubo un problema al momento de iniciar la trivia, intente de nuevo";
                }
              });
          }
        } else this.$emit('firelogin');
      },
      goToTop() {
        let scrollDocument = document.documentElement || document.body;
        scrollDocument.scroll({ top: 0, behavior: "smooth" });
      },
      goWinners() {
        this.$router.push(`/ganadores`);
      }
    },
    mounted() {
      let body = document.body;
      body.className = '';
      body.className = 'background-body-home'
      this.$store.state.questions = [];
    }
  }
</script>
<style lang="sass" scoped>
  @import '../assets/sass/partials/_variables.sass'
  .containerDescription
    display: flex
    display: -ms-flexbox
    flex-direction: column
    justify-content: space-between
    margin: auto
    max-width: 980px
    padding: 35px 20px 30px 20px
    width: 100%
    -ms-flex-pack: justify
    -ms-flex-direction: column
    .logotrivia
      width: 300px
      margin: 0 auto -15px auto
      img
        width: 100%
    .colop
      color: $yellow
      font-weight: bold
    .box
      width: 100%
      text-align: right
      position: relative
      .recaptcha
        text-align: center
      h2
        color: $white
        font-family: 'Rajdhani', sans-serif
        font-size: 34px
        line-height: 33px
        margin: 7px
        text-align: center
      p
        font-family: 'Rajdhani', sans-serif
        color: $white
        font-size: 18px
        line-height: 22px
        padding: 10px 0 10px 0
        margin: 0
        text-align: center
      .btnYellow
        display: block
        line-height: 45px
        font-size: 18px
        margin: 10px auto
        border: none
        width: 90%
        height: 45px
  #sec-howplay
    background: rgba(0, 0, 0, 0.2)
    margin-top: 200px
    .container-howplay
      width: 100%
      max-width: 980px
      margin: auto
      padding: 40px 0px 50px 0px
      h2
        font-family: 'Rajdhani', sans-serif
        font-size: 39px
        color: $white
        padding: 0 30px
        text-align: center
      .container-steps
        align-items: center
        margin-top: 20px
        display: flex
        display: -ms-flexbox
        padding: 0 20px
        flex-direction: column
        -ms-flex-direction: column
        -ms-flex-align: center
        .item-step:not(:last-child)
          border-bottom: 1px solid $white
        .item-step
          display: flex
          display: -ms-flexbox
          flex-direction: column
          align-items: center
          margin-bottom: 30px
          width: 100%
          -ms-flex-align: center
          -ms-flex-direction: column
          .image-step
            position: relative
            padding-left: 30px
            p
              font-family: 'Rajdhani', sans-serif
              font-size: 24px
              font-weight: bold
              margin-top: -40px
              margin-left: 18px
            img
              height: 80px
              width: auto
            .linea
              display: none
              position: absolute
              width: 65%
              height: 2px
              background: $white
              left: 75px
              bottom: 50%
          .step-description
            display: flex
            display: -ms-flexbox
            margin-top: 0
            margin-right: 0
            img
              height: 40px
              margin-right: 5px
              margin-top: 6px
            .text-step
              color: $white
              padding: 10px 0 28px 0
              h3
                font-size: 21px
                font-family: 'Rajdhani', sans-serif
                font-weight: bold
                color: $white
                text-align: center
              h4
                margin: 0
                font-size: 21px
                font-family: 'Rajdhani', sans-serif
                color: $yellow
                font-weight: normal
                margin-top: -5px
                text-align: center
              p
                font-size: 18px
                line-height: 22px
                color: $white
                font-family: 'Rajdhani', sans-serif
                text-align: center
                margin-top: 7px
              .icocomoju
                text-align: center
  #sec-terms-conditions
    width: 100%
    background: $white
    .container-terms-conditions
      width: 100%
      max-width: 980px
      margin: auto
      padding: 60px 30px 40px 30px
      h2
        font-family: 'Rajdhani', sans-serif
        font-size: 39px
        line-height: 39px
        color: $black
        margin-bottom: 35px
        text-align: center
      .txttermicon
        width: 100%
        display: flex
        display: -ms-flexbox
        justify-content: space-between
        flex-direction: column
        margin-top: 0
        -ms-flex-direction: column
        -ms-flex-pack: justify
        .itentermi
          width: 100%
          padding-bottom: 35px
          h3
            font-family: 'Rajdhani', sans-serif
            font-size: 25px
            font-weight: bold
            text-align: center
          p
            font-family: 'Rajdhani', sans-serif
            font-size: 19px
            line-height: 22px
            margin-top: 0
  .strong-gray
    font-weight: bold
    color: $gray-bold
  .btn-up
    position: fixed
    bottom: 35px
    right: 10px
    background: $yellow
    border: 1px solid $black
    border-radius: 5px
    color: $black
    padding: 7px
    font-size: 27px
    &:hover
      background: $orange
      border-color: $orange
      color: $white
  .subcolumn
    display: inline-block
    width: 100px
  .subcolumn2
    display: inline-block
    width: 264px
    text-align: right
  @media screen and (min-width: 360px)
    .containerDescription
      .box h2
        font-size: 39px
        line-height: 39px
        margin: 15px
      .box p
        font-size: 19px
        padding: 20px 0 27px 0
  @media screen and (min-width: 533px)
    .containerDescription
      padding: 10px 30px 30px 30px
      .logotrivia
        width: 300px
      .box
        width: 95%
        h2
          font-size: 54px
          line-height: 54px
        .btnYellow
          width: 160px
    .container-howplay
      h2
        font-size: 50px !important
    .container-terms-conditions
      h2
        font-size: 50px !important
        margin-bottom: 45px !important
        line-height: inherit!important
      .txttermicon
        margin-top: initial
        justify-content: inherit
        -ms-flex-pack: inherit
        .itentermi
          width: 80%
          h3
            text-align: inherit
  @media screen and (min-width: 620px)
    .containerDescription
      padding: 60px 30px 50px 30px
      .btnYellow
        width: 80%
        height: 54px
        line-height: 53px
        margin: auto
    .container-howplay
      h2
        text-align: inherit !important
      .container-steps
        align-items: inherit !important
        flex-direction: inherit !important
        padding: 0 30px !important
        -ms-flex-direction: inherit !important
        -ms-flex-align: inherit !important
        .item-step
          display: inline-block !important
          border-bottom: none !important
          margin-bottom: initial !important
          padding-right: 20px !important
          width: 25% !important
          .image-step .linea
            display: inline-block !important
          .step-description
            margin-top: 30px !important
            margin-right: initial !important
            .text-step
              padding: initial
              h3,
              h4
                text-align: inherit !important
              p
                font-size: 19px !important
                margin-top: initial !important
                text-align: inherit !important
              .icocomoju
                  text-align: inherit !important
    .container-terms-conditions
      h2,
      h3
        text-align: inherit !important
  @media screen and (min-width: 768px)
    .containerDescription
      padding: 80px 30px 70px 30px
      flex-direction: inherit
      -ms-flex-direction: inherit
      .logotrivia
        width: 550px
      .box
        width: 80%
        .recaptcha
          text-align: right
        h2
          font-size: 60px
          line-height: 60px
          margin: 0
          margin-top: 100px
          text-align: inherit
        p
          text-align: inherit
        .btnYellow
          position: absolute
          height: 40px
          z-index: 998
          right: 0px
          // bottom: -64px
          line-height: 40px
          width: 220px
    .container-steps .item-step
      .image-step .linea
        display: inline
    .btn-up
      right: 35px
</style>
