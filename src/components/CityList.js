import React from 'react';
import PropTypes from 'prop-types';
import City from './City';
import { ListGroup } from 'reactstrap';

const CityList = ({ cities=[], removeCity=f=>f, editCity=f=>f }) =>
  (
    <ListGroup>
      {
        cities.map(city =>
          <City
            key={`city-${city.id}`}
            {...city}
            removeCity={() =>
              removeCity(city.id)
            }
            editCity={(title, desc) =>
              editCity(city.id, title, desc)
            }
          />
        )
      }
    </ListGroup>
  );

CityList.propTypes = {
  cities: PropTypes.array,
  removeCity: PropTypes.func,
  editCity: PropTypes.func
};

export default CityList;