<template>
    <div>
        <section id="container-trivia" class="container-trivia">
            <div class="logo-clock">
                <img :src="`${urlStaticFile}LA TRIVIA_EL GALLO MÁS GALLO.png`" class="imagelink" @click="goHome">
                <div class="clock">
                    <div class="background-number"><p>00</p></div>
                    <div><p class="two-points">:</p></div>
                    <div class="background-number"><p>{{ timerVisible }}</p></div>
                </div>
            </div>
            <div class="list-questions">
                <a href="#" class="item-indicator" @click.prevent :class="questionOne">Pregunta 1</a>
                <a href="#" class="item-indicator" @click.prevent :class="questionTwo">Pregunta 2</a>
                <a href="#" class="item-indicator" @click.prevent :class="questionThree">Pregunta 3</a>
                <a href="#" class="item-indicator" @click.prevent :class="questionFour">Pregunta 4</a>
                <a href="#" class="item-indicator" @click.prevent :class="questionFive">Pregunta 5</a>
            </div>
            <div class="container-question">
                <div v-show="currentQuestion.type == 'A'">
                    <h2>{{ currentQuestion.text }}</h2>
                    <div class="container-answers container-simple-wrap">
                        <div class="answer answer-simple-wrap" v-for="(choice, index) in currentQuestion.choices" :key="choice.id">
                            <a class="btn-option" :href="active" @click.prevent="validateAnswer(choice.id, index)">
                                <div class="description-option" :class="choice.status">
                                    <p class="letter-option">{{ listOptions[index] }}</p>
                                    <P class="txt-option" :style="choice.status == 'correct' || choice.status == 'error' ? 'display:none !important' : ''">{{ choice.text }}</P>
                                    <P class="txt-option" v-show="choice.status == 'correct'"><img :src="urlimage">{{ text_result }}</P>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div v-show="currentQuestion.type == 'B'">
                    <h2>{{ currentQuestion.text }}</h2>
                    <div class="container-answers answer-two-columns">
                        <div class="answer" v-for="(choice, index) in currentQuestion.choices" :key="choice.id">
                            <a class="btn-option" :href="active" @click.prevent="validateAnswer(choice.id, index)">
                                <div class="description-option" :class="choice.status">
                                    <p class="letter-option">{{ listOptions[index] }}</p>
                                    <P class="txt-option" :style="choice.status == 'correct' || choice.status == 'error' ? 'display:none !important' : ''">{{ choice.text }}</P>
                                    <P class="txt-option" v-show="choice.status == 'correct'"><img :src="urlimage">{{ text_result }}</P>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div v-show="currentQuestion.type == 'C'">
                    <h2>{{ currentQuestion.text }}</h2>
                    <div class="container-answers">
                        <div class="answer" v-for="(choice, index) in currentQuestion.choices" :key="choice.id">
                            <a class="btn-option" :href="active" @click.prevent="validateAnswer(choice.id, index)">
                                <div class="boxImg">
                                  <img :src="choice.image">
                                </div>
                                <div class="description-option" :class="choice.status">
                                    <p class="letter-option">{{ listOptions[index] }}</p>
                                    <p class="txt-option" :style="choice.status == 'correct' || choice.status == 'error' ? 'display:none !important' : ''">{{ choice.text }}</p>
                                    <p class="txt-option" v-show="choice.status == 'correct'"><img :src="urlimage">{{ text_result }}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div v-show="currentQuestion.type == 'D'">
                    <h2>{{ currentQuestion.text }}</h2>
                    <div class="wrap-answer">
                        <img class="wrap-image" :src="currentQuestion.image">
                        <div class="container-answers container-answer-wrap">
                            <div class="answer answer-wrap" v-for="(choice, index) in currentQuestion.choices" :key="choice.id">
                                <a class="btn-option btn-option-wrap " :href="active" @click.prevent="validateAnswer(choice.id, index)">
                                    <div class="description-option" :class="choice.status">
                                        <p class="letter-option">{{ listOptions[index] }}</p>
                                        <P class="txt-option txt-option-wrap" :style="choice.status == 'correct' || choice.status == 'error' ? 'display:none !important' : ''">{{ choice.text }}</P>
                                        <P class="txt-option txt-option-wrap" v-show="choice.status == 'correct'"><img :src="urlimage">{{ text_result }}</P>
                                    </div>
                                </a>
                            </div>
	                    </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import API from '../service/api';
    export default {
        data () {
            return {
              timer: 15,
              listOptions: ['A', 'B', 'C', 'D', 'E'],
              sending: false,
              answer: '',
              urlimage: '',
              text_result: '',
              interval: null,
              questionOne: 'image-item-indicator',
              questionTwo: 'image-item-indicator',
              questionThree: 'image-item-indicator',
              questionFour: 'image-item-indicator',
              questionFive: 'image-item-indicator',
              lastanswer: 'image-item-indicator',
              currentCountDown: null
            }
        },
        props: ['idquiz', 'question'],
        watch: {
          '$route' (to, from) {
            this.goToTop();
            setTimeout(() => {
              this.adaptHeightScreen();
            }, 150);
          }
        },
        computed: {
            currentQuestion () {
              return this.$store.state.questions[this.question - 1];
            },
            urlNextQuestion () {
                return `#/quiz/${this.idquiz}/pregunta/${this.question + 1}`;
            },
            timerVisible() {
              return (this.timer > 9) ? this.timer : `0${this.timer}`;
            },
            active() {
              return (this.sending) ? '' : '#';
            },
            urlStaticFile(){
              return window.location.hostname == 'localhost' ? '/source/assets/img/' : '/mundial/trivia/dist/';
            }
        },
        methods: {
          starCountDown(fn) {
            let intervalID;
            this.timer = 15;
            const tic = () => {
              this.timer--;
              if (this.timer === 0){
                clearInterval(intervalID);
                if (fn) fn()
              }
            }
            intervalID = setInterval(tic, 1000)
            return {
              cancel: () => clearInterval(intervalID)
            }
          },
          sendAnswer (code, indexOption){
            API.sendAnswer({
                quiz_id: this.$store.state.quiz_id,
                order: this.question,
                code: code
            })
            .then((response) => {
                console.log(response.body);
                let resultAnswer = response.body;
                this.currentQuestion.option_answered = (code == '') ? 'X' : this.listOptions[indexOption];
                this.currentQuestion.is_answered = true;
                this.lastanswer = resultAnswer.is_correct;
                if (code != '') {
                  this.currentQuestion.choices[indexOption].status = (resultAnswer.is_correct) ? 'correct' : 'error';
                  this.urlimage = (resultAnswer.is_correct) ? `${this.urlStaticFile}check.png` : `${this.urlStaticFile}x.png`;
                  this.text_result = (resultAnswer.is_correct) ? 'BIEN JUGADO' : 'A LA BANCA';
                }
                setTimeout(() => {
                  if (resultAnswer.next_question){
                    this.drawQuestion(resultAnswer.quiz_id, resultAnswer.next_question.order, resultAnswer.next_question);
                    this.currentCountDown = this.starCountDown(() => {
                      this.sendAnswer('')
                    })
                  } else this.drawQuestion(resultAnswer.quiz_id, null, resultAnswer);
                }, 250);
                this.sending = false;
            })
            .catch((error) => {
                console.log(error)
                this.sending = false;
            })
          },
          drawQuestion (quiz_id, order, new_question) {
              if (this.$route.path.indexOf('/quiz/') != -1) {
                if (this.question < 6) {
                  if (this.question == 1)  this.questionOne = (this.lastanswer) ? 'questionOk' : 'questionWrong';
                  else if (this.question == 2) this.questionTwo = (this.lastanswer) ? 'questionOk' : 'questionWrong';
                  else if (this.question == 3) this.questionThree = (this.lastanswer) ? 'questionOk' : 'questionWrong';
                  else if (this.question == 4) this.questionFour = (this.lastanswer) ? 'questionOk' : 'questionWrong';
                  else if (this.question == 5) this.questionFive = (this.lastanswer) ? 'questionOk' : 'questionWrong';
                }
                if (new_question.order) {
                    new_question['is_answered'] = false;
                    new_question['option_answered'] = '';
                    for (let i = 0; i < new_question.choices.length; i++) {
                        new_question.choices[i]['status'] = '';
                    }
                    this.$store.state.questions.push(new_question);
                } else {
                    this.$store.state.userLogged.points = new_question.user.points;
                    this.$store.state.userLogged.ranking = new_question.user.ranking;
                    this.$store.state.recaptcha_active = new_question.user.recaptcha;
                    this.$store.state.result = new_question.result;
                    this.$store.state.nivel = new_question.nivel;
                }
                if(this.question < 5)  this.$router.push(`/quiz/${quiz_id}/pregunta/${order}`);
                else {
                    this.$router.push(`/resultado`)
                    this.questionOne = this.questionTwo = this.questionThree = this.questionFour = this.questionFive = 'image-item-indicator';
                }
              }
              this.timer = 15
          },
          validateAnswer (code, indexOption) {
              this.currentCountDown.cancel();
              if (this.sending) return
              this.sending = true;
              // console.log('clicked')
              this.sendAnswer(code, indexOption)
          },
          adaptHeightScreen() {
            let bodyHeight = document.getElementsByTagName('body')[0].offsetHeight,
                windowHeight = window.innerHeight,
                footer = document.getElementById('footer');
            if (bodyHeight < windowHeight) footer.classList.add('footer-fixed');
            else footer.classList.remove('footer-fixed');
          },
          goHome() {
            this.$router.push(`/`);
          },
          goToTop() {
            let scrollDocument = document.documentElement || document.body;
            scrollDocument.scroll({ top: 0 });
          },
          refreshTrivia(){
            API.initQuiz()
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
        },
        created () {
            this.currentCountDown = this.starCountDown(() => {
              this.sendAnswer('');
            });
            if(this.$route.params.question > 1) this.$router.push(`/`);
            else if (this.$route.params.question == 1) {
              if(this.$store.state.questions.length == 0) this.refreshTrivia();
            }
        },
        mounted () {
          let body = document.body;
          body.className = '';
          body.className = 'background-body-test'
          setTimeout(() => {
            this.adaptHeightScreen();
          }, 250);
        },
        destroyed() {
          console.log('destroyed')
          clearInterval(this.interval);
        }
    }
</script>
<style lang="sass" scoped>
  @import '../assets/sass/partials/_variables.sass'
  .container-trivia
    margin: auto
    max-width: 980px
    width: 100%
    .logo-clock
      align-items: center
      display: flex
      display: -ms-flexbox
      justify-content: center
      margin: auto
      margin-top: 16px
      width: 300px
      cursor: pointer
      -ms-flex-align: center
      -ms-flex-pack: center
      img
        width: 175px
        margin-right: 0
        margin-left: -20px
      .clock
        align-items: center
        display: flex
        display: -ms-flexbox
        margin-bottom: -20px
        -ms-flex-align: center
        .background-number
          // background: url('/source/assets/img/fondocrono.png') center no-repeat
          // replace
          background: url('/mundial/trivia/dist/fondocrono.png') center no-repeat
          display: block
          height: 45px
          width: 60px
          p
            color: $white
            font-family: 'Rajdhani', sans-serif
            font-size: 40px
            font-style: italic
            font-weight: bold
            line-height: 45px
            margin: 0 0 0 -5px
            text-align: center
        .two-points
            color: $white
            font-family: 'Rajdhani', sans-serif
            font-size: 40px
            font-style: italic
            font-weight: bold
            height: 45px
            line-height: 45px
            margin: 0 4px 0 -1px
    .list-questions
      display: flex
      display: -ms-flexbox
      justify-content: center
      margin-top: 10px
      flex-wrap: wrap
      -ms-flex-pack: center
      -ms-flex-wrap: wrap
      .item-indicator
        color: $white
        display: block
        font-family: 'Patua One', cursive
        font-size: 11px
        height: 25px
        line-height: 25px
        text-align: center
        margin-top: 10px
        width: 110px
        cursor: default
      .image-item-indicator
        // background: url('/source/assets/img/cuadrores.png')
        // replace
        background: url('/mundial/trivia/dist/cuadrores.png')
    .container-question
      padding-bottom: 15px
      h2
        color: $white
        font-family: 'Rajdhani', sans-serif
        font-size: 23px
        font-weight: bold
        line-height: 23px
        padding: 20px 20px
        margin: 0
        text-align: center
      .container-answers
        display: flex
        display: -ms-flexbox
        justify-content: center
        flex-wrap: wrap
        margin: auto
        max-width: 845px
        width: 100%
        -ms-flex-pack: center
        -ms-flex-wrap: wrap
        .answer
          margin: 10px
          width: 40%
          .btn-option
            background: $white
            display: block
            margin-top: -5px
            position: relative
            width: 100%
            .boxImg
              height: 133px
              width: 195px
              overflow: hidden
              img
                height: 100%
                width: 100%
            .description-option
              align-items: center
              display: flex
              display: -ms-flexbox
              height: 48px
              margin-top: -5px
              -ms-flex-align: center
              p
                margin: 0
              .letter-option
                border-right: 1px solid #c1c1c1
                display: block
                line-height: 45px
                text-align: center
                width: 40px
              .txt-option
                display: block
                line-height: 15px
                text-align: center
                font-size: 12px
                padding: 5px
                width: 100%
            &:hover
              background: $blue
              color: $white
      .answer-two-columns
        display: flex
        display: -ms-flexbox
        flex-wrap: wrap
        justify-content: space-between
        margin: auto
        width: 100%
        max-width: 845px
        -ms-flex-pack: justify
        -ms-flex-wrap: wrap
        .answer
          width: 100%
      .wrap-answer
        align-items: center
        display: flex
        display: -ms-flexbox
        flex-direction: column
        height: auto
        margin: auto
        max-width: 845px
        width: 100%
        -ms-flex-direction: column
        -ms-flex-align: column
        .wrap-image
          height: auto
          margin-right: 0
          margin-bottom: 20px
          width: 90%
        .container-answer-wrap
          display: flex
          display: -ms-flexbox
          justify-content: space-between
          flex-direction: column
          -ms-flex-direction: column
          -ms-flex-pack: justify
          .answer-wrap
            width: 90%
            margin: 10px auto
            .btn-option-wrap
              margin-top: 0px
              .txt-option-wrap
                width: 100% !important
  .error
    background: #e0233f
    display: flex
    display: -ms-flexbox
    top: 0
    .txt-option:last-child
      display: flex !important
      display: -ms-flexbox !important
    p
      align-items: center
      color: $white
      display: flex
      display: -ms-flexbox
      justify-content: center
      font-family: 'Rajdhani', sans-serif
      font-size: 14px;
      font-weight: bold
      -ms-flex-align: center
      -ms-flex-pack: center
      img
        height: 30px !important
        width: auto !important
  .correct
    display: flex
    display: -ms-flexbox
    background: #03b914
    top: 0
    .txt-option:last-child
      display: flex !important
      display: -ms-flexbox !important
    p
      display: flex
      display: -ms-flexbox
      align-items: center
      justify-content: center
      color: $white
      font-family: 'Rajdhani', sans-serif
      font-weight: bold
      font-size: 14px
      -ms-flex-align: center
      -ms-flex-pack: center
      img
        width: auto !important
        height: 30px !important
  .questionOk
    // background: url('/source/assets/img/cuadrores1.png') !important
    // replace
    background: url('/mundial/trivia/dist/cuadrores1.png') !important
  .questionWrong
    // background: url('/source/assets/img/cuadrores2.png') !important
    // replace
    background: url('/mundial/trivia/dist/cuadrores2.png') !important
  @media screen and (max-width: 768px)
    .container-simple-wrap
      align-items: center !important
      display: flex !important
      display: -ms-flexbox !important
      flex-direction: column !important
      width: 100% !important
      -ms-flex-direction: column !important
      -ms-flex-align: column !important
      .answer-simple-wrap
        width: 90% !important
        margin: auto !important
        .description-option
          margin-top: 15px !important
  @media screen and (min-width: 360px)
    .txt-option
      font-size: inherit
    .wrap-answer
      .wrap-image
        width: 360px !important
  @media screen and (min-width: 480px)
    .answer-two-columns
      margin-top: 50px !important
  @media screen and (min-width: 533px)
    .list-questions
      .image-item-indicator
        // background: url('/source/assets/img/cuadro.png') !important
        // replace
        background: url('/mundial/trivia/dist/cuadro.png') !important
    .container-question
      h2
        padding: 38px 20px !important
      .container-answers
        .answer
          width: 45% !important
      .answer-two-columns
        .answer
          width: 45% !important
  @media screen and (min-width: 620px)
    .container-question
      h2
        padding: 30px 0 !important
        font-size: 31px !important
        line-height: 35px !important
  @media screen and (min-width: 768px)
    .logo-clock
      margin-top: -35px !important
      img
        width: 250px !important
        margin-left: initial !important
        margin-right: initial !important
    .list-questions
      margin-left: auto !important
      margin-right: auto !important
      width: 80% !important
      .item-indicator
        margin-top: inherit !important
        width: 168px !important
    .container-trivia
      margin-top: 70px
    .container-question
      .container-answers
        width: 80% !important
        .answer
          width: 195px !important
          .txt-option
            width: 155px !important
      .answer-two-columns
        width: 410px !important
        flex-wrap: inherit !important
        -ms-flex-wrap: inherit !important
      .wrap-answer
        width: 655px !important
        max-width: inherit !important
        align-items: inherit !important
        flex-direction: inherit !important
        -ms-flex-direction: inherit !important
        -ms-flex-align: inherit !important
        .wrap-image
          width: 320px !important
          height: 180px !important
          margin-right: 15px !important
          margin-bottom: inherit !important
        .container-answer-wrap
          margin: 0 !important
          .answer-wrap
            margin: auto !important
            width: 100% !important
    .questionOk
      // background: url('/source/assets/img/cuadro1.png') !important
      // replace
      background: url('/mundial/trivia/dist/cuadro1.png') !important
    .questionWrong
      // background: url('/source/assets/img/cuadro2.png') !important
      // replace
      background: url('/mundial/trivia/dist/cuadro2.png') !important
  @media screen and (min-width: 1024px)
    .list-questions
      width: 100% !important
    .container-question .container-answers
      justify-content: space-between !important
      flex-wrap: inherit !important
      -ms-flex-pack: justify !important
      -ms-flex-wrap: inherit !important
    .container-question .container-answers:not(.answer-two-columns)
      width: 100% !important
    .container-question .wrap-answer
      width: 845px !important
      .wrap-image
        width: 340px !important
  @media screen and (min-width: 1025px)
    .container-trivia
      margin-top: 0
</style>
