import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CatIndex from '../pages/CatIndex';

describe('CatIndex', () => {
  const cats = [
    {
      id: 1,
      name: 'Fluffy',
      age: 3,
      enjoys: 'Playing with yarn',
      img: 'fluffy.jpg',
    },
    {
      id: 2,
      name: 'Whiskers',
      age: 5,
      enjoys: 'Taking naps',
      img: 'whiskers.jpg',
    },
  ];

  it('renders cat cards with correct information', () => {
    render(
      <MemoryRouter>
        <CatIndex cats={cats} />
      </MemoryRouter>
    );


    expect(screen.getByText('Fluffy')).toBeInTheDocument();
    expect(screen.getByText('Whiskers')).toBeInTheDocument();


    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();


    expect(screen.getByText('Playing with yarn')).toBeInTheDocument();
    expect(screen.getByText('Taking naps')).toBeInTheDocument();


    expect(screen.getByAltText('Fluffy')).toBeInTheDocument();
    expect(screen.getByAltText('Whiskers')).toBeInTheDocument();
  });
});
