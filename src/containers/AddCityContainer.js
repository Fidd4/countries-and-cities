import { connect } from 'react-redux';
import { addCity } from '../actions/actions';
import AddCityForm from '../components/AddCityForm';

const mapStateToProps = (state) =>
  ({
    countryActive: state.countryActive
  });

const mapDispatchToProps = (dispatch) =>
  ({
    addNewCity: (country_id, title, desc) =>
      dispatch(addCity(country_id, title, desc))
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCityForm)