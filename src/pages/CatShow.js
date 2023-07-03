import React from 'react';
import { useParams } from 'react-router-dom';

const CatShow = ({ cats }) => {
  const { id } = useParams();

  // Find the cat with the matching id
  const cat = cats.find((cat) => cat.id === parseInt(id));

   return (
    <div className="cat-show">
      <h2>{cat.name}</h2>
      <img src={cat.img} alt={cat.name} />
      <p>Age: {cat.age}</p>
      <p>Enjoys: {cat.enjoys}</p>
    </div>
  );
};

export default CatShow;
