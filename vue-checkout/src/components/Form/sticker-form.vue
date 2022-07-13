<template>
  <div>

    <div>
      <b>Quais adesivos:</b>
      <div class="sticker" v-for="sticker in stickers" :key="'sticker-'+sticker.name">
        <input type="checkbox" :id="'check-'+sticker.name" v-model="sticker.state" @click="resetState(sticker)">
        <label :for="'check-'+sticker.name">{{ sticker.name }}</label>
      </div>

      <b>Quantos adesivos de cada?</b>
      <div class="sticker-adder" v-for="sticker in stickers" :key="'sticker-adder-'+sticker.name">
        <div v-if="sticker.state">
          <label for="quantity">{{ sticker.name }}</label> <br>

          <button @click.stop="remove(sticker)" class="previous">&#8249;</button>
          <input type="number" id="quantity" name="quantity" min="0" v-model="sticker.quantity"> 
          <button @click.stop="add(sticker)" class="next">&#8250;</button>
        </div>
      </div>

      <div class="observations">
        <label for="observations"><b>Observações: </b></label> <br>
        <textarea
          id="observations"
          name="observations"
          rows="4"
          cols="50"
          placeholder="Alguma dúvida? Recado?"
          v-model="observation"
        >
        </textarea>
      </div>

      <div class="submit">
        <button @click="submitStickers()">Enviar</button>
      </div>
    </div>

  </div>
</template>

<script>

export default ({
  name: 'sticker-form',
  data (){
    return {
      stickers: [
        {name: 'React', quantity: 0, state: true},
        {name: 'Vue', quantity: 0, state: false},
        {name: 'Angular', quantity: 0, state: false},
      ],
      observation: '',
    }
  },

  methods: {
    add(sticker){
      sticker.quantity++
    },
    remove(sticker){
      if(sticker.quantity == 0){
        return false
      }else {
        sticker.quantity--
      }
    },
    resetState(sticker){
      if(!sticker.state){
        sticker.quantity = 0
      }
    },
    submitStickers(){
      let data = this._data
      let stickersList = data.stickers
      let checkStickers = false

      stickersList = stickersList.filter(sticker => sticker.state)

      if(stickersList && !!stickersList.length){
        stickersList.map(sticker => {
          if(sticker.state && sticker.quantity <= 0){
  
            alert('Não foi possível enviar os dados por falta de informação! Adesivo selecionado mas sem quantidade!!')
            checkStickers = false
            return false
          }else {
            checkStickers = true
          }
        })
      }else {
        alert('Não foi possível enviar os dados por falta de informação! Nenhum adesivo selecionado!!')
        return false
      }

      if(checkStickers){
        this.$emit('submit-sticker-form', {...this._data})
      }
    }
  },
})
</script>


<style>

</style>