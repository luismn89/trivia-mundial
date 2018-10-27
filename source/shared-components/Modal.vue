<template>
    <div v-show="modal">
        <div class="overlay" ></div>
        <div class="boxContainer">
          <div class="box-modal">
              <section id="modal-register" v-if="typemodal == 'register'" class="modal">
                  <img :src="`${urlStaticFile}LA TRIVIA_EL GALLO MÁS GALLO.png`">
                  <div class="container-modal">
                      <h2>LA TRIVIA MUNDIALISTA</h2>
                      <form id="form_register" @submit.prevent="sendFormRegister">
                          <p v-show="!spinner_register" class="field-two-columns">
                              <input type="text" class="input-text" placeholder="Nombre (*)" name="first-name" v-model="user.firstName" @blur="validFormRegister" />
                          </p>
                          <p v-show="!spinner_register" class="field-two-columns">
                              <input type="text" class="input-text" placeholder="Apellido paterno (*)" name="last-name-father" v-model="user.lastNameFather" @blur="validFormRegister"/>
                          </p>
                          <p v-show="!spinner_register" class="field-two-columns">
                              <input type="text" class="input-text" placeholder="Apellido materno (*)" name="last-name-mother" v-model="user.lastNameMother" @blur="validFormRegister"/>
                          </p>
                          <p v-show="!spinner_register" class="field-two-columns">
                              <input type="text" class="input-text" placeholder="DNI (*)" name="dni" v-model="user.dni" @blur="validFormRegister"/>
                          </p>
                          <p v-show="!spinner_register" class="field-two-columns">
                              <!-- <input id="idDate" type="text" class="input-text" placeholder="Fecha de nacimiento" name="birthday" v-model="user.birthday" @blur="validFormRegister"/> -->
                              <select name="day" class="select-field input-text day" v-model="user.dayBirth" required>
                                <option value="">DÍA</option>
                                <option :value="day" v-for="day in listDays">{{ day }}</option>
                              </select>
                              <select name="month" class="select-field input-text month" v-model="user.monthBirth" required>
                                <option value="">MES</option>
                                <option :value="month.num" v-for="month in listMonths">{{ month.name }}</option>
                              </select>
                              <select name="year" class="select-field input-text year" v-model="user.yearBirth" required>
                                <option value="">AÑO</option>
                                <option :value="year" v-for="year in listYears">{{ year }}</option>
                              </select>
                          </p>
                          <p v-show="!spinner_register" class="field-two-columns">
                              <input type="text" class="input-text" placeholder="Correo electrónico (*)" name="email" v-model="user.email" @blur="validFormRegister"/>
                          </p>
                          <p v-show="!spinner_register" class="field-two-columns">
                              <input type="text" class="input-text" placeholder="Teléfono (*)" name="phone" minlength="7" v-model="user.phone" @blur="validFormRegister"/>
                          </p>
                          <p v-show="!spinner_register" class="field-two-columns">
                              <input type="radio" class="input-check" id="id-gen-male" name="gender" value="1" v-model="user.gender" required>
                              <label for="id-gen-male">Masculino</label>
                              <input type="radio" class="input-check" id="id-gen-female" name="gender" value="2" v-model="user.gender">
                              <label for="id-gen-female">Femenino</label>
                          </p>
                          <p v-show="!spinner_register" class="field-two-columns">
                              <select name="status" class="select-field input-text" v-model="user.status">
                                <option value="">Estado civíl (*)</option>
                                <option value="1">Soltero (a)</option>
                                <option value="2">Casado (a)</option>
                                <option value="3">Viudo (a)</option>
                                <option value="4">Divorciado (a)</option>
                              </select>
                          </p>
                          <p v-show="!spinner_register" class="field-two-columns">
                              <select name="departamento" class="select-field input-text" v-model="departamento">
                                <option value="">Departamento (*)</option>
                                <option :value="depa.id" v-for="depa in listDepartamentos">{{ depa.name }}</option>
                              </select>
                          </p>
                          <p v-show="!spinner_register" class="field-two-columns">
                              <select name="provincia" class="select-field input-text" v-model="provincia" :class="[ isProvinciaDisabled ? 'selectDisabled' : '' ]" :disabled="isProvinciaDisabled">
                                <option value="">Provincia (*)</option>
                                <option :value="provincia.id" v-for="provincia in listProvincias">{{ provincia.name }}</option>
                              </select>
                          </p>
                          <p v-show="!spinner_register" class="field-two-columns">
                              <select name="distrito" class="select-field input-text" v-model="distrito" :class="[ isDistritDisabled ? 'selectDisabled' : '' ]" :disabled="isDistritDisabled">
                                <option value="">Distrito (*)</option>
                                <option :value="distrito.id" v-for="distrito in listDistritos">{{ distrito.name }}</option>
                              </select>
                          </p>
                          <p v-show="!spinner_register" class="field-two-columns">
                              <select name="ocupation" class="select-field input-text" v-model="user.ocupation">
                                <option value="">Ocupación (*)</option>
                                <option value="1">Administración</option>
                                <option value="2">Administración de Negocios Internacionales</option>
                                <option value="3">Administración Turismo y Hotelería</option>
                                <option value="4">Antropología</option>
                                <option value="5">Arqueología</option>
                                <option value="6">Arquitectura</option>
                                <option value="7">Arquitectura Interiores</option>
                                <option value="8">Arte</option>
                                <option value="9">Asistente de Gerencia / Secretariado</option>
                                <option value="10">Automotores y Diesel</option>
                                <option value="11">Aviación Comercial</option>
                                <option value="12">Bar</option>
                                <option value="13">Bienes Raices</option>
                                <option value="14">Biología</option>
                                <option value="15">Cajero / Promotor de Servicios</option>
                                <option value="16">Chef</option>
                                <option value="17">Ciencias de la Comunicación</option>
                                <option value="18">Ciencias Sociales</option>
                                <option value="19">Cine</option>
                                <option value="20">Comercio Exterior</option>
                                <option value="21">Computación e Informática</option>
                                <option value="22">Comunicación Audiovisual</option>
                                <option value="23">Comunicación Social</option>
                                <option value="24">Conservación y Restauración</option>
                                <option value="25">Construcción Civil</option>
                                <option value="26">Construcciones Metálicas</option>
                                <option value="27">Contabilidad</option>
                                <option value="28">Controles Eléctricos Industriales</option>
                                <option value="29">Cuero y Calzado</option>
                                <option value="30">Derecho Administrativo</option>
                                <option value="31">Derecho Corporativo</option>
                                <option value="32">Derecho Financiero</option>
                                <option value="33">Derecho Penal</option>
                                <option value="34">Derecho Procesal</option>
                                <option value="35">Derecho Público</option>
                                <option value="36">Derecho Tributario</option>
                                <option value="37">Dibujo Arquitectónico</option>
                                <option value="38">Dibujo de Construcción Civil</option>
                                <option value="39">Dirección y realización de Cine y TV</option>
                                <option value="40">Diseño de Interiores</option>
                                <option value="41">Diseño Gráfico</option>
                                <option value="42">Diseño Modas</option>
                                <option value="43">Diseño Textil</option>
                                <option value="44">Diseño Web</option>
                                <option value="45">Ebanistería y Decoración</option>
                                <option value="46">Economía</option>
                                <option value="47">Edificaciones</option>
                                <option value="48">Eduación Secundaria</option>
                                <option value="49">Educación Especial</option>
                                <option value="50">Educación Física</option>
                                <option value="51">Educación Idiomas</option>
                                <option value="52">Educación Inicial</option>
                                <option value="53">Educación Primaria</option>
                                <option value="54">Electricidad</option>
                                <option value="55">Electrónica</option>
                                <option value="56">Electrónica y Automatización Industrial</option>
                                <option value="57">Electrotecnia</option>
                                <option value="58">Electrotecnia Industrial</option>
                                <option value="59">Enfermería</option>
                                <option value="60">Escultura</option>
                                <option value="61">Estomatología</option>
                                <option value="62">Farmacia</option>
                                <option value="63">Filosofía</option>
                                <option value="64">Finanzas y Banca</option>
                                <option value="65">Física</option>
                                <option value="66">Fisioterapia y Rehabilitación</option>
                                <option value="67">Fotografía</option>
                                <option value="68">Fuerza Motriz</option>
                                <option value="69">Gastronomía</option>
                                <option value="70">Geofísica</option>
                                <option value="71">Ginecología</option>
                                <option value="72">Grabado</option>
                                <option value="73">Guía Oficial de Turismo</option>
                                <option value="74">Historia</option>
                                <option value="75">Ingenería de Sistemas</option>
                                <option value="76">Ingeniería Acuícola</option>
                                <option value="77">Ingeniería Agrícola</option>
                                <option value="78">Ingeniería Agroindustrial</option>
                                <option value="79">Ingeniería Agrónoma</option>
                                <option value="80">Ingeniería Agropecuaria</option>
                                <option value="81">Ingeniería Ambiental</option>
                                <option value="82">Ingeniería Biotecnológica</option>
                                <option value="83">Ingeniería Civil</option>
                                <option value="84">Ingeniería de Materiales</option>
                                <option value="85">Ingeniería de Minas</option>
                                <option value="86">Ingeniería de Recursos Naturales y Energías Renovables</option>
                                <option value="87">Ingeniería de Sonido</option>
                                <option value="88">Ingeniería de Transporte</option>
                                <option value="89">Ingeniería Eléctrica</option>
                                <option value="90">Ingeniería Electrónica</option>
                                <option value="91">Ingeniería en Energía</option>
                                <option value="92">Ingeniería en Higiene y Seguridad Industrial</option>
                                <option value="93">Ingeniería Forestal</option>
                                <option value="94">Ingeniería Geográfica</option>
                                <option value="95">Ingeniería Geológica</option>
                                <option value="96">Ingeniería Industrial</option>
                                <option value="97">Ingeniería Industrias Alimentarias</option>
                                <option value="98">Ingeniería Mecánica</option>
                                <option value="99">Ingeniería Mecánica de Fluidos</option>
                                <option value="100">Ingeniería Mecánico - Electricista</option>
                                <option value="101">Ingeniería Mecatrónica</option>
                                <option value="102">Ingeniería Metalúrgica</option>
                                <option value="103">Ingeniería Naval</option>
                                <option value="104">Ingeniería Pesquera</option>
                                <option value="105">Ingeniería Petroquímica</option>
                                <option value="106">Ingeniería Química</option>
                                <option value="107">Ingeniería Sanitaria</option>
                                <option value="108">Ingeniería Telecomunicaciones</option>
                                <option value="109">Ingeniería Textil</option>
                                <option value="110">Ingeniería Zootecnia</option>
                                <option value="111">Investigación Operativa</option>
                                <option value="112">Joyería, Orfebrería y Platería</option>
                                <option value="113">Laboratorio Clínico</option>
                                <option value="114">Laboratorio de Suelos</option>
                                <option value="115">Lenguas Modernas, Interpretación</option>
                                <option value="116">Lingüística</option>
                                <option value="117">Literatura</option>
                                <option value="118">Mantenimiento de Maquinaria de Planta</option>
                                <option value="119">Mantenimiento de Maquinaria Pesada</option>
                                <option value="120">Manualidades</option>
                                <option value="121">Maquillaje Profesional</option>
                                <option value="122">Marketing</option>
                                <option value="123">Matemáticas</option>
                                <option value="124">Mecánica Automotriz</option>
                                <option value="125">Mecánica de Producción</option>
                                <option value="126">Medicina Humana</option>
                                <option value="127">Medios Digitales</option>
                                <option value="128">Metalmecánica</option>
                                <option value="129">Microbiologia y Parasitología</option>
                                <option value="130">Música</option>
                                <option value="131">Nutrición</option>
                                <option value="132">Obstetricia</option>
                                <option value="133">Oceanografía</option>
                                <option value="134">Odontología</option>
                                <option value="135">Oncología</option>
                                <option value="136">Operaciones y Logística</option>
                                <option value="137">Optometría</option>
                                <option value="138">Otros</option>
                                <option value="139">Pastelería</option>
                                <option value="140">Pediatría</option>
                                <option value="141">Periodismo</option>
                                <option value="142">Pintura</option>
                                <option value="143">Podología</option>
                                <option value="144">Procesos Químicos y Metalúrgicos</option>
                                <option value="145">Producción Textil</option>
                                <option value="146">Prótesis Dental</option>
                                <option value="147">Psicología Clínica</option>
                                <option value="148">Psicología Educativa</option>
                                <option value="149">Psicología Organizacional</option>
                                <option value="150">Psicología Social o Comunitaria</option>
                                <option value="151">Psiquiatría</option>
                                <option value="152">Publicidad</option>
                                <option value="153">Radiodifusión</option>
                                <option value="154">Radiología</option>
                                <option value="155">Redes y Comunicaciones de Datos</option>
                                <option value="156">Refrigeración</option>
                                <option value="157">Relaciones Industriales</option>
                                <option value="158">Sociología</option>
                                <option value="159">Técnico en Computadoras</option>
                                <option value="160">Técnico en Telefonía</option>
                                <option value="161">Tecnología Médica</option>
                                <option value="162">Tecnologías de Información</option>
                                <option value="163">Teleoperador</option>
                                <option value="164">Teología</option>
                                <option value="165">Topografía</option>
                                <option value="167">Trabajos en Madera</option>
                                <option value="166">Trabajo social</option>
                                <option value="168">Traducción</option>
                                <option value="169">Urbanismo</option>
                                <option value="170">Ventas</option>
                                <option value="171">Veterinaria</option>
                              </select>
                          </p>
                          <p v-show="!spinner_register" class="field-two-columns">
                              <select name="level-academic" class="select-field input-text" v-model="user.level_academic">
                                <option value="">Nivel académico (*)</option>
                                <option value="9">Postgrado / MBA</option>
                                <option value="2">Primaria Completa</option>
                                <option value="1">Primaria Incompleta</option>
                                <option value="4">Secundaria Completa</option>
                                <option value="3">Secundaria Incompleta</option>
                                <option value="6">Superior Técnico Completa</option>
                                <option value="5">Superior Técnico Incompleta</option>
                                <option value="8">Superior Univ. Completa</option>
                                <option value="7">Superior Univ. Incompleta</option>
                              </select>
                          </p>
                          <p v-show="!spinner_register" class="field-two-columns">
                              <input type="password" class="input-text" placeholder="Contraseña (*)" name="password" v-model="user.password" @blur="validFormRegister"/>
                          </p>
                          <p v-show="!spinner_register" class="field-two-columns">
                              <input type="password" class="input-text" placeholder="Confirmar contraseña (*)" name="confirm_password" v-model="user.confirm_password" @blur="validFormRegister"/>
                          </p>
                          <p v-show="!spinner_register" class="field-columns">
                              <input type="text" class="input-text" placeholder="Dirección (opcional)" name="address" v-model="user.address"/>
                          </p>
                          <p v-show="!spinner_register" style="text-align:left">(*) Campos obligatorios.</p>
                          <p v-show="!spinner_register" class="container-check">
                              <vue-recaptcha :sitekey="key_recaptcha" :size="sizeCaptcha" class="recaptcha recaptcha-register"></vue-recaptcha>
                          </p>
                          <p v-show="!spinner_register" class="container-check">
                              <input type="checkbox" class="input-check" id="id-robot" name="" value="1" v-model="user.terms_checked">
                              <label for="id-robot">Acepto los Términos y Condiciones y Política de Privacidad</label>
                          </p>
                          <p v-show="!spinner_register">
                              <input type="submit" class="btn-form" name="boton" value="REGISTRARME" />
                          </p>
                          <label class="error-msg" v-show="!f_register_valid && message_error_register != ''"><i class="icon-attention-1"></i>{{ message_error_register }}</label>
                          <label v-show="spinner_register"><img class="spinner" :src="`${urlStaticFile}loading.gif`"></label>
                          <label v-show="spinner_register" class="msg-status">{{ message_status }}</label>
                          <label class="link">¿Ya tienes una cuenta? <a href="#" @click.prevent="changeModal('login')">Inicia Sesión</a></label>
                      </form>
                  </div>
                  <a href="#" class="btn-close icon-cancel-5" @click.prevent="changeModal('')"></a>
              </section>
              <section id="modal-login" v-if="typemodal == 'login'" class="modal">
                  <img :src="`${urlStaticFile}LA TRIVIA_EL GALLO MÁS GALLO.png`">
                  <div class="container-modal">
                      <form id="form_login" @submit.prevent="sendFormLogin">
                          <p v-show="!spinner_login">
                              <input type="text" class="input-text" placeholder="Correo Electrónico" name="email" v-model="login.email" @blur="validFormLogin"/>
                          </p>
                          <p v-show="!spinner_login">
                              <input type="password" class="input-text" placeholder="Contraseña" name="password" v-model="login.password" @blur="validFormLogin"/>
                          </p>
                          <p v-show="!spinner_login">
                              <vue-recaptcha :sitekey="key_recaptcha" :size="sizeCaptcha" class="recaptcha recaptcha-login"></vue-recaptcha>
                          </p>
                          <p v-show="!spinner_login">
                              <input type="submit" class="btn-form" name="boton" value="INICIAR SESIÓN" />
                          </p>
                          <label class="error-msg" v-show="!f_login_valid && message_error_login != ''"><i class="icon-attention-1"></i>{{ message_error_login }}</label>
                          <label v-show="spinner_login"><img class="spinner" :src="`${urlStaticFile}loading.gif`" alt="" /></label>
                          <label v-show="spinner_login" class="msg-status">{{ message_status }}</label>
                          <label class="link">¿No tienes una cuenta? <a href="#" @click.prevent="changeModal('register')">Regístrate</a></label>
                          <label class="link"><a href="#" @click.prevent="changeModal('forgive')">Olvidé mi contraseña</a></label>
                      </form>
                  </div>
                  <a href="#" class="btn-close icon-cancel-5" @click.prevent="changeModal('')"></a>
              </section>
              <section id="modal-forgive" v-if="typemodal == 'forgive'" class="modal">
                  <img :src="`${urlStaticFile}LA TRIVIA_EL GALLO MÁS GALLO.png`">
                  <div class="container-modal">
                      <h2>Restablece tu contraseña</h2>
                      <h3>Ingresa el correo electrónico con el que te registraste.</h3>
                      <form @submit.prevent="sendRecovery">
                          <p v-show="!spinner_recovery">
                              <input type="text" class="input-text" placeholder="Correo Electrónico" name="email" v-model="emailRecovery" @blur="validFormRecovery"/>
                          </p>
                          <p v-show="!spinner_recovery">
                              <vue-recaptcha :sitekey="key_recaptcha" :size="sizeCaptcha" class="recaptcha recaptcha-forgive"></vue-recaptcha>
                          </p>
                          <p v-show="!spinner_recovery">
                              <input type="submit" class="btn-form" name="boton" value="ENVIAR" />
                          </p>
                          <label class="error-msg" v-show="!f_recovery_valid && message_error_recovery != ''"><i class="icon-attention-1"></i>{{ message_error_recovery }}</label>
                          <label v-show="spinner_recovery"><img class="spinner" :src="`${urlStaticFile}loading.gif`" alt="" /></label>
                          <label class="link">Ir a <a href="#" @click.prevent="changeModal('login')">Logín</a></label>
                          <label class="link">Ir a <a href="#" @click.prevent="changeModal('register')">Registrarse</a></label>
                      </form>
                  </div>
                  <a href="#" class="btn-close icon-cancel-5" @click.prevent="changeModal('')"></a>
              </section>
              <section id="modal-recovery" v-if="typemodal == 'changepass'" class="modal">
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
          </div>
        </div>
    </div>
