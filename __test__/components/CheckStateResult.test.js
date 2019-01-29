import React from 'react'
import CheckStateResult from '../../src/components/CheckStateResult'
import { mount } from 'enzyme'

const wrapper = mount(<CheckStateResult />)

describe('CheckStateResult Component', () => {
  test('Check initial value title', () => {
    expect(wrapper.find('.title').text()).toBe('Antigo titulo')
  })

  test('Simulate click event in ClassName .button', () => {
    wrapper.find('.button').simulate('click')
    expect(wrapper.find('.title').text()).toBe('Novo titulo')
  })
})