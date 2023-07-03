import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CatShow from '../pages/CatShow';
import mockCats from '../mockCats';

describe('<CatShow />', () => {
  it('renders the cat information when the cat exists', () => {
    const cats = mockCats;
    const catId = '1';

    render(
      <MemoryRouter initialEntries={[`/catshow/${catId}`]}>
        <Routes>
          <Route
            path="/catshow/:id"
            element={<CatShow cats={cats} />}
          />
        </Routes>
      </MemoryRouter>
    );

    const catName = screen.getByText(new RegExp(cats[0].name, 'i'));
    const catAge = screen.getByText(new RegExp(cats[0].age, 'i'));
    const catEnjoys = screen.getByText(new RegExp(cats[0].enjoys, 'i'));

    expect(catName).toBeInTheDocument();
    expect(catAge).toBeInTheDocument();
    expect(catEnjoys).toBeInTheDocument();
  });
});
