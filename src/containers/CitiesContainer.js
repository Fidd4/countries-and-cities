import { connect } from 'react-redux';
import { removeCity, editCity } from '../actions/actions';
import { bindActionCreators } from 'redux'
import CityList from '../components/CityList';

const mapStateToProps = (state) =>
  ({
    cities: state.cities.filter(city =>
      city.country_id === state.countryActive
    ),
    countryActive: state.countryActive
  });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ removeCity, editCity }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityList)