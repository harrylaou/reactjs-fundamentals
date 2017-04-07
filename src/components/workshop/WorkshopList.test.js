import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import WorkshopList from './WorkshopList'

describe('<WorkshopList />', () => {
  it('should render with default props', () => {
    const onClick = jest.fn();
    const workshop = {
      id: 'rfct123',
      title: 'React Fundamentals',
      price: 990,
      instructors: [{ avatar: 'goo.gl/7f00gI'}]
    }
    const props = {
      workshops: [workshop],
      width: 3,
      showWorkshop: onClick
    }

    const wrapper = shallow(
      <WorkshopList {...props} />
    )

    expect(shallowToJson(wrapper)).toMatchSnapshot()

    wrapper.find('ListItem').simulate('click')

    expect(onClick).toBeCalledWith(workshop)
  })
})