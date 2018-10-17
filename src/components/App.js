import React, { Component } from 'react';
import CitiesContainer from '../containers/CitiesContainer';
import CountriesContainer from '../containers/CountriesContainer';
import AddCityContainer from '../containers/AddCityContainer';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <br />
        <Row>
          <Col xs="4">
            <h5>Countries</h5>
            <CountriesContainer />
          </Col>
          <Col xs="8">
            <h5>Cities</h5>
            <AddCityContainer />
            <CitiesContainer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
