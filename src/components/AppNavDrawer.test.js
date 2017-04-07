import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import RouterAppNavDrawer, {AppNavDrawer} from './AppNavDrawer'

import getMuiTheme from 'material-ui/styles/getMuiTheme'

describe('<AppNavDrawer />', () => {
  it('should render with default props', () => {
    const toggleNav = jest.fn();
    const push = jest.fn();
    const props = {
      styles: {},
      open: false,
      router: {push},
      toggleNav
    }

    const wrapper = shallow(
      <AppNavDrawer {...props} />,
      {context: {
        muiTheme: getMuiTheme()
      }}
    )

    expect(shallowToJson(wrapper)).toMatchSnapshot()

    wrapper.find('MenuItem').at(0).simulate('click')

    expect(push).toBeCalledWith('/users')
    expect(toggleNav).toBeCalled()
  })
})