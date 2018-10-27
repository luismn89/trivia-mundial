<template>
  <section>
    <div class="container-winners">
      <figure class="logo">
        <img :src="`${urlStaticFile}LA TRIVIA_EL GALLO MÁS GALLO.png`" class="imagelink" @click="goHome">
      </figure>
      <!-- <div class="title-winners">
        <h2>ganadores</h2>
        <p>Ganador de 1500 soles</p>
      </div> -->
      <!-- <div class="box-winner">
        <figure class="logo-cup">
          <img :src="`${urlStaticFile}trophy.png`">
        </figure>
        <div class="user-win">
          <!-- <span>{{ itemTop.points }} puntos</span> --
          <p>{{ itemTop.first_name }} {{ itemTop.last_name }}</p>
          <span v-show="isDesktop">DNI: {{ itemTop.dni }}</span>
        </div>
      </div>
      <span class="line-separator" v-show="isDesktop"></span> -->
      <div class="sec-list-winners">
        <div class="title-list">
          <figure class="logo-cup">
            <img :src="`${urlStaticFile}shirt.png`">
          </figure>
          <div class="description">
            <p>Ganadores de s/. 200</p>
          </div>
        </div>
        <div class="btns-weeks">
            <a href="#" :class="[ listStaticWinners[0].active ? 'active' : '' ]" @click.prevent="setListWinner(1)">Semana 1</a>
            <a href="#" :class="[ listStaticWinners[1].active ? 'active' : '' ]" @click.prevent="setListWinner(2)">Semana 2</a>
            <a href="#" :class="[ listStaticWinners[2].active ? 'active' : '' ]" @click.prevent="setListWinner(3)">Semana 3</a>
            <a href="#" :class="[ listStaticWinners[3].active ? 'active' : '' ]" @click.prevent="setListWinner(4)">Semana 4</a>
        </div>
        <div class="box-table-winners">
          <ul class="table-winners">
            <li class="headers" v-show="isDesktop">
              <p class="number-position">Puesto</p>
              <p class="name-user">Nombre y Apellido</p>
              <p class="id-user" v-show="isDesktop">DNI</p>
              <!-- <p class="points">Puntos</p> -->
            </li>
            <li class="user-data" v-for="(item, index) in listStaticWinnersFilter" :key="item.id">
              <p class="number-position">{{ positionIndex(index, item) }}</p>
              <p class="name-user">{{ item.first_name | uppercase }} {{ item.last_name | uppercase }}</p>
              <p class="id-user">{{ item.dni }}</p>
              <!-- <p class="points">{{ item.points }} <span v-show="!isDesktop">pts.</span></p> -->
            </li>
          </ul>
          <ul class="pagination" v-if="isDesktop">
            <li v-for="item in countTotalPages" class="item-page" :class="[ indexCurrent == item ? 'active' : '' ]">
              <a href="#" @click.prevent="goPagination(item)">{{ item }}</a>
            </li>
          </ul>
          <div class="btns-pagination" v-if="!isDesktop">
            <a href="#" class="icon-left-open-1" @click.prevent="goPagination((indexCurrent > 1) ? indexCurrent - 1 : null)"></a>
            <p>Ver más ganadores</p>
            <a href="#" class="icon-right-open-1" @click.prevent="goPagination((indexCurrent < countTotalPages.length) ? indexCurrent + 1 : null)"></a>
          </div>
        </div>
      </div>
    </div>
    <a href="#" class="btn-up" @click.prevent="goToTop()"><i class="icon-up-open-1"></i></a>
  </section>
