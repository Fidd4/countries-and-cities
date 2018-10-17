import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button,
  Form,
  FormGroup,
  Input
} from 'reactstrap';

class City extends Component {
  constructor() {
    super();

    this.state = {
      editing: false
    }

    this.titleRef = React.createRef();
    this.descRef = React.createRef();

    this.submit = this.submit.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
  }

  submit(e) {
    e.preventDefault();

    if (!this.titleRef.current.value) return;
    
    this.props.editCity(
      this.titleRef.current.value,
      this.descRef.current.value
    );

    this.setState({
      editing: false
    });
  }

  onEditClick() {
    this.setState({
      editing: true
    })
  }

  onCancelClick() {
    this.setState({
      editing: false
    })
  }

  render() {
    const { title, desc, removeCity } = this.props;

    if (this.state.editing) {
      return (
        <ListGroupItem>
            <h5>Edit City — { title }</h5>
            <Form onSubmit={this.submit}>
              <FormGroup>
                <Input
                  innerRef={this.titleRef}
                  type="text"
                  defaultValue={title}>
                </Input>
              </FormGroup>
              <FormGroup>
                <Input
                  innerRef={this.descRef}
                  type="textarea"
                  defaultValue={desc}>
                </Input>
              </FormGroup>
              <Button color="primary">Save</Button>{' '}
              <Button color="link" onClick={this.onCancelClick}>
                Cancel
              </Button>
            </Form>
          </ListGroupItem>
      );
    }

    return (
      <ListGroupItem>
        <div className="float-right">
          <Button color="primary" onClick={this.onEditClick}>Edit</Button>{' '}
          <Button color="link" onClick={removeCity}>Remove</Button>
        </div>
        <ListGroupItemHeading>{title}</ListGroupItemHeading>
        <ListGroupItemText>{desc}</ListGroupItemText>
      </ListGroupItem>
    );
  }
}

City.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  removeCity: PropTypes.func,
  editCity: PropTypes.func
};

export default City;