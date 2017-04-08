import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ConnectedLoginContainer, {LoginContainer} from './LoginContainer'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import FakeConfigureStore from 'redux-mock-store'
import {Provider} from 'react-redux'
import * as actions from '../actions/session'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

describe('<LoginContainer />', () => {
  let dispatchLoggedInAction, push, props, wrapper

  beforeEach(()=>{
    dispatchLoggedInAction = jest.fn()
    push = jest.fn()
    props = {
      router: {push},
      dispatchLoggedInAction
    }

    wrapper = shallow(
      <LoginContainer {...props} />
    )
  })

  it('should render with default props', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('Method #handleSubmit() with correct password', () => {
    wrapper.instance().state = {
      username: 'demo',
      password: '1234',
    }
    wrapper.instance().handleSubmit()

    expect(dispatchLoggedInAction).toBeCalledWith('this_token_should_come_from_your_auth_api')
    expect(push).toBeCalledWith('/')
  })

  it('Method #handleSubmit() without correct password', () => {
    const alertMock = jest.fn()
    global.alert = alertMock

    wrapper.instance().state = {
      username: '',
      password: '',
    }
    wrapper.instance().handleSubmit()

    expect(alertMock).toBeCalledWith('Invalid credentials')
  })

  it('Method #handleChange() should update state', () => {
    const setState = jest.fn()
    wrapper.instance().setState = setState

    const value = '12345'
    wrapper.instance().handleChange('password', { target: { value }})

    expect(setState).toBeCalledWith({ password: value })
  })

  it('Method #dispatchLoggedInAction() in dispatcher should update state', () => {
    const mockStore = FakeConfigureStore()
    const store = mockStore()
    const props = {}

    const container = mount(
      <Provider store={store} >
        <ConnectedLoginContainer
          {...props}
        />
      </Provider>,
      {
        context: {
          muiTheme: getMuiTheme()
        },
        childContextTypes:{
          muiTheme: React.PropTypes.object.isRequired,
        }
      }
    )

    container.find(LoginContainer).props().dispatchLoggedInAction()

    const action = store.getActions()
    expect(action[0].type).toBe(actions.LOGGED_IN)
  })
})