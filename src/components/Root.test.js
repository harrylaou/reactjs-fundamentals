import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Root from './Root'

import FakeConfigureStore from 'redux-mock-store'

describe('<Root />', () => {
  it('should render with default props', () => {

    const mockStore = FakeConfigureStore()
    const store = mockStore()

    const wrapper = shallow(<Root store={store}/>)

    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})