</template>
<script>
import API from "../service/api";
import VueRecaptcha from "vue-recaptcha";
import Cookie from 'js-cookie';

export default {
  data() {
    return {
      modal: true,
      message_error_register: "",
      message_error_login: "",
      message_error_recovery: "",
      message_error_changepass: "",
      f_register_valid: false,
      f_login_valid: false,
      f_recovery_valid: false,
      f_changepass_valid: false,
      spinner_login: false,
      spinner_register: false,
      spinner_recovery: false,
      spinner_changepass: false,
      login: {
        email: "",
        password: ""
      },
      user: {
        firstName: "",
        lastNameFather: "",
        lastNameMother: "",
        dni: "",
        phone: "",
        email: "",
        password: "",
        confirm_password: '',
        gender: '',
        status: '',
        ocupation: '',
        level_academic: '',
        address: '',
        dayBirth: '',
        monthBirth: '',
        yearBirth: '',
      },
      departamento: '',
      provincia: '',
      distrito: '',
      recovery: {
        new_password: '',
        confirm_password: ''
      },
      emailRecovery: '',
      sending_login: false,
      sending_register: false,
      sending_recovery: false,
      message_status: '',
      recaptcha_recovery: '',
      key_recaptcha: '6LcWeVYUAAAAACDCWu1gA13Vr8SYKx90x76912qr',
      isProvinciaDisabled: true,
      isDistritDisabled: true,
      listDepartamentos: [],
      listProvincias: [],
      listDistritos: []
    };
  },
  components: {
    VueRecaptcha
  },
  watch: {
    departamento(newVal, oldVal) {
        this.getProvincia(newVal)
    },
    provincia(newVal, oldVal) {
        this.getDistritos(newVal)
    }
  },
  computed: {
    sizeCaptcha() {
      return (window.innerWidth > 768) ? 'normal' : 'compact';
    },
    urlStaticFile(){
      return window.location.hostname == 'localhost' ? '/source/assets/img/' : '/mundial/trivia/dist/';
    },
    listYears() { return ['2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990',
                          '1989', '1988', '1987', '1986', '1985', '1984', '1983', '1982', '1981', '1980', '1969', '1978', '1977', '1976', '1975', '1974', '1973', '1972', '1971', '1970', '1969', '1968', '1967', '1966', '1965', '1964', '1963', '1962', '1961', '1960'] },
    listMonths() {
      return [
        { num: '01', name: 'ene'},
        { num: '02', name: 'feb'},
        { num: '03', name: 'mar'},
        { num: '04', name: 'abr'},
        { num: '05', name: 'may'},
        { num: '06', name: 'jun'},
        { num: '07', name: 'jul'},
        { num: '08', name: 'ago'},
        { num: '09', name: 'sep'},
        { num: '10', name: 'oct'},
        { num: '11', name: 'nov'},
        { num: '12', name: 'dic'}
      ];
    },
    listDays() {
      let dateNow = new Date().getMonth();
      return (dateNow == 1) ? [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28] : [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 31]
    }
  },
  methods: {
    goTest(dataQuiz) {
      this.$emit("changemodal", "");
      this.$store.state.images = dataQuiz.images;
      dataQuiz.next_question["is_answered"] = false;
      dataQuiz.next_question["option_answered"] = "";
      for (let i = 0; i < dataQuiz.next_question.choices.length; i++) {
        dataQuiz.next_question.choices[i]["status"] = "";
      }
      this.$store.state.questions.push(dataQuiz.next_question);
      this.$store.state.quiz_id = dataQuiz.quiz_id;
      this.$router.push(`/quiz/${dataQuiz.quiz_id}/pregunta/${dataQuiz.next_question.order}`);
    },
    validFormRegister() {
      let valid = true;
      for (let field in this.user) {
        if (field != 'address') valid *= this.validRequire(this.user[field]);
        if (valid) {
          this.f_register_valid = true;
          this.message_error_register = "";
        } else {
          this.f_register_valid = false;
          this.message_error_register =  "Asegurese de ingresar todos los datos solicitados.";
        }
      }
      if (valid) {
        if (this.validEmail(this.user.email)) {
          this.f_register_valid = true;
          this.message_error_register = "";
            valid = true;
          } else {
            valid = false;
            this.f_register_valid = false;
            this.message_error_register = "Correo electrónico inválido.";
          }
          if (this.user.terms_checked) {
            this.f_register_valid = true;
            this.message_error_register = "";
            valid = true;
          } else {
            valid = false;
            this.f_register_valid = false;
            this.message_error_register = "Seleccione los terminos y condiciones.";
        }
      }
      if(valid) {
        if (this.user.password == this.user.confirm_password) {
          this.f_register_valid = true;
          this.message_error_register = "";
          valid = true;
        } else {
          valid = false;
          this.f_register_valid = false;
          this.message_error_register = "Las contraseñas ingresadas no coinciden.";
        }
      }
      if(valid) {
        let recaptcha = document.querySelector('.recaptcha-register textarea.g-recaptcha-response').value;
        if (!recaptcha){
          valid *= false;
          this.message_error_register = "Asegurese de ingresar el recaptcha.";
        } else {
          this.recaptcha_recovery = recaptcha;
        }
      }
      return valid;
    },
    createTrivia() {
      this.message_status = 'Creando trivia...'
      API.initQuiz({
          "recaptcha": this.recaptcha_recovery
        })
        .then(responseQuiz => {
          this.sending_login = false;
          this.spinner_login = false;
          this.goTest(responseQuiz.body);
          this.login.email = this.login.password = "";
        })
        .catch(error => {
          this.sending_login = false;
          this.spinner_login = false;
          this.f_login_valid = false;
          try {
            this.message_error_login = JSON.parse(error.response.text).error;
          } catch (e) {
            this.message_error_login = "Hubo un problema al momento de iniciar la trivia, intente de nuevo";
          }
        })
    },
    sendFormRegister(evt){
      let isValid = this.validFormRegister();
      if (!isValid) return;
      if (this.sending_register) return;
      this.sending_register = true;
      this.spinner_register = true;
      this.message_status = 'Guardando...'

      let dayBirthDay = this.user.dayBirth < 10 ? `0${this.user.dayBirth}` : this.user.dayBirth;

      let dataUser = {
        first_name: this.user.firstName,
        last_name: this.user.lastNameFather,
        second_last_name: this.user.lastNameMother,
        dni: this.user.dni,
        tlf: this.user.phone,
        email: this.user.email,
        password: this.user.password,
        confirm_password: this.user.confirm_password,
        birth_date: `${dayBirthDay}/${this.user.monthBirth}/${this.user.yearBirth}`,
        recaptcha: this.recaptcha_recovery,
        ocupation: this.user.ocupation,
        academic: this.user.level_academic,
        departamento: this.departamento,
        provincia: this.provincia,
        distrito: this.distrito,
        civil: this.user.status,
        genero: this.user.gender,
        address: this.user.address
      };

      // console.log('asdadsda', dataUser)

      API.registerUser(dataUser)
        .then(responseReg => {
          this.sending_register = false;
          this.spinner_register = false;
          this.f_register_valid = false;
          this.$emit("changemodal", "");
          this.saveDataUser(responseReg.body);

          this.clearForm();
        })
        .catch(error => {
          this.sending_register = false;
          this.spinner_register = false;
          this.f_register_valid = false;
          try {
            this.message_error_register = JSON.parse(error.response.text).error;
          } catch (e) {
            this.message_error_register = "Los datos ingresados son incorrectos, verifique";
          }
        })
    },
    sendFormLogin() {
      let isValid = this.validFormLogin();
      if (!isValid) {
        this.f_login_valid = false;
        return;
      }
      if (this.sending_login) return;
      this.sending_login = true;
      this.spinner_login = true;
      this.message_status = 'Conectando...'
      API.makeLogin({
          "email": this.login.email,
          "password": this.login.password,
          "recaptcha": this.recaptcha_recovery
        })
        .then(responseLogin => {
          console.log(responseLogin);
          this.saveDataUser(responseLogin.body);
          this.clearForm();
          this.createTrivia();
        })
        .catch(error => {
            console.log('error: ', error)
            this.sending_login = false;
            this.spinner_login = false;
            this.f_login_valid = false;
            try {
              this.message_error_login = JSON.parse(error.response.text).error;
            } catch (e) {
              this.message_error_login = "Los datos ingresados son incorrectos, verifique";
            }
        });
    },
    sendRecovery(){
      let cookieCsrftoken = Cookie.get('csrftoken')
      let isValid = this.validFormRecovery();
      if (!isValid) return;
      if (this.sending_recovery) return;
      this.sending_recovery = true;
      this.spinner_recovery = true;

      API.passRecovery({
          "email": this.emailRecovery,
          "recaptcha": this.recaptcha_recovery,
          "csrfmiddlewaretoken" : cookieCsrftoken
        })
        .then(response => {
          console.log(response)
          this.sending_recovery = false;
          this.spinner_recovery = false;
          this.f_recovery_valid = false;
          this.$emit("changemodal", "");
         // this.saveDataUser(responseReg.body);

          this.clearForm();
        })
        .catch(error => {
          console.log(error)
          this.sending_recovery = false;
          this.spinner_recovery = false;
          this.f_recovery_valid = false;
          try {
            this.message_error_recovery = JSON.parse(error.response.text).error;
          } catch (e) {
            this.message_error_recovery = "El email ingresado es incorrecto, verifique";
          }
        })
    },
    validFormRecovery(){
      let valid = true;
      valid = this.validRequire(this.emailRecovery);
      if (valid) {
          this.f_recovery_valid = true;
          this.message_error_recovery = "";
      } else {
          this.f_recovery_valid = false;
          this.message_error_recovery =  "Asegurese de ingresar todos los datos solicitados.";
      }
      if (valid) {
        if (this.validEmail(this.emailRecovery)) {
          this.f_recovery_valid = true;
          this.message_error_recovery = "";
          valid = true;
        } else {
            valid = false;
            this.f_recovery_valid = false;
            this.message_error_recovery = "Correo electrónico inválido.";
        }
      }
      let recaptcha = document.querySelector('.recaptcha-forgive textarea.g-recaptcha-response').value;
      if (!recaptcha){
        valid *= false;
        this.message_error_register = "Asegurese de ingresar el recaptcha.";
      } else {
        this.recaptcha_recovery = recaptcha;
      }
      return valid;
    },
    validFormLogin() {
      let valid = true;
      for (let field in this.login) {
        valid *= this.validRequire(this.login[field]);
        if (valid) {
          this.f_login_valid = true;
          this.message_error_login = "";
        } else {
          this.f_login_valid = false;
          this.message_error_login = "Asegurese de ingresar todos los datos solicitados.";
        }
      }
      if (valid) {
        if (this.validEmail(this.login.email)) {
          this.f_login_valid = true;
          this.message_error_login = "";
        } else {
          this.f_login_valid = false;
          this.message_error_login = "Correo electrónico inválido.";
        }
      }
      let recaptcha = document.querySelector('.recaptcha-login textarea.g-recaptcha-response').value;
      if (!recaptcha){
        valid *= false;
        this.message_error_login = "Asegurese de ingresar el recaptcha.";
      } else {
        this.recaptcha_recovery = recaptcha;
      }
      return valid;
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
      if (valid) {
        if (this.recovery.new_password == this.recovery.confirm_password) {
          this.f_changepass_valid = true;
          this.message_error_changepass = "";
        } else {
          this.f_changepass_valid = false;
          this.message_error_changepass = "Las contraseñas ingresadas no coinciden.";
        }
      }
      return valid;
    },
    saveDataUser(dataUser) {
      this.$store.state.isUserLogged = true;
      this.$store.state.userLogged.firstName = dataUser.first_name;
      this.$store.state.userLogged.lastName = dataUser.last_name;
      this.$store.state.userLogged.points = dataUser.points;
      this.$store.state.userLogged.ranking = dataUser.ranking;
      this.$store.state.recaptcha_active = dataUser.recaptcha;
    },
    clearForm(){
      this.login.email = this.login.password = this.user.firstName = this.user.lastName = this.user.dni = this.user.phone = this.user.email = this.user.password = this.user.birthday = this.emailRecovery = "";
      this.recovery.new_password = this.recovery.confirm_password = '';
      // this.$refs.recaptcha.reset();
    },
    changeModal(toModal) {
      this.clearForm();
      this.$emit("changemodal", toModal);
    },
    formatDate(evt) {
      let keyCode = evt.keyCode || evt.charCode || evt.which,
        key = String.fromCharCode(keyCode),
        isNumber = /[0-9]/.test(key),
        isDelete = keyCode == 46 ? true : false;
      if ((isNumber || isDelete) && this.user.birthday.length < 10) {
        if (isNumber) {
          if (this.user.birthday.length == 2 || this.user.birthday.length == 5)
            this.user.birthday += "/";
        }
      } else {
        evt.preventDefault();
        return false;
      }
    },
    validRequire(field) {
      return field != "" ? true : false;
    },
    validEmail(email) {
      let patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return email != "" && patternEmail.test(email) ? true : false;
    },
    onlyNumber(evt) {
      let keyCode = evt.keyCode || evt.charCode || evt.which;
      if (!/^[0-9]$/g.test(String.fromCharCode(keyCode))) evt.preventDefault();
    },
    getDepartamento() {
      API.getDepartamentos()
        .then(response => {
            this.listDepartamentos = response.body
        })
        .catch(error => {
          console.log(error)
        })
    },
    getProvincia(dpto) {
      API.getProvincias(dpto)
        .then(response => {
            this.listProvincias = response.body
            this.isProvinciaDisabled = false
        })
        .catch(error => {
          console.log(error)
        })
    },
    getDistritos(prov) {
      API.getDistritos(prov)
        .then(response => {
            this.listDistritos = response.body
            this.isDistritDisabled = false
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted() {
    if (this.typemodal == "register") {
    //   let fieldDate = document.getElementById("idDate");
    //   fieldDate.addEventListener("keypress", this.formatDate);
        this.getDepartamento();
    }
    let fieldDni = document.querySelector('input[name="dni"]'),
      fieldPhone = document.querySelector('input[name="phone"]');
    if (fieldDni) fieldDni.addEventListener("keypress", this.onlyNumber);
    if (fieldPhone) fieldPhone.addEventListener("keypress", this.onlyNumber);
  },
  props: ["typemodal"]
};
</script>
<style lang="sass">
    @import '../assets/sass/partials/_variables.sass'
    #modal-login
        .container-modal
            padding-top: 20px
    .boxContainer
        align-items: center
        bottom: 0
        display: flex
        display: -ms-flexbox
        left: 0
        height: 100vh
        position: absolute
        right: 0
        top: 0
        z-index: 100000
        -ms-flex-align: center
        overflow-y: auto
    .recaptcha > div
      width: 100% !important
    .msg-status
      justify-content: center
      display: flex
      display: -ms-flexbox
      font-family: Rajdhani,sans-serif
      width: 100%
      -ms-flex-pack: center
    .overlay
        position: fixed
        background: rgba(0, 0, 0, 0.7)
        width: 100%
        top: -20px
        bottom: 0
        left: 0
        z-index: 99999
    .spinner
        height: 40px !important
        width: 40px !important
        margin: 15px auto !important
        display: flex
        display: -ms-flexbox
    .box-modal
        position: absolute
        top: 0
        width: 100%
    .error-msg
        color: #ea1414
        display: block
        font-family: Rajdhani,sans-serif
        margin: 15px auto 5px auto
        text-align: center
        width: 100%
    .btn-close
        position: absolute
        top: 15px
        right: 15px
        color: $white
        border: 3px solid
        border-radius: 50%
        padding: 2px 1px
        &:hover
            background: $orange
    .modal
        width: 95%
        display: flex
        display: -ms-flexbox
        margin: 0 auto
        // margin-top: 2vh
        padding: 0 15px
        position: relative
        flex-direction: column
        -ms-flex-direction: column
        img
            width: 95%
            margin: auto
            margin-bottom: 0
        .container-modal
            width: 100%
            background: $white
            border-radius: 5px
            padding-left: 15px
            padding-right: 15px
            padding-top: 15px
            h2
                font-family: 'Patua One', cursive
                font-size: 32px
                font-weight: bold
                text-align: center
                margin: 0
                padding-top: 30px
                padding-bottom: 10px
                display: none
            h3
                font-family: 'Rajdhani', sans-serif
                font-size: 21px
                line-height: 21px
                text-align: center
                color: #696969
                margin: 0
                font-weight: bold
                margin-bottom: 10px
                padding: 20px 0px 0px
            form
                width: 100%
                max-width: 420px
                margin: auto
                padding-bottom: 25px
                p
                    text-align: center
                    font-size: 14px
                    color: #696969
                    font-family: 'Rajdhani', sans-serif
                    font-weight: normal
                    margin-top: 0
                    margin-bottom: 2px
                input[type="number"]
                  -moz-appearance:textfield
                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button
                  -webkit-appearance: none
                .selectDisabled
                    color: #b2b1b1 !important
                    background: #e6e6e6
                .select-field
                    // color: #b2b1b1 !important
                    background: white
                .input-text
                    width: 100%
                    height: 43px
                    line-height: 43px
                    border: 1px solid #b2b1b1
                    font-family: 'Rajdhani', sans-serif
                    padding: 0 10px
                    font-weight: bold
                    font-size: 14px
                    color: #666
                    margin-bottom: 8px
                    &.day
                      width: 29%
                    &.month
                      width: 32.5%
                      text-transform: uppercase
                    &.year
                      width: 35%
                    &::placeholder
                      color: #b2b1b1
                    &::-ms-input-placeholder
                      color: #b2b1b1
                    &:-ms-input-placeholder
                      color: #b2b1b1
                .field-two-columns
                    width: 100% !important
                    display: inline-block
                    vertical-align
                .container-check
                    text-align: left !important
                    display: flex
                    display: -ms-flexbox
                    margin-bottom: 0px
                    margin-top: 5px
                    input[type="checkbox"]
                        width: 20px !important
                        height: 20px !important
                        border-radius: 5px !important
                        border: 1px solid #b2b1b1 !important
                        margin: 0
                        margin-right: 8px
                .btn-form
                    width: 100%
                    height: 45px
                    line-height: 45px
                    color: #fff
                    background: #ea1414
                    border: 0 solid
                    font-size: 19px
                    font-family: 'Rajdhani', sans-serif
                    font-weight: bold
                    margin-top: 10px
                    -webkit-appearance: none
                    -moz-appearance: none
                    appearance: none
                    &:hover
                      cursor: pointer
        .link
            color: $black
            display: block
            font-family: 'Rajdhani', sans-serif
            font-size: 0.9em
            padding-top: 10px
            text-align: center
            a
                color: $red
                font-family: 'Rajdhani', sans-serif
                font-weight: bold
    @media screen and (min-width: 768px)
      .modal
        width: 497px
        img
            width: 245px
            // width: 350px
            margin-bottom_ -15px
        .container-modal
          h3
            font-size: 24px
            line-height: 28px
            padding: 20px 40px 0px 40px
          .btn-form
            width: 275px
          form
            .field-two-columns
              width: 49.5% !important
</style>
