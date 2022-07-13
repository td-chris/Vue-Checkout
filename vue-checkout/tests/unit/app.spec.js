import { shallowMount } from '@vue/test-utils'
import App from '@/App'
import mainForm from '@/components/Form/main-form'

let wrapper = null

beforeEach(() => {
  wrapper = shallowMount(App)
})

afterEach(() => {
  wrapper.destroy()
})

describe('App', () => {
  test('Is a vue instance', () => {
  
    expect(wrapper.exists()).toBeTruthy()
  })  

  test('Renders Form', () => {
    const form = wrapper.findComponent(mainForm)
  
    expect(form.exists()).toBeTruthy()
  }) 
})

