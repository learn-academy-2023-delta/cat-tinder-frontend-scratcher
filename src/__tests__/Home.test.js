import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/Home'

describe('<Home />', () => {
  it('renders without crashing', () => {
    render(<Home />)
    const homeElement = screen.getByText('Home')
    expect(homeElement).toBeInTheDocument()
  })
  it('renders without crashing', () => {
    render(<Home />)
    const homeElement = screen.getByRole('img', {
      name: /card image cap/i
    })
    expect(homeElement).toBeInTheDocument()
  })
  it('renders without crashing', () => {
    render(<Home />)
    const homeElement = screen.getByRole('heading', {
      name: /card title/i
    })
    expect(homeElement).toBeInTheDocument()
  })
  it('renders without crashing', () => {
    render(<Home />)
    const homeElement = screen.getByText(
      /this is a wider card with supporting text below as a natural lead\-in to additional content\. this content is a little bit longer\./i
      )
    expect(homeElement).toBeInTheDocument()
  })
  it('renders without crashing', () => {
    render(<Home />)
    const homeElement = screen.getByText(/last updated 3 mins ago/i)
    expect(homeElement).toBeInTheDocument()
  })
})

