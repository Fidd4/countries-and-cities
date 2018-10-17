import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from 'reactstrap';

class Country extends Component {
  render() {
    const { id, title, text, onSelectCountry, countryActive } = this.props;
    return (
      <ListGroupItem
        style={{cursor: 'pointer'}}
        className={
          (id === countryActive) ?
          'active' :
          ''
        }
        onClick={onSelectCountry}
      >
        <ListGroupItemHeading>{title}</ListGroupItemHeading>
        <ListGroupItemText>{text}</ListGroupItemText>
      </ListGroupItem>
    );
  }
}

Country.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
  countryActive: PropTypes.number,
  onSelectCountry: PropTypes.func
};

export default Country;