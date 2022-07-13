import { shallowMount } from '@vue/test-utils'
import mainForm from '@/components/Form/main-form'
import stickerForm from '@/components/Form/sticker-form'
import nameForm from '@/components/Form/name-form'

let wrapper = null

beforeEach(() => {
  wrapper = shallowMount(mainForm)
})

afterEach(() => {
  wrapper.destroy()
})

describe('main-form', () => {
  test('Is a vue instance', () => {
  
    expect(wrapper.exists()).toBeTruthy()
  })  

  test('Renders sticker-form', () => {
    const form = wrapper.findComponent(stickerForm)
  
    expect(form.exists()).toBeTruthy()
  }) 

  test('Renders name-form', () => {
    const name = wrapper.findComponent(nameForm)
  
    expect(name.exists()).toBeTruthy()
  }) 
})

