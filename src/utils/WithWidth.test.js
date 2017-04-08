import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import WithWidth from './WithWidth'

describe('<WithWidth />', () => {
  const DemoElem = () => (
    <div>Hello World</div>
  )

  const Elem = WithWidth(DemoElem)

  it('should render with default props', () => {

  })

  it('should get LARGE width with default props', () => {

  })

  it('should get MEDIUM width with default props', () => {

  })

  it('should get SMALL width with default props', () => {

  })
})