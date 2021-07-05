import { mount } from '@vue/test-utils'
import Intro from './Intro.vue'

describe('Intro.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = mount(Intro, {
      propsData: { msg },
    })
    expect(wrapper.props().msg).toBe('new message')
  })

  it('triggers a click', async () => {
    const wrapper = mount(Intro)
    await wrapper.find('button').trigger('click')
  })
})
