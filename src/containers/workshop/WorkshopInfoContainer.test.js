import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ConnectedWorkshopInfoContainer, {WorkshopInfoContainer} from './WorkshopInfoContainer'
import { mockFetchContainer } from '../../testUtils'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import FakeConfigureStore from 'redux-mock-store'
import ActualConfigureStore from '../../store'
import {Provider} from 'react-redux'
import * as actions from '../../actions/workshop'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

describe('<UserProfileContainer />', () => {
  it('should render with default props', () => {

  })


  const workshopData = {
    workshop: {
      title: 'reactjs_fundamentals',
      price: 990,
      url: 'https://reactjs.academy/react-redux-training-london',
      instructors: [{
        name: 'Manolo',
        url: '',
        avatar: ''
      }]
    }
  }

  const initialState = {
    workshop: {
      title: 'reactjs_advanced',
      price: 990,
      url: 'https://reactjs.academy/react-redux-training-london',
      instructors: [{
        name: 'Paco',
        url: '',
        avatar: ''
      }]
    }
  }
  const mockStore = FakeConfigureStore()
  const props = {
    params: { workshop: '123' }
  }
  let store

  describe('<ConnectedWorkshopInfoContainer />', () => {
    it('should render connected component', () => {

    })
  })

  describe('Integration test: Mount + Wrapping Provider', () => {
    let wrapper

    beforeEach(()=>{
      store = mockStore(initialState)

      mockFetchContainer(workshopData.wprkshop)

      wrapper = mount(
        <Provider store={store} >
          <ConnectedWorkshopInfoContainer
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

    it('should Prop matches with initialState', () => {

    })

    it('should check action dispatch', () => {

    })
  })

  describe('Integration test: Mount + Wrapping Provider + Actual Store + Reducers', () => {
    let wrapper

    beforeEach(()=>{
      store = ActualConfigureStore(initialState)

      mockFetchContainer(workshopData.workshop)

      wrapper = mount(
        <Provider store={store} >
          <ConnectedWorkshopInfoContainer
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