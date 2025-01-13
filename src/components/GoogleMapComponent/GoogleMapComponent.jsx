import React, { useState } from 'react';
import { LoadScript, Autocomplete } from '@react-google-maps/api';

const GoogleMapComponent = ({ onPlaceSelected }) => {
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autocompleteInstance) => {
    setAutocomplete(autocompleteInstance);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      onPlaceSelected(place);
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  };

  return (
    <LoadScript googleMapsApiKey="AlzaSyUOY_zJL2wnAPIB3Ws7gq-Spgc_0gfdeTN" libraries={['places']}>
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <input
          type="text"
          placeholder="Enter delivery location"
          style={{ width: '100%', padding: '12px' }}
        />
      </Autocomplete>
    </LoadScript>
  );
};

export default GoogleMapComponent;