import { shallowMount } from '@vue/test-utils'
import App from '@/App'

describe('App Tests', () => {
  test('Is a vue instance', () => {
    const wrapper = shallowMount(App)
  
    expect(wrapper.exists()).toBeTruthy()
  })  
})