</template>
<script>
  import API from '../service/api';
  export default {
    data() {
      return {
        limit: 5,
        indexCurrent: 1,
        starBucle: 0,
        listWinners: [],
        totalPages: [],
        initPagination: 1,
        listStaticWinners: [
          {
            week: 1,
            active: false,
            winners: [
              { dni: '07961500', first_name: 'Felipe', last_name: 'Silva Sologuren'},
              { dni: '43245639', first_name: 'Daniel', last_name: 'Urbina Ruíz'},
              { dni: '16555550', first_name: 'Gregorio', last_name: 'Pisfil Pisfil'},
              { dni: '42845942', first_name: 'Christian', last_name: 'Coronel Chomba'},
              { dni: '09952042', first_name: 'Angel', last_name: 'Rodriguez Naola'},
              { dni: '45074084', first_name: 'Enrique', last_name: 'Calderon Haro'},
              { dni: '44532818', first_name: 'Henry Peter', last_name: 'Torres Marca'},
            ]
          },
          {
            week: 2,
            active: false,
            winners: [
              { dni: '09962166', first_name: 'Edgar', last_name: 'Morales Nery'},
              { dni: '72500105', first_name: 'Carlos', last_name: 'Pajuelo Cueva'},
              { dni: '06793242', first_name: 'Michel', last_name: 'Berger Mendoza'},
              { dni: '10408068', first_name: 'Christian', last_name: 'Ramirez Calixto'},
              { dni: '40717612', first_name: 'Israel', last_name: 'Gongora Huamani'},
              { dni: '70391815', first_name: 'Jenner', last_name: 'Raymundo Rodriguez'},
              { dni: '70598425', first_name: 'Marcell', last_name: 'Hernandez Ninaja'},
            ]
          },
          {
            week: 3,
            active: false,
            winners: [
              { dni: '06257652', first_name: 'HUGO', last_name: 'BUSTAMANTE TELLO' },
              { dni: '40291371', first_name: 'CARLOS MARX', last_name: 'CARRASCO FORTON' },
              { dni: '08171814', first_name: 'MARIO EMILIANO', last_name: 'TOLENTINO FLORES' },
              { dni: '72500105', first_name: 'CARLOS ALONSO', last_name: 'PAJUELO CUEVA' },
              { dni: '71849421', first_name: 'GONZALO ERNESTO', last_name: 'GARCIA TALLEDO' },
              { dni: '48122259', first_name: 'JUAN ANTONIO', last_name: 'TITO PRADO' },
              { dni: '48055452', first_name: 'ANIBAL', last_name: 'CALLE REDONDO' }
            ]
          },
          {
            week: 4,
            active: true,
            winners: [
              { dni: '08171814', first_name: 'MARIO EMILIANO', last_name: 'TOLENTINO FLORES' },
              { dni: '07961500', first_name: 'FELIPE GUILLERMO', last_name: 'SILVA SOLOGUREN' },
              { dni: '06257652', first_name: 'HUGO', last_name: 'BUSTAMANTE TELLO' },
              { dni: '02664999', first_name: 'GONZALO ESTUARDO', last_name: 'GARCIA LAMADRID' },
              { dni: '09829466', first_name: 'IVAN HERRY', last_name: 'PALACIOS PILLACA' },
              { dni: '07613546', first_name: 'CARLOS ENRIQUE', last_name: 'PAJUELO MALAGA' },
              { dni: '00402562', first_name: 'EDITH NORMA', last_name: 'MONTES DE OCA FUENTES' },
              { dni: '78550182', first_name: 'FLOR ELI', last_name: 'VILLANUEVA PONCE' },
              { dni: '75880908', first_name: 'CESAR IGNACIO', last_name: 'MAQUERA TICONA' },
              { dni: '47146471', first_name: 'GABRIELA MARIA', last_name: 'MATIAS APOLAYA' },
              { dni: '75137924', first_name: 'HAROLD RODOLFO', last_name: 'CORDOVA MUÑOZ' },
              { dni: '48590013', first_name: 'EDGARD ANDRÉS', last_name: 'OLIVEROS ANDRADE' }
            ]
          }
        ]
      }
    },
    filters: {
      uppercase(value) {
        return value.toUpperCase();
      }
    },
    computed: {
      isDesktop() {
        return (window.innerWidth > 1025) ? true : false;
      },
      urlStaticFile(){
        return window.location.hostname == 'localhost' ? '/source/assets/img/' : '/mundial/trivia/dist/';
      },
      itemTop(){
        // return this.listWinners.length > 0 ? this.listWinners[0] : { points: '-', name: '-', dni: '' }
        return this.listStaticWinners[3].winners.length > 0 ? this.listStaticWinners[3].winners[0] : { points: '-', name: '-', dni: '' }
      },
      listStaticWinnersFilter() {
        let listAux = []
        this.listStaticWinners.forEach(item_week => {
          if (item_week.active) {
            for (let i = this.starBucle, j = 0; j < this.limit; j++) {
              if (i < item_week.winners.length) {
                let ele = item_week.winners[j + i];
                listAux.push(ele !== undefined ? ele : { dni: '', first_name: '', last_name: '', points: '' });
              }
            }
          }
        })
        return listAux
      },
      listWinnersFilter() {
        let listAux = []
        for (let i = this.starBucle, j = 0; j < this.limit; j++) {
          if (i < this.listWinners.length) {
            let ele = this.listWinners[j + i];
            listAux.push(ele !== undefined ? ele : { dni: '', first_name: '', last_name: '', points: '' });
          }
        }
        return listAux
      },
      countTotalPages() {
        let array = [];
        this.listStaticWinners.forEach(item_week => {
          if (item_week.active){
            let totalElements = item_week.winners.length,
                totalPag = totalElements / 5;
            for (let i = 0; i < totalPag; i++) {
                array.push(i + 1)
            }
          }
        })
        return array
      }
    },
    methods: {
      goToTop() {
        let scrollDocument = document.documentElement || document.body;
        scrollDocument.scroll({ top: 0, behavior: "smooth" });
      },
      goPagination(index) {
        if (index != null) {
          this.indexCurrent = index
          this.starBucle = this.limit * (index - 1)
        }
      },
      goHome() {
        this.$router.push(`/`);
      },
      setListWinner(page) {
        this.indexCurrent = 1;
        this.starBucle = 0;
        this.listStaticWinners.forEach(item_week => item_week.active = (item_week.week == page) ? true : false )
      },
      positionIndex(index, el) {
        return el.first_name ? ((this.limit * (this.indexCurrent - 1)) + index) + 1 : '';
      }
    },
    created() {
      this.$store.state.winners = [];
      API.getWinners()
        .then((responseWinners) => {
          let dataWinners = responseWinners.body;
          for (let i = 0; i < dataWinners.length; i++){
            this.$store.state.winners.push(dataWinners[i]);
          }
        })
        .catch((errorWinners) => {
          console.log(errorWinners)
        });
    },
    mounted() {
      this.listWinners = this.$store.state.winners;
      let totalElements = 50,
          totalPag = totalElements / 5,
          array = [];
      for (let i = 0; i < totalPag; i++) {
          array.push(i + 1)
      }
      this.totalPages = array
      let body = document.body;
      body.className = '';
      body.className = 'background-body-winner'
    }
  }
