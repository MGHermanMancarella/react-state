import React from 'react'
import { render } from '@testing-library/react'
import Card from './Card.js'

//smokeTests for Cards
it('renders without crashing', function () {
  // this is a low-value test, but better than nothing
  render(<Card caption='test' src='test' currNum='0' totalNum='1' />)
})

// end

it('matches snapshot', function () {
  const { container } = render(
    <Card caption='test' src='test' currNum='0' totalNum='1' />
  )
  expect(container).toMatchSnapshot()
})
// end
