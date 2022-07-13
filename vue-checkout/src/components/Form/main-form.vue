<template>
  <div>
    <name-form v-if="step == 1" @submit-name-form="submitNameForm"/>
    <sticker-form v-if="step == 2"  @submit-sticker-form="submitStickerForm" />
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

</style>
