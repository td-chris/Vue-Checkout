import { shallowMount } from '@vue/test-utils'
import stickerForm from '@/components/Form/sticker-form'

let wrapper = null

beforeEach(() => {
  wrapper = shallowMount(stickerForm)
})

afterEach(() => {
  wrapper.destroy()
})

describe('main-form', () => {
  test('Is a vue instance', () => {
  
    expect(wrapper.exists()).toBeTruthy()
  })

  test('Renders the stickers of the stickers array', () => {
    wrapper.setData({
      stickers: [
        {name: 'React', quantity: 0, state: false},
        {name: 'Vue', quantity: 0, state: false},
        {name: 'Angular', quantity: 0, state: false},
      ]
    })

    expect(wrapper.vm.stickers.length).toBe(3)
  })

  test('Renders the stickers adder when the state is true', () => {
    wrapper.setData({
      stickers: [
        {name: 'React', quantity: 0, state: true},
        {name: 'Vue', quantity: 0, state: true},
        {name: 'Angular', quantity: 0, state: false},
      ]
    })

    let adders = wrapper.vm.stickers.filter(sticker => !!sticker.state)

    expect(adders.length).toBe(2)
  })

  test('Renders observation', () => {
    const observations = wrapper.find(".observations")

    expect(observations.exists()).toBeTruthy()
  })

  test('Renders observation', () => {
    const observations = wrapper.find(".submit")

    expect(observations.exists()).toBeTruthy()
  })
})

