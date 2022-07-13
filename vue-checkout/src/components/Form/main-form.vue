<template>
  <div class="checkoutform">
    <fieldset>
      <div class="header">
        <p>Formulário para compra de</p>
        <h1>Pacote de adesivos</h1>
      </div>
      <name-form v-if="step == 1" @submit-name-form="submitNameForm"/>
      <sticker-form v-if="step == 2"  @submit-sticker-form="submitStickerForm" />
    </fieldset>
  </div>
</template>

<script>
import stickerForm from './sticker-form'
import nameForm from './name-form'
export default {
  name: 'mainForm',
  components: {
    stickerForm,
    nameForm
  },
  data() {
    return {
      step: 1
    }
  },
  methods: {
    submitNameForm(obj){
      console.log(obj)
      this.step = 2
    },
    submitStickerForm(obj){
      console.log(obj)
    },
  }
}
</script>

<style>
* {margin: 0; padding: 0;}

html {
	height: 100%;
	
	background: #8a2ae1;
}

body {
	font-family: arial, verdana;
}

.checkoutform {
	width: 500px;
	margin: 20px auto;
	position: relative;
  
}

.header {
  background-color: #2e3676;
  margin: 0;
  padding: 30px 30px 10px 30px;
  border: #2e3676 20px;

  color: white;
}

.checkoutform .circle {
  height: 800px;
  width: 800px;
  border-radius: 50%;
  display: inline-block;

  position: fixed;
  bottom: 75%;
  left: 20%;
  z-index: 10;
}

.checkoutform fieldset {
	background: white;
	border: 0 none;
	border-radius: 3px;
	box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
	padding: 20px 30px;
	box-sizing: border-box;
	width: 80%;
	margin: 0 10%;
	
	position: relative;
}
.checkoutform fieldset:not(:first-of-type) {
	display: none;
}
/*inputs*/
.checkoutform input, .checkoutform textarea {
	padding: 15px;
	border: 1px solid #ccc;
	border-radius: 3px;
	margin-bottom: 10px;
	width: 100%;
	box-sizing: border-box;
	font-family: montserrat;
	color: #2C3E50;
	font-size: 13px;
}

</style>
