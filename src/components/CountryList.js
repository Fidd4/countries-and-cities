import React from 'react';
import PropTypes from 'prop-types';
import Country from './Country';
import { ListGroup } from 'reactstrap';

const CountryList = ({ countries=[], onSelectCountry=f=>f, countryActive=1 }) =>
  (
    <ListGroup>
      {
        countries.map(country =>
          <Country
            key={`country-${country.id}`}
            {...country}
            onSelectCountry={
              () => onSelectCountry(country.id)
            }
            countryActive={countryActive}
          />
        )
      }
    </ListGroup>
  );

CountryList.propTypes = {
  countries: PropTypes.array,
  countryActive: PropTypes.number,
  onSelectCountry: PropTypes.func
};

export default CountryList;