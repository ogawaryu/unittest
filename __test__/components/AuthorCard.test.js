import React from 'react'
import AuthotCard from '../../src/components/AuthorCard'
import { shallow } from 'enzyme'

describe('AuthorCard Component', () => {

  test('To render UserName in element div className `.name`', () => {
    let userName = 'John'
    const wrapper = shallow(<AuthotCard userName={userName} />)
    expect(wrapper.find('.name').text()).toBe(userName)
  })

  test('Simulate click event in ClassName .button', () => {
    const spy = jest.fn()
    const wrapper = shallow(<AuthotCard onClick={spy} />)
    wrapper.find('.button').simulate('click')

    expect(spy).toHaveBeenCalled()
  })

})