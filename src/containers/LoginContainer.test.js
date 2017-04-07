import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import {LoginContainer} from './LoginContainer'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

describe('<LoginContainer />', () => {
  it('should render with default props', () => {
    const dispatchLoggedInAction = jest.fn()
    const push = jest.fn()
    const props = {
      router: {push},
      dispatchLoggedInAction
    }

    const wrapper = shallow(
      <LoginContainer {...props} />
    )

    expect(shallowToJson(wrapper)).toMatchSnapshot()

    wrapper.instance().state = {
      username: 'demo',
      password: '1234',
    }
    wrapper.instance().handleSubmit()

    expect(dispatchLoggedInAction).toBeCalledWith('this_token_should_come_from_your_auth_api')
    expect(push).toBeCalledWith('/')
  })
})