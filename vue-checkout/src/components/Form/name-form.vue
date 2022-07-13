<template>
  <div class="name-form">
    <label for="name">Qual seu nome?</label>
    <input id="name" type="text" v-model="name">

    <div class="submit">
      <button @click="submitName()">Próximo</button>
    </div>
  </div>
</template>

<script>

export default ({
  name: 'sticker-form',
  data (){
    return {
      name: ''
    }
  },

  methods: {
    submitName(){
      let data = this._data
      
      if(!data.name){
        alert('Por favor insira seu nome!')
        return false
      }else{
        this.$emit('submit-name-form', {...this._data})
      }
    }
  },
})
</script>


<style>

</style>