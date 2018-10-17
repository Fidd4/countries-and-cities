import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ListGroup,
  ListGroupItem,
  Button,
  Input,
  Form,
  FormGroup,
  Collapse
} from 'reactstrap';

class AddCityForm extends Component {
  constructor() {
    super();

    this.state = {
      collapse: false
    }

    this.titleRef = React.createRef();
    this.descRef = React.createRef();

    this.toggle = this.toggle.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();

    if (!this.titleRef.current.value) return;
    
    this.props.addNewCity(
      this.props.countryActive,
      this.titleRef.current.value,
      this.descRef.current.value
    )

    this.titleRef.current.value = '';
    this.descRef.current.value = '';
    this.titleRef.current.focus();
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <ListGroup>
        <ListGroupItem>
          <Button
            color="primary"
            size="lg"
            block
            onClick={this.toggle}
          >
            Add City
          </Button>
          <Collapse isOpen={this.state.collapse}>
            <Form onSubmit={this.submit}>
              <h5 className="mt">Add City</h5>
              <FormGroup>
                <Input
                  innerRef={this.titleRef}
                  type="text"
                  placeholder="City name">
                </Input>
              </FormGroup>
              <FormGroup>
                <Input
                  type="textarea"
                  innerRef={this.descRef}
                  placeholder="City description">
                </Input>
              </FormGroup>
              <Button color="primary">
                Submit
              </Button>
            </Form>
          </Collapse>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

AddCityForm.propTypes = {
  countryActive: PropTypes.number,
  addNewCity: PropTypes.func
};

export default AddCityForm;