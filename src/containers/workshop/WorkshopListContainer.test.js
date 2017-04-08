import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ConnectedWorkshopListContainer, {WorkshopListContainer} from './WorkshopListContainer'
import { mockFetchContainer } from '../../testUtils'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import FakeConfigureStore from 'redux-mock-store'
import ActualConfigureStore from '../../store'
import {Provider} from 'react-redux'
import * as actions from '../../actions/workshops'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

describe('<WorkshopListContainer />', () => {
  it('should render with default props', () => {

  })


  const workshopData = {
    workshops: [{
      title: 'reactjs_fundamentals',
      price: 990,
      url: 'https://reactjs.academy/react-redux-training-london',
      instructors: [{
        name: 'Manolo',
        url: '',
        avatar: ''
      }]
    }]
  }

  const initialState = {
    workshops: [{
      title: 'reactjs_advanced',
      price: 990,
      url: 'https://reactjs.academy/react-redux-training-london',
      instructors: [{
        name: 'Paco',
        url: '',
        avatar: ''
      }]
    }]
  }
  const mockStore = FakeConfigureStore()

  const push = jest.fn()
  const replace = () => {}
  const go = () => {}
  const goBack = () => {}
  const goForward = () => {}
  const setRouteLeaveHook = () => {}
  const isActive = () => {}

  const props = {
    params: { workshop: '123' },
    width: 3,
    router: {
      push,
      replace,
      go,
      goBack,
      goForward,
      setRouteLeaveHook,
      isActive,
      setRouteLeaveHook
    },
    workshops: []
  }
  let store

  describe('<ConnectedWorkshopListContainer />', () => {
    it('should render connected component', () => {

    })
  })

  describe('Integration test: Mount + Wrapping Provider', () => {

    it('should mount and map connect connected component', () => {

    })

    it('should Prop matches with initialState', () => {

    })

    it('should check action dispatch', () => {

    })
  })

  describe('Integration test: Mount + Wrapping Provider + Actual Store + Reducers', () => {
    let wrapper

    beforeEach(()=>{
      store = ActualConfigureStore(initialState)

      mockFetchContainer(workshopData.workshops)

      wrapper = mount(
        <Provider store={store} >
          <ConnectedWorkshopListContainer
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
    })

    it('should mount and map connect connected component', () => {

    })

    it('should check action dispatch', () => {

    })
  })
})