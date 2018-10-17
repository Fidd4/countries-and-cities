import { connect } from 'react-redux';
import { setCountry } from '../actions/actions';
import CountryList from '../components/CountryList';

const mapStateToProps = (state) =>
  ({
    countries: [ ...state.countries ],
    countryActive: state.countryActive
  });

const mapDispatchToProps = (dispatch) =>
  ({
    onSelectCountry: country_id =>
      dispatch(setCountry(country_id))
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryList)