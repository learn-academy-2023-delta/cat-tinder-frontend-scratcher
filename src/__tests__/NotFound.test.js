import React from 'react'
import { render, screen } from '@testing-library/react'
import NotFound from '../pages/NotFound'

describe('<NotFound />', () => {
  
  it('renders without crashing', () => {
    render(<NotFound />)
    const headingElement = screen.getByRole('img', {
      name: /card image cap/i
    })
    expect(headingElement).toBeInTheDocument()
    
  })
  it('renders without crashing', () => {
    render(<NotFound />)
    const headingElement = screen.getByRole('heading', {
      name: /404 page not found/i
    })
    expect(headingElement).toBeInTheDocument()
    
  })
  it('renders without crashing', () => {
    render(<NotFound />)
    const headingElement = screen.getByText(/you are lost my friend\./i)
    expect(headingElement).toBeInTheDocument()
    
  })
})
