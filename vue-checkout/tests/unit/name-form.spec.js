import { shallowMount } from '@vue/test-utils'
import nameForm from '@/components/Form/name-form'

let wrapper = null

beforeEach(() => {
  wrapper = shallowMount(nameForm)
})

afterEach(() => {
  wrapper.destroy()
})

describe('name-form', () => {
  test('Is a vue instance', () => {
  
    expect(wrapper.exists()).toBeTruthy()
  })

  test('Renders name-form', () => {
    const name = wrapper.find(".name-form")

    expect(name.exists()).toBeTruthy()
  })

})

