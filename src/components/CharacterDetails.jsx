import React from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Character Details</h2>
      <p>Displaying details for character ID: {id}</p>
    </div>
  );
};

export default CharacterDetails;