</script>
<style lang="sass">
  @import '../assets/sass/partials/_variables.sass'
  .container-winners
    align-items: center
    background: white
    display: flex
    display: -ms-flexbox
    margin: auto
    margin-top: 15px
    margin-bottom: 80px
    font-family: Rajdhani,sans-serif
    flex-direction: column
    padding: 19px 0 0
    width: 93%
    -ms-flex-align: center
    -ms-flex-direction: column
    figure.logo
      margin: 0 auto
      width: 160px
      img
        width: 100%
      &:hover
          cursor: pointer
    .title-winners
      text-align: center
      h2
        font-weight: bold
        font-size: 30px
        text-transform: uppercase
        margin: 30px 0 8px 0
      p
        font-size: 20px
        margin: 0
    .box-winner
      font-family: Rajdhani,sans-serif
      display: flex
      display: -ms-flexbox
      flex-direction: column
      width: 100%
      margin: 15px auto
      margin-bottom: 34px
      -ms-flex-direction: column
      .logo-cup
        background: #ffff3d
        border-radius: 50%
        padding: 20px 25px
        align-items: center
        display: flex
        display: -ms-flexbox
        -ms-flex-align: center
        margin: 0 auto
        width: 100px
        img
          height: 60px
          width: 50px
      .user-win
        display: flex
        display: -ms-flexbox
        flex-direction: column
        justify-content: center
        margin: 0 auto
        text-align: center
        width: 219px
        -ms-flex-pack: center
        -ms-flex-direction: column
        p
          font-size: 32px
          font-weight: 400
          line-height: 26px
          margin: 0
          margin-top: 18px
        span
          display: block
          font-size: 16px
          line-height: 20px
          margin-top: 10px
    .line-separator
      background: #cccccc
      display: block
      height: 1px
      margin: 0 auto
      width: 800px
    .sec-list-winners
      width: 100%
      .title-list
        font-family: Rajdhani,sans-serif
        display: flex
        display: -ms-flexbox
        flex-direction: column
        justify-content: center
        margin: 15px auto
        margin-top: 0
        -ms-flex-pack: center
        -ms-flex-direction: column
        .logo-cup
          background: #ffff3d
          border-radius: 50%
          padding: 24px 20px
          align-items: center
          display: flex
          display: -ms-flexbox
          -ms-flex-align: center
          margin: 0
          margin: 0 auto
          width: 100px
          img
            height: 52px
            width: 60px
        .description
          display: flex
          display: -ms-flexbox
          align-items: center
          -ms-flex-align: center
          p
            font-size: 20px
            font-weight: 500
            line-height: 20px
            margin: 10px auto 0 auto
    .btns-weeks
        display: flex
        display: -ms-flexbox
        justify-content: space-between
        flex-wrap: wrap
        -ms-flex-pack: justify
        -ms-flex-wrap: wrap
        margin: 20px auto 10px auto
        padding: 0 20px
        a
          border-radius: 10px
          border: 1px solid black
          color: black
          padding: 10px 15px
          margin-top: 10px
          &:hover
            text-decoration: underline
        a.active
          background: #ffff3d
          border: 0
          text-decoration: none
    .box-table-winners
      margin-top: 10px
      // margin-top: 28px
      .table-winners
        font-family: Rajdhani,sans-serif
        list-style: none
        margin: 0 auto
        margin-bottom: 20px
        padding: 0 10px
        width: 100%
        li
          display: flex
          display: -ms-flexbox
        li p:not(.name-user)
          text-align: center
        .headers p
          color: #cccccc
          font-size: 14px
          margin: 0
        .user-data
          font-size: 16px
        .user-data:not(:last-child)
          border-bottom: 1px solid #cccccc
        .user-data p
          margin-top: 20px
          margin-bottom: 17px
        .number-position
          width: 14%
        .name-user
          width: 59%
        .id-user
          width: 30%
        .points
          width: 25%
      .pagination
        display: flex
        display: -ms-flexbox
        list-style: none
        margin: 24px auto 50px auto
        padding: 0
        width: 385px
        justify-content: center
        -ms-flex-pack: center
        .item-page
          margin-right: 10px
          // &:last-child a
          //   padding: 3px 4px
        .item-page a
          border: 1px solid #cccccc
          border-radius: 50%
          color: #cccccc
          padding: 3px 8px
        .item-page.active a
          background: #ffff3d
          border-color: #ffff3d
          color: black
          font-weight: bold
      .btns-pagination
        background: black
        display: flex
        display: -ms-flexbox
        font-family: Rajdhani,sans-serif
        justify-content: space-between
        -ms-flex-pack: justify
        a
          background: #ffff3d
          color: black
          font-size: 45px
          padding: 0
        p
          color: white
          font-size: 16px
          line-height: 20px
          padding: 0
          margin: 17px 23px
  .btn-up
    position: fixed
    bottom: 35px
    right: 10px
    background: $yellow
    border: 1px solid $yellow
    border-radius: 5px
    color: $black
    padding: 7px
    font-size: 27px
    &:hover
      background: $orange
      border-color: $orange
      color: $white
  @media screen and (min-width: 390px)
    .container-winners
      .btns-weeks
        padding: 0 40px
  @media screen and (min-width: 420px)
    .container-winners
      .btns-weeks
        padding: 0 50px
  @media screen and (min-width: 440px)
    .container-winners
      .btns-weeks
        padding: 0 60px
  @media screen and (min-width: 460px)
    .container-winners
      .btns-weeks
        padding: 0 70px
  @media screen and (min-width: 480px)
    .container-winners
      .btns-weeks
        padding: 0 80px
  @media screen and (min-width: 502px)
    .container-winners
      .btns-weeks
        padding: 0 20px
  @media screen and (min-width: 620px)
    .container-winners
      align-items: inherit !important
      max-width: 770px !important
      padding: 30px 0 0 0 !important
      -ms-flex-align: inherit !important
      .box-winner
        width: 600px
      .btns-weeks
        flex-wrap: no-wrap
        justify-content: center
        -ms-flex-wrap: no-wrap
        -ms-flex-pack: center
        margin: 30px auto
        padding: 0
        a:not(:first-child)
          margin-left: 30px
      .box-table-winners
        margin-top: 28px
  @media screen and (min-width: 768px)
    .btn-up
      right: 35px
    .container-winners
      padding-bottom: 0 !important
    .container-winners
      .line-separator
        width: 100%
    .btns-weeks
      a:not(:first-child)
        margin-left: 40px
  @media screen and (min-width: 1024px)
    .container-winners
      margin-top: 15px
      max-width: 968px !important
      padding: 19px 0 40px 0
      width: 100% !important
      .box-winner
        flex-direction: initial
        margin-bottom: 58px
        -ms-flex-direction: initial
        .logo-cup
          margin-right: 20px
        .user-win
          text-align: initial
          width: initial
          margin-left: 0
          p
            font-size: 35px
            line-height: 36px
            margin-top: 0
          span
            margin-top: 0
      .sec-list-winners
        .title-list
          flex-direction: initial
          margin-top: 20px
          -ms-flex-direction: initial
          .logo-cup
            margin: 0
            margin-right: 20px
          .description p
            margin: 0
      .line-separator
        width: 800px
      .box-table-winners
        .table-winners
          padding: 0
          margin-bottom: 0
          width: 865px
          .user-data
            font-size: 23px
            border-bottom: 1px solid #cccccc
          .number-position
            width: 15%
          .name-user
            width: 65%
  // @media screen and (min-width: 1025px)
  //   .container-winners
  //     margin-top: 10px
</style>
